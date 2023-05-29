import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARSceneNavigator,
    ViroARPlane,
    ViroNode,
    ViroButton,
    ViroFlexView
} from '@viro-community/react-viro';

const POKEDEX_MAX_VISIBLE = 5;

export default function Pokedex() {
    let foundPokemon = foundPokemon=[{"name": "Charizard", "id": 9}, {"name": "Blastoise", "id": 6}, {"name": "Venasaur", "id": 3}]
    foundPokemon.sort((pkmn1, pkmn2) => pkmn1.id > pkmn2.id ? 1 : pkmn1.id < pkmn2.id ? -1 : 0);
    let pokemonOffset = 0;
    const [pokemon, setPokemon] = useState(foundPokemon.slice(pokemonOffset, POKEDEX_MAX_VISIBLE));
    
    function _OnClick(position, source){
        console.log("Clicked: " + pokemon[Math.floor(position[1])])
    }

    function _OnSwipe(state, source){
        if(state == 1 && (pokemonOffset + POKEDEX_MAX_VISIBLE + 1) < props.foundPokemon.Length){
            //Swipe up
            setPokemon(foundPokemon.slice(++pokemonOffset, (POKEDEX_MAX_VISIBLE + pokemonOffset)));
        } else if (state == 2 && pokemonOffset - 1 >= 0){
            //Swipe down
            setPokemon(foundPokemon.slice(--pokemonOffset, (POKEDEX_MAX_VISIBLE + pokemonOffset)));
        }
    }

    return (
        <ViroFlexView style={{flexDirection: "column", padding: 0.1, width: 2}} position={[0.5, -0.5, 0]} minHeight={Math.min(POKEDEX_MAX_VISIBLE, foundPokemon.length)} transformBehaviors={["billboard"]} onClick={_OnClick} onSwipe={_OnSwipe}>
            {
                pokemon.map((pkmn, index) => {
                    if (index < POKEDEX_MAX_VISIBLE) {
                        let pkmnStr = pkmn.id + " - " + pkmn.name;
                        return (<PokedexRow key={pokemon.id} text={pkmnStr} heightOffset={index}/>);
                    }
                })
            }
        </ViroFlexView>
    );
}

function PokedexRow(props){
    console.log(props);
    return(
        <ViroFlexView style={{flexDirection: "row", padding: 0.2, width: 2}} transformBehaviors={["billboard"]}>
            <ViroText text={props.text} position={[0, -3.5 + (props.heightOffset * 0.3), 0]} ignoreEventHandling={true} transformBehaviors={["billboard"]}/> 
            <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} />
        </ViroFlexView>
    )
}