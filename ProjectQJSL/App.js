import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import HomePage from './pokemon';
import ARView from './components/ar-view';
import HomePage from './components/pokemon';

export default function App() {
  return (
    //<HomePage />
    <ARView />
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