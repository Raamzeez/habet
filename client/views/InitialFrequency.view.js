import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Picker } from '@react-native-community/picker'
import NumericInput from 'react-native-numeric-input'

const InitialFrequency = () => {
	const [state, setState] = useState('day')

	return (
		<>
			<View style={styles.header}>
				<Text style={styles.title}>Add A Habit</Text>
			</View>
			<View style={styles.body}>
				<View style={styles.subheadingContainer}>
					<Text style={styles.subheading}>Let's Stop Your Alcohol Habit!</Text>
				</View>
				<View style={styles.questionContainer}>
					<Text style={styles.questionText}>How Often Do You Drink Alcohol?</Text>
				</View>
				<View style={styles.selectionsContainer}>
					<View style={{ marginLeft: 20}}>
						<NumericInput value={1} type='up-down' />
					</View>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	header: {
		flex: 0.1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(245, 245, 245)',
	},
	title: {
		fontSize: 35,
		marginTop: 25,
	},
	body: {
		flex: 0.9, //The body portion of the view (which contains the text) will take up 70% of the usable space
		// backgroundColor: 'aqua', //This color is temporary - It is just there to visualize the space that the body portion takes
	},
	subheadingContainer: {
		flex: 0.1,
		backgroundColor: 'rgb(251, 255, 141)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	subheading: {
		fontSize: 20,
		color: 'rgb(0, 67, 255)',
	},
	questionContainer: {
		flex: 0.15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'grey',
	},
	questionText: {
		fontSize: 17.5,
	},
	selectionsContainer: {
		flex: 0.5,
		// backgroundColor: 'red',
		justifyContent: 'center',
	},
	numberSelectorContainer: {
		width: '33%',
		height: '100%',
		backgroundColor: 'orange',
		flexDirection: 'row',
		flex: 1
	},
})

export default InitialFrequency
