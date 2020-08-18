import React, { useState } from 'react'
import Home from './views/Home.view'
import ChooseACategory from './views/ChooseACategory.view'
import ChooseABadHabit from './views/ChooseABadHabit.view'
import InitialFrequency from './views/InitialFrequency.view'
import Memo from './views/Memo.view'
import { Pages } from 'react-native-pages'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function App() {

	return (
		<SafeAreaView style={styles.container}>
			<Pages>
				<Home />
				<ChooseACategory />
				<ChooseABadHabit />
				<InitialFrequency />
				<Memo />
			</Pages>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
})
