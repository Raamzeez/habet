import React from 'react'
import YellowNoteHeader from '../components/YellowNoteHeader'
import AddAHabitHeader from '../components/AddAHabitHeader'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'

const SettingUp = () => {
	return (
		<>
			<AddAHabitHeader />
			<YellowNoteHeader text='Setting Up Your Journey to Success' />
			<View style={styles.body}>
				<View style={styles.spinnerContainer}>
					<ActivityIndicator size='large' />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						Please wait a few moments while we set up your plan to end this habit once and
						for all. We are very very confident if you stick around with us, you can
						overcome your issues and live a very successful life
					</Text>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 0.8,
	},
	spinnerContainer: {
		flex: 0.2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
        fontWeight: 'bold',
        width: '80%'
	},
})

export default SettingUp
