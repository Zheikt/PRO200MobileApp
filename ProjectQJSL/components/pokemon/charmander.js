import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Charmander(props){
    return (
        <Viro3DObject source={require("../../models/Charmander/pm0004_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Charmander/pm0004_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["r_eye_charmander", "l_eye_charmander", "body_charmander", "fire_charmander"]}/>
    )
}


ViroMaterials.createMaterials({
    body_charmander: {"diffuseTexture": require("../../models/Charmander/pm0004_00_00_body_alb.png")},
    r_eye_charmander: {"diffuseTexture": require("../../models/Charmander/pm0004_00_00_eye_alb.png")},
    l_eye_charmander: {"diffuseTexture": require("../../models/Charmander/pm0004_00_00_eye_alb.png")},
    fire_charmander: {"diffuseTexture": require("../../models/Charmander/pm0004_00_00_fire_alb.png")}
})