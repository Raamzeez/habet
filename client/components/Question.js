import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Question = ({ question }) => {
	return (
		<View style={styles.questionContainer}>
			<Text style={styles.questionText}>{question}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	questionContainer: {
		flex: 0.15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	questionText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
})

export default Question
