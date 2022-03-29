import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

const test = require('./lib/test')
//const minesweeper = require('./lib/minesweeper')
const lib = require('./lib/lib')
const tests = require('./lib/tests')

export default function App() {

  const [difficulty, setDifficulty] = useState('hard')
  const [testString, setTestString] = useState('Default')

  useEffect(() => {
    //minesweeper.startGame()
  },[])

  useEffect(() => {

    setTestString(test.test(difficulty))

  },[difficulty])


  
  // (setDifficulty(this.value); playAudio('restart'); removeWinPic();)}


  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <View style={styles.container}> 
      {/* id="menuheader"> */}
      <Picker 
        // id="diffSelect" 
        selectedValue = {difficulty}
        onValueChange = {(itemValue, itemIndex) => setDifficulty(itemValue)}
        >
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
          <Picker.Item label="Extreme" value="Extreme" />
      </Picker>
      <Text>{testString}</Text>
    </View>
    // {/* <View id="message"></View>
    // <Button id="btn" onclick="setDifficulty(diffSelect.value); playAudio('restart'); removeWinPic();">Reset</Button>
    // <View id="notes"></View>
    // </View> */}
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },})
  
//   body: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     backgroundImage: url("images/link1.jpeg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     fontFamily: 'sans-serif'
//   }
  
//   #message, #notes {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
  
//   #message {
//     float:left;
//     font-size: 1.5rem;
//     z-index: 1;
//     margin-right: 10px;
//     margin-left: 10px;
//   }
  
//   .board {
//     display: flex;
//     flex-wrap: wrap;
//     z-index: 1;
//   }
  
//   .board div {
//     color: green;
//     font-size: 2rem;
//     width: 75px;
//     height: 75px;
//     border: 1px #ccc dotted;
//     border-radius: 10%;
//     background-color: white;
//     margin: 3px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .board div:hover {
//     background-color: white;
//   }
  
//   div.mine, div.mine:hover {
//     background: no-repeat center/60% url("images/bomb.svg") crimson;
//   }
  
//   div.hidden {
//     background: #eee;
//   }
  
//   div.hidden:hover {
//     background: #ccc;
//   }
  
//   div.marked, div.marked:hover {
//     background: no-repeat center/60% url("images/mark.svg") deepskyblue;
//   }
  
//   #btn:hover {
//     background-color: #059862 !important;
//     color: white!important;
//   }
//   #btn {
//     float:left;
//     background-color: #04AA6D;
//     color: white;
//     font-family: 'Source Sans Pro', sans-serif;
//     font-size: 18px;
//     padding: 6px 25px;
//     margin-top: 4px;
//     border-radius: 5px;
//     word-spacing: 10px;
//     border: none;
//     z-index: 0;
//     position: relative;
//     top: 22%;
//   }
  
//   /* Add winner css to show picture when user wins the game */
  
//   #wrapper {
//     position: relative;
//   }
  
//   .board.winner {
//     opacity: 0;
//     transition-duration: 1s;
//   }
  
//   #winpictureDisplay.winner {
//     opacity: 100;
//     transition-duration: 4s;
//   }
  
//   #winpictureDisplay {
//     position: absolute;
//     height: 100%;
//     background-image: url('images/linkwin.jpg');
//     background-repeat: no-repeat;
//     background-position: top;
//     z-index: 0;
//     opacity: 0;
//     background-size: contain;
//     border-radius: 5px;
//   }
  
//   /* Menu Header CSS */
  
//   #menuheader {
//     position: relative;
//     overflow: hidden;
//   }
  
//   #myForm {
//     float:left;
//     position: relative;
//     top: 40%;
//     left: 0px;
//     z-index: 2;
//   }

// });
