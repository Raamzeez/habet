import React from 'react'
import AddAHabitHeader from '../components/AddAHabitHeader'
import YellowNoteHeader from '../components/YellowNoteHeader.js'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

const PersonalMessage = () => {
	return (
		<>
			<AddAHabitHeader />
			<YellowNoteHeader text='Extra Information' />
			<View style={styles.body}>
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						Now, take a few moments to write a letter to yourself about why you really
						want to stop this goal. By writing this out, you will be able to reinforce in
						your head all the reasons why you want to stop, and increase your
						determination to do so.
					</Text>
				</View>
				<View style={styles.textBoxContainer}>
					<TextInput
						style={styles.textBox}
						value={'test'}
						// onChangeText={(text) => changeText(text)}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<TouchableOpacity>
							<Text style={styles.buttonText}>I have written my self-letter</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 0.8,
	},
	textContainer: {
		flex: 0.35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		width: '85%',
	},
	textBoxContainer: {
		flex: 0.45,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textBox: {
		height: '80%',
		width: '80%',
		borderColor: 'gray',
		backgroundColor: 'lightgrey',
		borderWidth: 2,
	},
	buttonContainer: {
		flex: 0.2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		height: '50%',
		width: '80%',
		backgroundColor: 'dodgerblue',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 20,
		color: 'white',
	},
})

export default PersonalMessage
