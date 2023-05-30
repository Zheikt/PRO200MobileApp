import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import HomePage from './pokemon';
import ARView from './components/ar-view';
import HomePage from './components/pokemon';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={"./components/pokemon.js"}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="ARView" component={AR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
  
  return (
    <MyStack />
    //<ARView />
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