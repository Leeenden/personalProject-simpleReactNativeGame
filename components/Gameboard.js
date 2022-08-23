import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ShadowPropTypesIOS} from "react-native";
import Square from './Square';
import { connect } from "react-redux";

const Gameboard = (props) => {
    const [timeLeft, setTimeLeft] = useState(10)

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
      <Text>You have {timeLeft} second remaining.</Text>
      <Text>{props.score} Moles whacked!</Text>
      <View style={styles.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 100,
    },
    game: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 300,
      paddingTop: 20,
    }
  });
  
  const mapStateToProps = state => {
    return {
      score: state.score
    }
}

export default connect(mapStateToProps)(Gameboard)