import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Quilladin(props){
    return (
        <Viro3DObject source={require("../../models/Quilladin/pm0721_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Quilladin/pm0721_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["l_eye_quilladin", "r_eye_quilladin", "body_b_quilladin", "body_b_quilladin", "body_a_quilladin"]}/>
    )
}


ViroMaterials.createMaterials({
    body_b_quilladin: {"diffuseTexture": require("../../models/Quilladin/pm0721_00_00_body_b_alb.png")},
    body_a_quilladin: {"diffuseTexture": require("../../models/Quilladin/pm0721_00_00_body_a_alb.png")},
    r_eye_quilladin: {"diffuseTexture": require("../../models/Quilladin/pm0721_00_00_eye_alb.png")},
    l_eye_quilladin: {"diffuseTexture": require("../../models/Quilladin/pm0721_00_00_eye_alb.png")}
})