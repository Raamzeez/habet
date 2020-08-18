import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const BlueInfoBox = () => {
	return (
		<View style={styles.boxContainer}>
			<View style={styles.box}>
				<Text style={styles.boxText}>
					Do you know that people who drink more than once a day are more likely to
					develop heart disease?
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		width: '100%',
        backgroundColor: 'lightblue',
        alignItems: 'center'
	},
	boxContainer: {
        alignItems: 'center',
	},
	boxText: {
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20,
	},
})

export default BlueInfoBox
