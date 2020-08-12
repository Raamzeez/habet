import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, SafeAreaView, TouchableOpacity, StyleSheet, Text } from 'react-native'

const Home = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Habet</Text>
			</View>
			<View style={styles.body}>
				<Text style={styles.bodyText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus lacinia
					enim a consectetur. Interdum et malesuada fames ac ante ipsum primis in
					faucibus. Donec enim odio, mollis ac odio ut, cursus volutpat metus. Quisque
					viverra cursus mauris, id finibus nisi vestibulum a. Phasellus nunc arcu,
					molestie sit amet tempor ac, dapibus et erat. Nulla lorem ipsum, facilisis vitae
					est in, semper maximus sapien. Aliquam ut ipsum nec tortor pretium facilisis et
					in ligula. Aliquam a urna eget orci suscipit eleifend id sit amet est. Mauris
					imperdiet cursus enim et suscipit. Aenean mattis tempus risus, sed egestas
					tellus accumsan non. Nullam luctus nulla in scelerisque faucibus. Phasellus
					vehicula massa velit.
				</Text>
			</View>
			<View style={styles.registerContainer}>
				<TouchableOpacity>
					<Text style={styles.registerText}>Register</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.loginContainer}>
				<TouchableOpacity>
					<Text style={styles.loginText}>Login</Text>
				</TouchableOpacity>
			</View>
			<StatusBar style='auto' />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		flex: 0.1,
		backgroundColor: 'gold',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 45,
		marginTop: 25,
	},
	body: {
		flex: 0.7,
		backgroundColor: 'aqua',
		alignItems: 'center',
		justifyContent: 'center'
	},
	bodyText: {
		marginTop: '10%',
		marginRight: '7%',
		marginLeft: '7%',
		fontSize: 20,
	},
	registerContainer: {
		flex: 0.1,
		backgroundColor: 'lightgreen',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginContainer: {
		flex: 0.1,
		backgroundColor: 'tomato',
		justifyContent: 'center',
		alignItems: 'center',
	},
	registerText: {
		fontSize: 30,
	},
	loginText: {
		fontSize: 30,
	},
})

export default Home
