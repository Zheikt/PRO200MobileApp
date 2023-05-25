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
            setPokemon(props.foundPokemon.slice(++pokemonOffset, (POKEDEX_MAX_VISIBLE + pokemonOffset)));
        } else if (state == 2 && pokemonOffset - 1 >= 0){
            //Swipe down
            setPokemon(props.foundPokemon.slice(--pokemonOffset, (POKEDEX_MAX_VISIBLE + pokemonOffset)));
        }
    }

    return (
        <ViroFlexView position={[0.5, 0, 0]} height={1} width={1} transformBehaviors={["billboard"]} onClick={_OnClick} onSwipe={_OnSwipe}>
            {
                pokemon.map((pokemon, index) => {
                    if (index < POKEDEX_MAX_VISIBLE) {
                        let pkmnStr = pokemon.id + " - " + pokemon.name;
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
        <ViroFlexView style={{backgroundColor: "#33333333"}}>
            <ViroText text={props.text} position={[0, 0.5 - (props.heightOffset * 0.3), 0]} ignoreEventHandling={true}/> 
            <ViroButton source={require("../pictures/empty-circle.png")} tapSource={require("../pictures/filled-circle.png")} />
        </ViroFlexView>
    )
}