import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button ,TextInput ,Image, ScrollView,Text, Picker, View  } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
    <Text>Project</Text>
    <Text>Q.J.S.L</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.submit}>
      <Button title = "Begin AR"/>
      <StatusBar style="auto" />
    </View>
    <View style={styles.info}>
         <Text style={styles.innerText}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
   
    </>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: .50,
    backgroundColor: '#f12f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    flex : .05,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
  info:{
    flex:.50,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent: 'center',
  },
  innerText:{
color:'black'
  },
});
