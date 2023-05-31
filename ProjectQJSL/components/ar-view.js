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
import Charmander from './pokemon/charmander';
import Charmeleon from './pokemon/charmeleon';
import Charizard from './pokemon/charizard';
import Mew from './pokemon/mew';
import Oshawott from './pokemon/oshawatt';
import Dewott from './pokemon/dewott';
import Samurott from './pokemon/samurott';
import Chespin from './pokemon/chespin';
import Quilladin from './pokemon/quilladin';
import Chesnaught from './pokemon/chesnaught';


export default function ARView() {
    return (
        <ViroARSceneNavigator autofocus={true} initialScene={{ scene: MainScene }} />
    );
}



function MainScene() {
    const [pokemonSpawned, setPokemonSpawned] = useState([]);
    const pokemonButtons = [<ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[-0.2, 0, 1]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [-0.2, 0, 1], "name": "Charmander" })} />,
    <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[0.2, 0, 1]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [0.2, 0, 1], "name": "Charmeleon" })} />,
    <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[0.6, 0, 0.5]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [0.6, 0, 0.5], "name": "Charizard" })} />,
    <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[1, 0, 0]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [1, 0, 0], "name": "Mew" })} />,
    <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[0.6, 0, -0.5]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [0.6, 0, -0.5], "name": "Oshawott" })} />,
    <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[0.2, 0, -1]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [0.2, 0, -1], "name": "Dewott" })} />,
    <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[-0.2, 0, -1]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [-0.2, 0, -1], "name": "Samurott" })} />,
    <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[-0.6, 0, -0.5]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [-0.6, 0, -0.5], "name": "Chespin" })} />,
    <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[-1, 0, 0]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [-1, 0, 0], "name": "Quilladin" })} />,
    <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} transformBehaviors={["billboard"]}
        position={[-0.6, 0, 0.5]} scale={[0.25, 0.25, 0.25]} onClick={_onClick.bind({ "position": [-0.6, 0, 0.5], "name": "Chesnaught" })} />
    ]
    function _onClick(position, source) {
        console.log("Button Clicked!");
        let newPkmnSpawned = pokemonSpawned.map(x => x);
        let index = newPkmnSpawned.findIndex(pkmn => pkmn['props'].name == this.name);
        let btnIndex = pokemonButtons.findIndex(btn => btn['props'].position[0] == this.position[0] && btn['props'].position[2] == this.position[2]);
        if (index == -1) {
            switch (btnIndex) {
                case 0:
                    newPkmnSpawned.push(<Charmander name="Charmander" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
                case 1:
                    newPkmnSpawned.push(<Charmeleon name="Charmeleon" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
                case 2:
                    newPkmnSpawned.push(<Charizard name="Charizard" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
                case 3:
                    newPkmnSpawned.push(<Mew name="Mew" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
                case 4:
                    newPkmnSpawned.push(<Oshawott name="Oshawott" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
                case 5:
                    newPkmnSpawned.push(<Dewott name="Dewott" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
                case 6:
                    newPkmnSpawned.push(<Samurott name="Samurott" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
                case 7:
                    newPkmnSpawned.push(<Chespin name="Chespin" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
                case 8:
                    newPkmnSpawned.push(<Quilladin name="Quilladin" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
                case 9:
                    newPkmnSpawned.push(<Chesnaught name="Chesnaught" scaleX={0.25} scaleY={0.25} scaleZ={0.25} posX={position[0]} posY={position[1] + 0.5} posZ={position[2]} />);
                    break;
            }
        } else {
            newPkmnSpawned.splice(index, 1);
        }

        setPokemonSpawned(newPkmnSpawned);
    }

    return (
        <ViroARScene onTrackingUpdated={onInitialized}>
            {
                pokemonButtons
            }
            {
                pokemonSpawned
            }
        </ViroARScene>
    );
}

function onInitialized(state, reason) {
    console.log('arTracking', state, reason);
}