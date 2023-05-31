import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Chespin(props){
    return (
        <Viro3DObject source={require("../../models/Chespin/pm0720_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Chespin/pm0720_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["r_eye_chespin", "l_eye_chespin", "body_a_chespin", "body_b_chespin", "body_a_chespin", "body_b_chespin"]}/>
    )
}


ViroMaterials.createMaterials({
    body_b_chespin: {"diffuseTexture": require("../../models/Chespin/pm0720_00_00_body_b_alb.png")},
    body_a_chespin: {"diffuseTexture": require("../../models/Chespin/pm0720_00_00_body_a_alb.png")},
    r_eye_chespin: {"diffuseTexture": require("../../models/Chespin/pm0720_00_00_eye_alb.png")},
    l_eye_chespin: {"diffuseTexture": require("../../models/Chespin/pm0720_00_00_eye_alb.png")}
})