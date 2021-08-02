import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {NeuButton} from 'react-native-neu-element';

class TimerButtons extends React.Component {
	state = {};

	//renders pause, play and reset buttons
	render() {
		if(this.props.running === true)
		{
			return (
				<View style={styles.container}>
					
					<NeuButton
					color="#eef2f9"
					width={175}
					height={50}
					borderRadius={16}
				
					onPress={this.props.pause}
					>
					<Text>Pause</Text>
					</NeuButton>

					<NeuButton
					color="#eef2f9"
					width={175}
					height={50}
					borderRadius={16}
				
					onPress={this.props.reset}
					>
					<Text>Reset</Text>
					</NeuButton>

				</View>
			)
		}
		else
		{
			return(
				<View  style={styles.container}>
				
					<NeuButton
					color="#eef2f9"
					width={175}
					height={50}
					borderRadius={16}
				
					onPress={this.props.play}
					>
					<Text>Play</Text>
					</NeuButton>
				</View>
				

			)
		}
	}
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: "row" ,
		backgroundColor: 'transparent',
		
		justifyContent: 'space-evenly',
		marginBottom: 20
	},
	buttonStyle:{
		alignItems: "center",
		backgroundColor: "#C2362B",
	    padding: 30,
	    flexDirection: "row" ,
	    borderRadius: 80,
	}, 
	 buttonText: {
	    color: "white",
	    fontSize: 25,
	    fontWeight: "300",
  	}
})

export default TimerButtons