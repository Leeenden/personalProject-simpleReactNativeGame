import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text} from "react-native";
import Square from './Square';


const Gameboard = () => {
    let time = 10
    const [timeLeft, setTimeLeft] = useState(time)

    useEffect(() => {
        if(!timeLeft) return
        const timerId = setInterval(() => {
            // happens every 1s 
            setTimeLeft(timeLeft - 1)
        }, 1000)
        return () => clearInterval(timerId)
    }, [timeLeft])

  return (
    <View style={styles.container}>
      <Text>Welcome to leeendens whack-a-mole app.</Text>
      <Text>{timeLeft}</Text>
      <View style={styles.game}>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    game: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 300,
      paddingTop: 20,
    }
  });
  

export default Gameboard