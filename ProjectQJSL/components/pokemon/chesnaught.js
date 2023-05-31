import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Chesnaught(props){
    return (
        <Viro3DObject source={require("../../models/Chesnaught/pm0722_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Chesnaught/pm0722_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["r_eye_chesnaught", "l_eye_chesnaught", "body_b_00_chesnaught", "body_b_00_chesnaught", "body_a_00_chesnaught", "body_b_00_chesnaught", "body_a_00_chesnaught", "body_a_00_chesnaught"]}/>
    )
}


ViroMaterials.createMaterials({
    body_b_00_chesnaught: {"diffuseTexture": require("../../models/Chesnaught/pm0722_00_00_body_b_alb.png")},
    body_a_00_chesnaught: {"diffuseTexture": require("../../models/Chesnaught/pm0722_00_00_body_a_alb.png")},
    r_eye_chesnaught: {"diffuseTexture": require("../../models/Chesnaught/pm0722_00_00_eye_alb.png")},
    l_eye_chesnaught: {"diffuseTexture": require("../../models/Chesnaught/pm0722_00_00_eye_alb.png")}
})