import React from 'react';
import {ViroMaterials, Viro3DObject} from '@viro-community/react-viro';


export default function Oshawott(props){
    return (
        <Viro3DObject source={require("../../models/Oshawott/pm0501_00_00.obj")} scale={[props.scaleX, props.scaleY, props.scaleZ]}
        resources={[require("../../models/Oshawott/pm0501_00_00.mtl")]}  position={[props.posX, props.posY, props.posZ]}
        type="OBJ" materials={[ "body_00_oshawott", "l_eye_oshawott", "r_eye_oshawott"]}/>
    )
}


ViroMaterials.createMaterials({
    body_00_oshawott: {"diffuseTexture": require("../../models/Oshawott/pm0501_00_00_body_alb.png")},
    r_eye_oshawott: {"diffuseTexture": require("../../models/Oshawott/pm0501_00_00_eye_alb.png")},
    l_eye_oshawott: {"diffuseTexture": require("../../models/Oshawott/pm0501_00_00_eye_alb.png")}
})