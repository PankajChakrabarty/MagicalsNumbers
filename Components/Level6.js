import React, { useState } from 'react';
import { View, ScrollView, TextInput, Button, Text} from 'react-native';


const Level6 = ({ navigation }) => {
  const navigateToLevel5 = () => {
    navigation.navigate('Level 5');
  };
const navigateToLevel7 = () => {
    navigation.navigate('Level 7');
  };

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const[total, setTotal] = useState(0);
  const[divider, setDivider] =useState(0);
  const[sNumber1, setSNumber1] = useState(0);
  const[gRandom,setGRandom] = useState(0);
  const[finalResult,setFinalResult] = useState(0);
  const [result, setResult] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100000); // Adjust the range of random numbers as needed
  }

const handleCalculateTotal = () => {
    // Calculate the total based on the specified formula
    const calculatedTotal = (number1 + number2 + randomNumber);
    // Update the total state
    setTotal(calculatedTotal);
  };

  const handleCalculateDivider = () => {
    // Calculate the division based on the specified formula
    const CalculatedDivider = (number1 + number2 + randomNumber)/7;
    // Update the divider state
    setDivider(CalculatedDivider);
  };

    const handleCalculateFinalResult = () => {
    // Calculate the Final result based on the specified formula
    const calculatedFinalResult = (number1+number2+randomNumber) / 7-sNumber1;
    // Update the Final result state
    setFinalResult(calculatedFinalResult);
  };

  const handleCalculateResult = () => {
    // Calculate the result based on the specified formula
    const calculatedResult = randomNumber / 7;
    // Update the result state
    setResult(calculatedResult);
  };


  const handleGenerateRandomNumber = () => {
    // Update the random number
    const newRandomNumber =generateRandomNumber();
    setRandomNumber(newRandomNumber);
    //Automatically set given random number
    setGRandom(newRandomNumber.toString());
   
  };


const handleNumber1Change = (text) => {
    // Update number1 state
    setNumber1(parseInt(text, 10));
    // Automatically set sNumber1 to be the same as number1
    setSNumber1(parseInt(text, 10));
    setNumber2(parseInt(text, 10)*6);
};

  return (
    < ScrollView>

      <Button
         title="Go Back To Level 5"
      onPress={navigateToLevel5}
      
      />
    <View>
    
<Text style={{ fontSize: 20, marginTop: 20, paddingLeft:100 }}></Text>

     <Button
        title="Math Master Provide You The"
        onPress={handleGenerateRandomNumber}
      /> 
<Text style={{ fontSize: 20, marginTop: 10 }}>Bonus Number: {randomNumber}</Text> 

      <Button
        title="Predicted Result"
        onPress={handleCalculateResult}
      />
      <Text style={{ fontSize: 20, marginTop: 10 }}>Your Remaining Will Be: {result}</Text>


  <Text style={{ paddingTop:10}}>Enter Any Number</Text>

      <TextInput
  style={{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  }}
  keyboardType="numeric"
  onChangeText={handleNumber1Change}
  value={number1.toString()}
/>
<Text>Automatically Taken Six Times of Your  Number</Text>
      <TextInput
  style={{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  }}
  keyboardType="numeric"
  onChangeText={(text) => setNumber2(parseInt(text, 10))}
  value={number2.toString()}

/>

 <Text>The Given Bonus Number</Text>
      <TextInput
  style={{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  }}
  keyboardType="numeric"
  onChangeText={(text) => setGRandom(parseInt(text, 10))}
  value={gRandom}

/>

 <Button
        title="Your Present Total Number"
        onPress={handleCalculateTotal}
      />
   
     
      <Text style={{ fontSize: 20, marginTop: 10 }}>The Total is: {total}</Text>

      
 <Button
        title="Your Total Number Divided By Seven"
        onPress={handleCalculateDivider}
      />
      <Text style={{ fontSize: 20, marginTop: 10 }}>The remaining is: {divider}</Text>

      <Text style={{ fontSize: 20, marginTop: 10 }}> Subtracted Your Own Number</Text>
      <TextInput
  style={{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  }}
  keyboardType="numeric"
  onChangeText={(text) => setSNumber1(parseInt(text, 10))}
  value={number1.toString()}

/>
      <Button
        title="Your Remaining Number Is Same To The Predicted Result"
        onPress={handleCalculateFinalResult}
      />
    <Text style={{ fontSize: 20, marginTop: 10 }}>The Final Result: {finalResult}</Text>

    </View>

    <Button
         title="Go To Level 7"
      onPress={navigateToLevel7}
      
      />
    </ScrollView>
  );
};

export default Level6;