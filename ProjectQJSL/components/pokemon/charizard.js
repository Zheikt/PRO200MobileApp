import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Charizard(props){
    return (
        <Viro3DObject source={require("../../models/Charizard/pm0006_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Charizard/pm0006_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["body_b", "l_eye", "r_eye", "body_a", "body_b", "fire"]}/>
    )
}


ViroMaterials.createMaterials({
    body_b: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_body_b_alb.png")},
    body_a: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_body_a_alb.png")},
    r_eye: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_eye_alb.png")},
    l_eye: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_eye_alb.png")},
    fire: {"diffuseTexture": require("../../models/Charizard/pm0006_00_00_fire_alb.png")}
})