import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import ItemBoxes from '../components/ItemBoxes'

const ChooseABadHabitView = () => {
	return (
		<>
			<View style={styles.header}>
				<Text style={styles.title}>Add A Habit</Text>
			</View>
			<View style={styles.body}>
				<ItemBoxes
					items={['Drugs / Substance', 'Alchohol', 'Opioids', 'Marijuana', 'Tobacco']}
					type='makeFirstSubtitle'
					itemsColor='dodgerblue'
				/>
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
	body: {
		flex: 0.9,
	},
})

export default ChooseABadHabitView
