import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Dewott(props){
    return (
        <Viro3DObject source={require("../../models/Dewott/pm0502_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Dewott/pm0502_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={["r_eye_dewott", "l_eye_dewott", "body_a_dewott", "body_b_00_dewott"]}/>
    )
}


ViroMaterials.createMaterials({
    body_b_00_dewott: {"diffuseTexture": require("../../models/Dewott/pm0502_00_00_body_b_alb.png")},
    body_a_dewott: {"diffuseTexture": require("../../models/Dewott/pm0502_00_00_body_a_alb.png")},
    r_eye_dewott: {"diffuseTexture": require("../../models/Dewott/pm0502_00_00_eye_alb.png")},
    l_eye_dewott: {"diffuseTexture": require("../../models/Dewott/pm0502_00_00_eye_alb.png")}
})