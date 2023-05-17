import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './pokemon';
import ARView from './components/ar-view';
//import HomePage from './components/pokemon';

export default function App() {
  return (
    <ARView foundPokemon={[{"name": "Charizard", "id": 9}, {"name": "Blastoise", "id": 6}, {"name": "Venasaur", "id": 3}]} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
