import React, { useState } from 'react'
import Home from './views/Home.view'
import ChooseACategory from './views/ChooseACategory.view'
import ChooseABadHabit from './views/ChooseABadHabit.view'
import InitialFrequency from './views/InitialFrequency.view'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function App() {
	const [view, setView] = useState('initialfrequency')

	return (
		<SafeAreaView style={styles.container}>
			{view === 'home' && <Home />}
			{view === 'chooseacategory' && <ChooseACategory />}
			{view === 'chooseabadhabit' && <ChooseABadHabit />}
			{view === 'initialfrequency' && <InitialFrequency />}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
})
