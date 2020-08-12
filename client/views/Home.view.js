import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, SafeAreaView, TouchableOpacity, StyleSheet, Text } from 'react-native'

const Home = () => {
	return (
		<>
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
		</>
	)
}

const styles = StyleSheet.create({
	header: {
		flex: 0.1, //The header portion of the view will take 10% of the usable space
		backgroundColor: 'gold', //This color is temporary - It is just there to visualize the space that the header portion takes
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 45,
		marginTop: 25,
	},
	body: {
		flex: 0.7, //The body portion of the view (which contains the text) will take up 70% of the usable space
		backgroundColor: 'aqua', //This color is temporary - It is just there to visualize the space that the body portion takes
		alignItems: 'center',
		justifyContent: 'center',
	},
	bodyText: {
		marginTop: '10%',
		marginRight: '7%', //This margin is applied to the text so that it does not come close to the edges of the screen
		marginLeft: '7%', //This margin is applied to the text so that it does not come close to the edges of the screen
		fontSize: 20,
	},
	registerContainer: {
		flex: 0.1,
		backgroundColor: 'lightgreen', //This color is temporary - It is just there to visualize the space that the registerContainer portion takes
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginContainer: {
		flex: 0.1,
		backgroundColor: 'tomato', //This color is temporary - It is just there to visualize the space that the loginContainer portion takes
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
