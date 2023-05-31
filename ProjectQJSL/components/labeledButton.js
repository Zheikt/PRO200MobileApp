import React from 'react';
import { ViroButton, ViroText, ViroFlexView, ViroNode } from '@viro-community/react-viro';

export default function LabeledButton(props) {
    return (
        <ViroNode style={{flexDirection: "column"}} position={props.position} transformBehaviors={["billboard"]}>
            <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} 
                scale={[0.25, 0.25, 0.25]} onClick={props._onClick} />
            <ViroText text={props.name} position={[0, -0.75, 0]} scale={[0.25, 0.25, 0.25]} style={{fontSize: 40, textAlign: 'center'}}/>
        </ViroNode>
    )
}