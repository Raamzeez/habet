import React, { useState } from 'react'
import Home from './views/Home.view'
import ChooseACategory from './views/ChooseACategory.view'
import ChooseABadHabit from './views/ChooseABadHabit.view'
import InitialFrequency from './views/InitialFrequency.view'
import Memo from './views/Memo.view'
import Goal from './views/Goal.view'
import AllowPermissions from './views/AllowPermissions.view'
import MoreReminders from './views/MoreReminders.view'
import PersonalMessage from './views/PersonalMessage.view'
import SettingUp from './views/SettingUp.view'
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
				<Goal />
				<AllowPermissions />
				<MoreReminders />
				<PersonalMessage />
				<SettingUp />
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
