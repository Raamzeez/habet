import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ItemBoxes = ({ items, type, itemsColor }) => {
	const styles = StyleSheet.create({
		categoriesContainer: {
			flex: 0.7,
			alignItems: 'center',
		},
		categoryContainer: {
			marginTop: 30,
			height: 65,
			width: '85%',
			backgroundColor: 'rgb(195, 195, 195)',
			justifyContent: 'center',
			alignItems: 'center',
		},
		categoryText: {
			fontSize: 20,
            color: itemsColor || 'rgb(0, 0, 0)'
		},
		subtitleContainer: {
			marginTop: 30,
			height: 65,
			width: '85%',
			backgroundColor: 'rgb(236, 236, 236)',
			justifyContent: 'center',
			alignItems: 'center',
		},
		subtitleText: {
			fontSize: 20,
		},
	})

	return (
		<>
			<View style={styles.categoriesContainer}>
				{items.map((item, i) => {
					if (type === 'makeFirstSubtitle' && i === 0) {
						return (
							<View key={i} style={styles.subtitleContainer}>
								<TouchableOpacity>
									<Text style={styles.subtitleText}>{item}</Text>
								</TouchableOpacity>
							</View>
						)
					} else {
						return (
							<View key={i} style={styles.categoryContainer}>
								<TouchableOpacity>
									<Text style={styles.categoryText}>{item}</Text>
								</TouchableOpacity>
							</View>
						)
					}
				})}
			</View>
		</>
	)
}

export default ItemBoxes
