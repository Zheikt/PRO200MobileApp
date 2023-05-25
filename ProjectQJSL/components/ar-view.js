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
    ViroMaterials
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
            {/* <Pokedex /> */}
            <ViroText text="Hello World" />
            <Viro3DObject source={require("../models/Charizard/pm0006_00_00.obj")} scale={[0.5, 0.5, 0.5]}
            resources={[require("../models/Charizard/pm0006_00_00.mtl")]}  position={[0,0,-4]}
            type="OBJ" materials={["body_b", "l_eye", "r_eye", "body_a", "body_b", "fire"]}/>
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

ViroMaterials.createMaterials({
    body_b: {"diffuseTexture": require("../models/Charizard/pm0006_00_00_body_b_alb.png")},
    body_a: {"diffuseTexture": require("../models/Charizard/pm0006_00_00_body_a_alb.png")},
    r_eye: {"diffuseTexture": require("../models/Charizard/pm0006_00_00_eye_alb.png")},
    l_eye: {"diffuseTexture": require("../models/Charizard/pm0006_00_00_eye_alb.png")},
    fire: {"diffuseTexture": require("../models/Charizard/pm0006_00_00_fire_alb.png")}
})

// ViroMaterials.createMaterials({
//     body: {"diffuseTexture": require("../models/Charmander/pm0004_00_00_body_alb.png")},
//     r_eye: {"diffuseTexture": require("../models/Charmander/pm0004_00_00_eye_alb.png")},
//     l_eye: {"diffuseTexture": require("../models/Charmander/pm0004_00_00_eye_alb.png")},
//     fire: {"diffuseTexture": require("../models/Charmander/pm0004_00_00_fire_alb.png")}
// });