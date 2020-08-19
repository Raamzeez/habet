import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-community/picker'
import NumericInput from 'react-native-numeric-input'
import YellowNoteHeader from '../components/YellowNoteHeader'
import AddAHabitHeader from '../components/AddAHabitHeader'
import BlueInfoBox from '../components/BlueInfoBox'
import Question from '../components/Question'

const Goal = () => {

    const [state, setState] = useState({
		timePeriod: 'week',
		times: 3
	})

	return (
		<>
			<AddAHabitHeader />
			<YellowNoteHeader text='Wow 3 times a day is a lot...' />
			<View style={styles.body}>
				<BlueInfoBox text='We are committed to doing everything we can to help you stop, but we need you to work with us as well...' />
				<Question question="How about we start you with this weekly goal?" />
                <View style={styles.selectionsContainer}>
					<View style={{ marginLeft: 20 }}>
						<NumericInput value={state.times} type='up-down' />
					</View>
					<View style={{ marginLeft: 20 }}>
						<Text style={styles.timesText}>Times a</Text>
					</View>
					<View style={{ marginLeft: 20 }}>
						<Picker
							selectedValue={state.timePeriod}
							style={{ height: 50, width: 100, marginBottom: '160%' }}
						>
							<Picker.Item label='Month' value='month' />
                            <Picker.Item label='Week' value='week' />
							<Picker.Item label='Day' value='day' />
							<Picker.Item label='Hour' value='hour' />
						</Picker>
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
	body: {
		flex: 0.9, //The body portion of the view (which contains the text) will take up 70% of the usable space
		// backgroundColor: 'aqua', //This color is temporary - It is just there to visualize the space that the body portion takes
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
		alignItems: 'center',
		flexDirection: 'row',
	},
	timesText: {
		fontSize: 20,
	},
	buttonContainer: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		height: 75,
		width: 200,
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

export default Goal
