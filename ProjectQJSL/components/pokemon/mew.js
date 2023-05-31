import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Mew(props){
    return (
        <Viro3DObject source={require("../../models/Mew/pm0151_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Mew/pm0151_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["r_eye_mew", "l_eye_mew", "body_b_00_mew", "body_a_00_mew"]}/>
    )
}


ViroMaterials.createMaterials({
    body_b_00_mew: {"diffuseTexture": require("../../models/Mew/pm0151_00_00_body_b_alb.png")},
    body_a_00_mew: {"diffuseTexture": require("../../models/Mew/pm0151_00_00_body_a_alb.png")},
    r_eye_mew: {"diffuseTexture": require("../../models/Mew/pm0151_00_00_eye_alb.png")},
    l_eye_mew: {"diffuseTexture": require("../../models/Mew/pm0151_00_00_eye_alb.png")}
})