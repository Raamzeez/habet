import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const AddAHabitHeader = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Add A Habit</Text>
		</View>
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
})

export default AddAHabitHeader
