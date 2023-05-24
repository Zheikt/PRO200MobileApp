import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARSceneNavigator,
    ViroARPlane,
} from '@viro-community/react-viro';

import Pokedex from './pokedex';

export default function ARView(props) {
    function onInitialized(state, reason) {
        console.log('arTracking', state, reason);
        if (state === ViroConstants.TRACKING_NORMAL) {
            //setText('Project Q.J.S.L. Dex');
        } else if (state === ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
    }

    return (
        <ViroARSceneNavigator autofocus={true} initialScene={() => {
            return (
                <ViroARScene onTrackingUpdated={onInitialized}>
                    <Pokedex foundPokemon={props.foundPokemon} />
                </ViroARScene>
            );
        }
        } />
    );
}

