import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const ChooseACategory = () => {
	return (
		<>
			<View style={styles.header}>
				<Text style={styles.title}>Add A Habit</Text>
			</View>
			<View style={styles.body}>
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitle}>Choose a category: </Text>
				</View>
				<View style={styles.categoriesContainer}>
					<View style={styles.categoryContainer}>
						<Text style={styles.categoryText}>Drug / Substance</Text>
					</View>
					<View style={styles.categoryContainer}>
						<Text style={styles.categoryText}>Personality</Text>
					</View>
					<View style={styles.categoryContainer}>
						<Text style={styles.categoryText}>Mental</Text>
					</View>
					<View style={styles.categoryContainer}>
						<Text style={styles.categoryText}>Desires</Text>
					</View>
					<View style={styles.categoryContainer}>
						<Text style={styles.categoryText}>Danger Inducing</Text>
					</View>
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
	header: {
		flex: 0.1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(245, 245, 245)'
	},
	title: {
		fontSize: 35,
		marginTop: 25,
	},
	subtitleContainer: {
		flex: 0.15,
		// backgroundColor: 'dodgerblue',
		justifyContent: 'center',
		alignItems: 'center',
	},
	subtitle: {
		fontSize: 25,
	},
	categoriesContainer: {
		flex: 0.7,
		// backgroundColor: 'skyblue',
		alignItems: 'center',
	},
	categoryContainer: {
		marginTop: 30,
		height: 65,
		width: '85%',
		backgroundColor: 'rgb(195, 195, 195)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	categoryText: {
		fontSize: 20,
	},
	buttonContainer: {
		flex: 0.15,
		// backgroundColor: 'orange',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		height: 75,
		width: 200,
		backgroundColor: 'dodgerblue',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(31, 116, 255)'
	},
	buttonText: {
		fontSize: 25,
		color: 'white',
	},
	body: {
		flex: 0.9, //The body portion of the view (which contains the text) will take up 70% of the usable space
		// backgroundColor: 'aqua', //This color is temporary - It is just there to visualize the space that the body portion takes
	},
})

export default ChooseACategory
