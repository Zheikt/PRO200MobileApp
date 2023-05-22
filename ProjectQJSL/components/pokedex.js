import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARSceneNavigator,
    ViroARPlane,
    ViroNode,
    ViroButton
} from '@viro-community/react-viro';

const POKEDEX_MAX_VISIBLE = 5;

export default function Pokedex() {
    let foundPokemon = foundPokemon=[{"name": "Charizard", "id": 9}, {"name": "Blastoise", "id": 6}, {"name": "Venasaur", "id": 3}]
    let pokemonOffset = 0;
    const [pokemon, setPokemon] = useState(foundPokemon.slice(pokemonOffset, POKEDEX_MAX_VISIBLE));
    
    function _OnClick(position, source){
        console.log("Clicked: " + pokemon[Math.floor(position[1])])
    }

    function _OnSwipe(state, source){
        if(state == 1 && (pokemonOffset + POKEDEX_MAX_VISIBLE + 1) < props.foundPokemon.Length){
            //Swipe up
            setPokemon(props.foundPokemon.slice(++pokemonOffset, (POKEDEX_MAX_VISIBLE + pokemonOffset)));
        } else if (state == 2 && pokemonOffset - 1 >= 0){
            //Swipe down
            setPokemon(props.foundPokemon.slice(--pokemonOffset, (POKEDEX_MAX_VISIBLE + pokemonOffset)));
        }
    }

    return (
        <ViroNode position={[1, 0, 0]} rotation={[-90, 0, 0]} scale={[5, 5, 5]} transformBehaviors={["billboard"]} onClick={_OnClick} onSwipe={_OnSwipe}>
            {
                pokemon.map((pokemon, index) => {
                    if (index < POKEDEX_MAX_VISIBLE) {
                        let pkmnStr = pokemon.id + " - " + pokemon.name;
                        return (<ViroText key={pokemon.id} text={pkmnStr} position={[0, 4.5 - index, 0]} height={1} ignoreEventHandling={true}/>);
                    }
                })
            }
            
        </ViroNode>
    );
}

