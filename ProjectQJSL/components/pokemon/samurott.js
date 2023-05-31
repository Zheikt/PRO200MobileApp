import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Samurott(props){
    return (
        <Viro3DObject source={require("../../models/Samurott/pm0503_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Samurott/pm0503_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["r_eye_samurott", "l_eye_samurott", "body_b_samurott", "body_a_00_samurott"]}/>
    )
}


ViroMaterials.createMaterials({
    body_b_samurott: {"diffuseTexture": require("../../models/Samurott/pm0503_00_00_body_b_alb.png")},
    body_a_00_samurott: {"diffuseTexture": require("../../models/Samurott/pm0503_00_00_body_a_alb.png")},
    r_eye_samurott: {"diffuseTexture": require("../../models/Samurott/pm0503_00_00_eye_alb.png")},
    l_eye_samurott: {"diffuseTexture": require("../../models/Samurott/pm0503_00_00_eye_alb.png")}
})