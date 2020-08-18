import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const YellowNoteHeader = ({text}) => {

	return (
		<>
			<View style={styles.subheadingContainer}>
				<Text style={styles.subheading}>{text}</Text>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
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
})

export default YellowNoteHeader
