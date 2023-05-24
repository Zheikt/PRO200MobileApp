import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Button, Text, View, Image, ImageBackground } from 'react-native';
import Sound from 'react-native-sound';

const sound = new Sound("../mp3/pokemon.mp3", Sound.MAIN_BUNDLE, (error)=>{
  if(error){
      console.log("Error loading sound");
      }else{
      console.log("loaded sound");
      console.log("");
      }
      });
      sound.setNumberOfLoops(-1);
      sound.play((success)=>{
      if(success){
      console.log("audio playing");
      }else{
      console.log("audio error")
      }
      });
      sound.stop;
      sound.release;
      
export default function App() {

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require("../pictures/testbackground.jpg")} resizeMode="cover" style={styles.imagebackground} />

        <Image style={styles.image} source={require("../pictures/title.png")} />

        <View style={styles.ball}>
          <View style={styles.line}>
            <View style={styles.button}>
              <Text style={styles.font}>Go</Text>
              <Button 
                title='Go'
                color='#fff'
                position='absolute'
                width='50'
                height='30'
                borderRadius='20'
                left='130'
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

// function myAudio() {

//   const [sound, setSound] = useState('');

//   async function bigSound() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync(
//       require('./mp3/pokemon.mp3')
//     );
//     setSound(sound);

//     console.log('Playing Sound');
//     await sound.playAsync();
//   }

// }


const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#CDCDCD',
    alignItems: 'center',
    justifyContent: 'center',
  }, ball: {
    backgroundColor: '#f03',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: 'center',

  }, ball2: {
    backgroundColor: '#fff',
    width: "101%",
    height: 30,
    borderRadius: 5,
    left: -1,
    bottom: -30,
    position: 'absolute',

  },
  ball3: {
    backgroundColor: '#fff',
    width: "93%",
    height: 50,
    borderRadius: 5,
    left: 10,
    bottom: -30,
    position: 'absolute',

  },
  ball4: {
    backgroundColor: '#fff',
    width: "91%",
    height: 45,
    borderRadius: 5,
    left: 13,
    bottom: -30,
    position: 'absolute',

  },
  ball5: {
    backgroundColor: '#fff',
    width: "81%",
    height: 40,
    left: 25,
    bottom: -30,
    borderRadius: 5,
    position: 'absolute',

  },
  ball6: {
    backgroundColor: '#fff',
    width: "59%",
    height: 30,
    left: 43,
    bottom: -15,
    borderRadius: 5,
    position: 'absolute',

  },
  line: {
    backgroundColor: '#000',
    width: "100%",
    height: 30,
    zIndex: 2,
  },
  button: {
    backgroundColor: '#fff',
    position: 'absolute',
    width: 50,
    height: 30,
    borderRadius: 20,
    left: 130
  },
  image: {
    flex: 1,
    width: 300,
    height: 200,
    resizeMode: 'contain'

  },
  imagebackground: {
    flex: 1,
    width: 320,
    height: 590,
    resizeMode: 'contain'

  },

  font: {
    fontFamily: 'Times New Roman',
    fontWeight: 'bold'
  }

});