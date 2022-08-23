import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { addScore } from "./../redux/";
import { connect } from "react-redux";

const Square = (props) => {
    // define usestate for moles
    const [moleActive, setMoleActive] = useState(false);
    const [isGameOver, setGameOver] = useState(false);
    // define random time varaible
    const randomTime =  Math.random() * 20000
    let timerId 

    // define use effect for rendering the moles in and out the squares
    useEffect(() => {
        timerId = setInterval(() => {
            setMoleActive(true)
            setTimeout(() => {
                setMoleActive(false)
            }, 1000)
        }, randomTime)
        setTimeout(endGame, 60 * 20000)
    }, [])
    
    function endGame () {
        clearInterval(timerId)
        setGameOver(true)
    }

    return (
        <TouchableOpacity onPress={moleActive? props.addScore : null}>
            <View style={moleActive? styles.mole : styles.square}>
                {isGameOver && <Text>X</Text>}
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    square: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10,
        backgroundColor: "red"
    },
    mole: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10,
        backgroundColor: "blue"
    }
})

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: () => dispatch(addScore())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);