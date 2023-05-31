import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Charmeleon(props){
    return (
        <Viro3DObject source={require("../../models/Charmeleon/pm0005_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Charmeleon/pm0005_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["r_eye_charmeleon", "l_eye_charmeleon", "body_charmeleon", "fire_charmeleon"]}/>
    )
}


ViroMaterials.createMaterials({
    body_charmeleon: {"diffuseTexture": require("../../models/Charmeleon/pm0005_00_00_body_a_alb.png")},
    r_eye_charmeleon: {"diffuseTexture": require("../../models/Charmeleon/pm0005_00_00_eye_alb.png")},
    l_eye_charmeleon: {"diffuseTexture": require("../../models/Charmeleon/pm0005_00_00_eye_alb.png")},
    fire_charmeleon: {"diffuseTexture": require("../../models/Charmeleon/pm0005_00_00_fire_alb.png")}
})