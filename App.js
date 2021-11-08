import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useState from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView} from 'react-native';

export default function App() {
  const [number1, onChangeNumber1 ]=React.useState(null);
  const [number2, onChangeNumber2 ]=React.useState(null);
  const [restult, setResult]=React.useState(null);
  const addition = () => {
    const num=parseInt(number1)+parseInt(number2);
    setResult(num);
  }
  const subtraction = () => {
    const num=parseInt(number1)-parseInt(number2);
    setResult(num);
  }
  return (
         
    <View style style={{flex:1}} >
      <View style={{flex:1}}></View>
      <Text style={styles.center}>
        Result: {restult}
      </Text>

      <View  style={styles.inputContainer}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="number 1"
        keyboardType="numeric"
        />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="number 2"
        keyboardType="numeric"
        />
        </View>

        <View style={styles.buttonContainer}>
        <Button style={styles.button} title =" + " onPress={addition}/>
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Button style={styles.button} title =" - " onPress={subtraction}/>
        </View>
        <View style={{flex:2}}></View>
      </View>
  );  
}
const styles = StyleSheet.create({


  buttonContainer: {
    flexDirection:'row',
     justifyContent:'center',
    // justifyContent: 'space-between',
  },
  button:{
    margin:20,
  },
  inputContainer: {
    flexDirection:'column',
  },

  center: {
    textAlign:'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});