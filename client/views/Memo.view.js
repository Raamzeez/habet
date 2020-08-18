import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AddAHabitHeader from '../components/AddAHabitHeader'
import YellowNoteHeader from '../components/YellowNoteHeader'
import BlueInfoBox from '../components/BlueInfoBox'

const Memo = () => {
	return (
		<>
			<AddAHabitHeader />
			<YellowNoteHeader text="Wow 3 times a day is a lot..." />
            <View style={styles.body}>
                <BlueInfoBox />
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>Why Do You Want To Stop?</Text>
                </View>
                <View style={styles.textBoxContainer}>

                </View>
            </View>
		</>
	)
}

const styles = StyleSheet.create({
    body: {
        flex: 0.9
    },
    questionContainer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dodgerblue'
    },
    questionText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textBoxContainer: {
        flex: 0.4,
        backgroundColor: 'seagreen'
    }
})

export default Memo
