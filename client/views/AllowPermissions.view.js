import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import YellowNoteHeader from '../components/YellowNoteHeader'
import AddAHabitHeader from '../components/AddAHabitHeader'
import Question from '../components/Question'

const AllowPermissions = () => {
	return (
		<>
			<AddAHabitHeader />
			<YellowNoteHeader text='Setup A Geofence Blocker' />
			<View style={styles.body}>
				<View style={styles.textContainer}>
					<Text style={styles.mainText}>
						We are going to set up a Geofence Blocker. This means that we will send
						constant notifications and reminders when you are near areas such as bars, or
						other locations that can contain alchohol. By blocking frequent access to
						alchohol in the first place, we can help you achieve your goal of stopping
						this bad habit. Please click the button below to proceed.
					</Text>
				</View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Allow Location Permissions</Text>
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
	textContainer: {
		flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
	},
	mainText: {
		marginTop: 20,
        fontSize: 20,
        width: '80%'
    },
    buttonContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '80%',
        height: '50%',
        backgroundColor: 'rgb(0, 139, 58)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
})

export default AllowPermissions
