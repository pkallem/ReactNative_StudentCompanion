import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, useThemeColor, View} from '../components/Themed';


class TimerDisplay extends React.Component {

	// display currently running timer
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}> 
					{Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
				</Text>
			</View>
		)
	}
}

export default TimerDisplay;

const styles = StyleSheet.create({
	container: {
	    marginBottom: "10%",
	    marginLeft: "7%",
	    marginRight: "7%",
	    borderColor: "black",
		justifyContent: 'center',
		alignSelf: 'center',
		height: 300,
		width: 300,
	    borderRadius: 360,
	    borderWidth: 0.1,
		alignItems: 'center',
		backgroundColor: "#BCC6CC",
	},
	textStyle: {
	    fontSize: 80,
	    fontWeight: "300",
	}
})