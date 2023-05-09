import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button,Text,View  } from 'react-native';
export default function App() {
return (
     <>
    <View style={styles.container}>

      <Text>Pokemon</Text>
      <StatusBar style="auto" />
       <View style={styles.ball}> 
       <View style={styles.line}>
       <View style={styles.button}>
        <Button 
        backgroundColor= '#fff'
        position= 'absolute'
        width = '50'
        height= '30'
        borderRadius= '20'
        left= '130'
        />
        </View>
         <View style={styles.ball2}> 
         <View style={styles.ball3}> 
         <View style={styles.ball4}> 
         <View style={styles.ball5}>
         <View style={styles.ball6}>
         </View>
         </View>
         </View>
         </View>
         </View>
       </View>
       </View>
      </View>
    </>

    
  );

}



const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#CDCDCD',
    alignItems: 'center',
    justifyContent: 'center',
  },ball: {
    backgroundColor: '#f03',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: 'center',

  },ball2: {
    backgroundColor: '#fff',
    width: "101%",
    height: 30,
    borderRadius: 5,
    left: -1,
    bottom:-30,
    position: 'absolute',

  },
  ball3: {
    backgroundColor: '#fff',
    width: "93%",
    height: 50,
    borderRadius: 5,
    left: 10,
    bottom:-30,
    position: 'absolute',

  },
  ball4: {
    backgroundColor: '#fff',
    width: "91%",
    height: 45,
    borderRadius: 5,
    left: 13,
    bottom:-30,
    position: 'absolute',

  },
  ball5: {
    backgroundColor: '#fff',
    width: "81%",
    height: 40,
    left: 25,
    bottom:-30,
    borderRadius: 5,
    position: 'absolute',

  },
  ball6: {
    backgroundColor: '#fff',
    width: "59%",
    height: 30,
    left: 43,
    bottom:-15,
    borderRadius: 5,
    position: 'absolute',

  },
  line: {
    backgroundColor: '#000',
    width: "100%",
    height: 30,
    zIndex:2,
  },
  button: {
    backgroundColor: '#fff',
    position: 'absolute',
    width : 50,
    height: 30,
    borderRadius: 20,
    left: 130
  }

});
