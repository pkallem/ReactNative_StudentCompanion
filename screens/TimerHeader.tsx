import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Text, useThemeColor, View} from '../components/Themed';


class TimerHeader extends React.Component {

	// handles the display of timer header
	handleDisplay = () => {
		if(this.props.intervalType === "Working")
		{
			if(this.props.running === true) {
				return "Keep working!"
			}
			else {
				return "Time to work!"
			}	
		}
		else {
			if(this.props.running === true) {
				return "Break Time!"
			}
			else {
				return "Relax!"
			}	
		}

	}
	render() {
	
		let texttoshow = this.handleDisplay()
		return(
			<Text style={styles.textStyle}>{texttoshow}</Text>
			
		)				
	}
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "100",
    letterSpacing: 1.5,
	alignSelf: 'center',
	marginBottom: 25
  }
});

export default TimerHeader;