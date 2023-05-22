import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARSceneNavigator,
    ViroARPlane,
} from '@viro-community/react-viro';
//import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

import Pokedex from './pokedex';

// let cameraPermission = Platform.OS === 'ios' ? await check(PERMISSIONS.IOS.CAMERA) : 
//     Platform.OS === 'android' ? await check(PERMISSIONS.ANDROID.CAMERA) : RESULTS.UNAVAILABLE;

export default function ARView({props}) {
    // if(cameraPermission !== RESULTS.GRANTED && cameraPermission !== RESULTS.UNAVAILABLE){
    //     if(Platform.OS === 'ios'){
    //         request(PERMISSIONS.IOS.CAMERA).then((result) => {
    //             cameraPermission = result;
    //             switch(result){
    //                 case RESULTS.DENIED:
    //                     //close app or try again
    //                     break;
    //                 case RESULTS.BLOCKED:
    //                     //close app
    //                     break;
    //                 case RESULTS.GRANTED:
    //                     //Continue with execution
    //                     break;
    //             }
    //         })
    //     }
    // }
    return (
        <ViroARSceneNavigator autofocus={true} initialScene={{scene: MainScene}} />
    );
}

function MainScene({props}) {
    return (
        <ViroARScene onTrackingUpdated={onInitialized}>
            <Pokedex />
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