import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import GamePrompts from "../../components/GamePrompts";

export default function Game({ guessMultiple }) {
  const [isGameStarted, setIsGameStarted] = useState(false);

  function startGame() {
    setIsGameStarted(true);
    getRandomNumber();
  };

  // set a random number to guess that is a multiple of the last digit of user phone number
  const [number, setNumber] = useState(getRandomNumber());

  function getRandomNumber() {
    const maxMultiple = Math.floor(100 / guessMultiple);
    const mutiplier = Math.floor(Math.random() * maxMultiple) + 1;
    return mutiplier * guessMultiple;
  };

  return (
    <View style={styles.container}>

      {/* take user back to start screen and reset all information */}
      <Button title="Restart" />

      <View style={styles.card}>

        {/* guessing anumber that is a multiple of the last digit of user phone number */}
        <Text>Guess a number between 1 & 100 that is multiple of {guessMultiple}</Text>

        {/* if game is started, show prompts, otherwise show start button */}
        {isGameStarted ? <GamePrompts /> : <Button title="Start" onPress={startGame} />}
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
  }
});

