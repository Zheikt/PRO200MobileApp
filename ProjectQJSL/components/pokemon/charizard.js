import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Charizard(props){
    return (
        <Viro3DObject source={require("../../models/Charizard/pm0006_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Charizard/pm0006_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["body_b_charizard", "l_eye_charizard", "r_eye_charizard", "body_a_charizard", "body_b_charizard", "fire_charizard"]}/>
    )
}


ViroMaterials.createMaterials({
    body_b_charizard: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_body_b_alb.png")},
    body_a_charizard: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_body_a_alb.png")},
    r_eye_charizard: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_eye_alb.png")},
    l_eye_charizard: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_eye_alb.png")},
    fire_charizard: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_fire_alb.png")}
})