import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARSceneNavigator,
    ViroARPlane,
    Viro3DObject,
    ViroFlexView,
    ViroMaterials,
    ViroButton
} from '@viro-community/react-viro';

import Pokedex from './pokedex';
import Charizard from './pokemon/charizard';

export default function ARView() {
    return (
        <ViroARSceneNavigator autofocus={true} initialScene={{scene: MainScene}} />
    );
}

function MainScene() {
    const [pokemonSpawned, setPokemonSpawned] = useState([]);
    
    function _onClick(position, source){
        console.log("Button Clicked!");
        let newPkmnSpawned = pokemonSpawned.map(x => x);
        newPkmnSpawned.push(<Charizard scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={Math.random()} posY={Math.random()} posZ={Math.random()}/>)
        setPokemonSpawned(newPkmnSpawned);
    }

    return (
        <ViroARScene onTrackingUpdated={onInitialized}>
            <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
                position={[0, 0, 0.25]} scale={[0.25, 0.25, 0.25]} onClick={_onClick}/>
            {
                pokemonSpawned
            }
            {/* <Pokedex />
            <ViroText text="Hello World" />
            <Viro3DObject source={require("../models/Charizard/pm0006_00_00.obj")} scale={[0.5, 0.5, 0.5]}
            resources={[require("../models/Charizard/pm0006_00_00.mtl")]}  position={[0,0,-4]}
            type="OBJ" materials={["body_b", "l_eye", "r_eye", "body_a", "body_b", "fire"]}/> */}
        </ViroARScene>
    );
}

function onInitialized(state, reason) {
    console.log('arTracking', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
        //setText('Project Q.J.S.L. Dex');
    } else if (state === ViroConstants.TRACKING_NONE) {
        // Handle loss of tracking
    }
}



// ViroMaterials.createMaterials({
//     body: {"diffuseTexture": require("../models/Charmander/pm0004_00_00_body_alb.png")},
//     r_eye: {"diffuseTexture": require("../models/Charmander/pm0004_00_00_eye_alb.png")},
//     l_eye: {"diffuseTexture": require("../models/Charmander/pm0004_00_00_eye_alb.png")},
//     fire: {"diffuseTexture": require("../models/Charmander/pm0004_00_00_fire_alb.png")}
// });