import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useState from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView} from 'react-native';

export default function App() {
  const [number1, onChangeNumber1 ]=React.useState(null);
  const [number2, onChangeNumber2 ]=React.useState(null);
  const [result, setResult]=React.useState(null);
  const addition = () => {
    const num=parseInt(number1)+parseInt(number2);
    setResult(num);
  }
  const subtraction = () => {
    const num=parseInt(number1)-parseInt(number2);
    setResult(num);
  }
  return (
         
    <View style={styles.outerContainer}>
      <Text style={styles.center}>
        Result: {result}
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
        <Button  title =" + " onPress={addition}/>
        <Button  title =" - " onPress={subtraction}/>
        </View>
      </View>
  );  
}
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  buttonContainer: {
    
    flexDirection:'row',
    justifyContent: 'space-between',
     width: 80, 
    height: 40,
  },
  
  inputContainer: {
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign:'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});