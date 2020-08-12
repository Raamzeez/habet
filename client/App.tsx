import React, {useState} from 'react'
import Home from './views/Home.view'
import ChooseACategory from './views/ChooseACategory.view'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function App() {

  const [view, setView] = useState('chooseacategory')

	return (
		<SafeAreaView style={styles.container}>
			{view === 'home' && (
        <Home />
      )}
      {view === 'chooseacategory' && (
        <ChooseACategory />
      )}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
})
