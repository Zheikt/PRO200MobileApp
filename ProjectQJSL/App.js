import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import HomePage from './pokemon';
import ARView from './components/ar-view';
import HomePage from './components/pokemon';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
        />
        <Stack.Screen name="ARView" component={ARView} />
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