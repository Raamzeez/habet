import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import AddAHabitHeader from '../components/AddAHabitHeader'
import YellowNoteHeader from '../components/YellowNoteHeader'
import BlueInfoBox from '../components/BlueInfoBox'
import Question from '../components/Question'


const Memo = () => {
	const [text, changeText] = useState('')

	const wordsRemaining = 30 - text.split(' ').length + 1

	return (
		<>
			<AddAHabitHeader />
			<YellowNoteHeader text='Wow 3 times a day is a lot...' />
			<View style={styles.body}>
				<BlueInfoBox text="Do you know that people who drink more than once a day are more likely to
					develop heart disease?"/>
				<Question question="Why Do You Want To Stop?" />
				<View style={styles.textBoxContainer}>
					<TextInput
						style={styles.textBox}
						value={text}
						onChangeText={(text) => changeText(text)}
					/>
					<Text
						style={{
							fontSize: 15,
							marginTop: 20,
							color: wordsRemaining <= 5 ? 'red' : 'black',
						}}
					>
						{wordsRemaining || 30} words remaining
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<TouchableOpacity>
							<Text style={styles.buttonText}>Next</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 0.9,
	},
	questionContainer: {
		flex: 0.15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	questionText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	textBoxContainer: {
		flex: 0.45,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textBox: {
		height: '20%',
		width: '80%',
		borderColor: 'gray',
		backgroundColor: 'lightgrey',
		borderWidth: 2,
	},
	buttonContainer: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		height: 75,
		width: 200,
		backgroundColor: 'dodgerblue',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'rgb(31, 116, 255)',
		backgroundColor: 'dodgerblue',
	},
	buttonText: {
		fontSize: 25,
		color: 'white',
	},
})

export default Memo
