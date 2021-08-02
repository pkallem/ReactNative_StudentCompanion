import React, { Component } from 'react';
import { TouchableOpacity, Image,Button, Animated, Platform,Vibration, SafeAreaView, StyleSheet, FlatList, Share, TextInput } from 'react-native';
import {  ScrollView } from 'react-native-gesture-handler';
import { Pedometer } from "expo-sensors";
import {NeuView, NeuBorderView, NeuButton } from 'react-native-neu-element';
import logo from '../images/footsteps.png';
import walk from '../images/animatedwalk.gif';
import Timer from './Timer'
// import {Card, Avatar} from 'react-native-paper';
import { EvilIcons } from '@expo/vector-icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import Neumorphic from 'react-native-neumorphic';


import Card from '../components/Card';

import { LinearGradient } from 'expo-linear-gradient';

import { Text, useThemeColor, View} from '../components/Themed';
const ONE_SECOND_IN_MS = 1;

  const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS, 3 * ONE_SECOND_IN_MS];
const testingnumber = 0;
  const PATTERN_DESC =
    Platform.OS === 'android'
      ? 'wait 1s, vibrate 2s, wait 3s'
      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';

import Modal from 'react-native-modal';
import { ThemeProvider } from '@react-navigation/native';
import { green100, lightGreen100 } from 'react-native-paper/lib/typescript/styles/colors';
import { setAutoServerRegistrationEnabledAsync } from 'expo-notifications';
import Neumorph from 'react-native-neumorphic';
const Separator = () => {
  return <View style={Platform.OS === 'android' ? styles.separator : null} />;
};

function TabBarIcon(props: { name: React.ComponentProps<typeof EvilIcons>['name']; color: string }) {
  return <EvilIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default class TabFourScreen extends Component {


  
  state = {
    isModalVisible: false,
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    workTime: 25,
		breakTime: 5,
		intervalType : "Working",
    scrollX: new Animated.Value(0)

  }

  	// handles completion of timer
	handleTimerCompleted = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Break"
			})
		}
		else
		{
			this.setState({
				intervalType: "Working"
			})	
		}
	}

	// gets triggered on change of worktimer text
	handleWorkTime = (text) =>
	{
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
		}
		else{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				workTime: 25
			})
		}
	}

	// gets triggered on change of breaktimer text
	handleBreakTime = (text) =>{
		if(text >= 0)
		{
			this.setState({
				breakTime:  text
			})
		}
		else
		{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				breakTime: 5
			})
		}
	}

	// called to set the timer's time
	handleTime = () => {
		if(this.state.intervalType === "Working")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}
  
  _showModal = () => this.setState({ isModalVisible: true })
 
  _hideModal = () => this.setState({ isModalVisible: false })
  
  onShareFootsteps = async () => {
    try {
      const result = await Share.share({
        message: "I have walked " + this.state.pastStepCount + " steps in the past 24 hours. Are you up for a challenge?"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };



  //PEDOMETER


  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  //PEDOMETER END 
  render () {
    let time= this.handleTime()

    return (
      // <View style={{ flex: 1 }}>
      //   <Text>Enter</Text>
      //   <Text>Enter</Text>
      //   <Text onPress={this._showModal}>Enter</Text>
      //   <TouchableOpacity>
      //     <Text>Show Modal</Text>
      //   </TouchableOpacity>
        
      // </View>
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator ={false}
      showsHorizontalScrollIndicator={false}>

<View style={styles.container}>

      

      <Text style={styles.title}></Text>
      <Text style={styles.title} onPress={this._showModal}>Pomodoro Timer</Text>
      <View style={styles.separator} lightColor="#e0e0e0" darkColor="rgba(255,255,255,0.1)" /> 
              <Timer
                
                Oncomplete={this.handleTimerCompleted}
                period={time}
                intervalType={this.state.intervalType}
                />
              {/* <CountdownCircleTimer
                  isPlaying
                  duration={time}
                  colors="#004777"
                  onComplete={() => {
                    console.log('ON_COMPLETE BEFORE RETURN')
                    return [true, 0]
                  }}
                ></CountdownCircleTimer> */}
                <View style={styles.row}>
                <View style={styles.inputWrap}>
                  <Text style={styles.textStyle}>Worktime</Text>
                  <TextInput  style={styles.textinputStyle}  keyboardType={"numeric"} defaultValue={''+this.state.workTime} placeholder = "workTime in mins" onChangeText={this.handleWorkTime} />
                </View>
                <View style={styles.inputWrap}>
                  <Text style={styles.textStyle}>Breaktime</Text>
                  <TextInput  style={styles.textinputStyle}  keyboardType={"numeric"} defaultValue={''+this.state.breakTime} placeholder = "breakTime in mins" onChangeText={this.handleBreakTime} />
                </View>
               
              </View>
            </View>

            <SafeAreaView style={styles.massagecontainer} >



           


        </SafeAreaView>

      <SafeAreaView style={styles.massagecontainer}>
      <Text> </Text>
                <Text> </Text>
      <Text style={styles.title}>Pedometer</Text>
      <View style={styles.separator} lightColor="#e0e0e0" darkColor="rgba(255,255,255,0.1)" /> 


      <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', alignSelf: 'center', backgroundColor: 'transparent'}}> 

{/* <View style={{alignSelf: 'center', alignItems: 'center', backgroundColor: 'transparent',flexDirection: 'row'}}> */}

<Card containerStyle={{height:100, width:380, backgroundColor: '#BCC6CC', borderColor: 'black', borderWidth: 0.1, borderRadius: 20,shadowColor:'black'}} flexDirection='row'>
 
  <Text style={styles.pedometerinfo}>  Last 24 hours: {this.state.pastStepCount}{"\n"}  Recent Step Count: {this.state.currentStepCount}</Text> 

  <TouchableOpacity onPress={this.onShareFootsteps}>
  <Card pointerEvents='none' containerStyle={{height: 80, width: 80, borderRadius: 20, backgroundColor: 'transparent', borderColor: 'transparent'}}  >
  <TabBarIcon name="share-apple" onPress={this.onShareFootsteps} size={60}/>
  </Card>
  </TouchableOpacity>

</Card>    
</View>

      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', alignSelf: 'center', backgroundColor: 'transparent'}}> 
      <Card pointerEvents='none' containerStyle={{height: 100, width: 400, borderRadius: 16, backgroundColor: '#BCC6CC'}} alignSelf='center' alignContent='center' textAlign='center' justifyContent='center' flexDirection='row'>
       <Text>     </Text>
                <Image source={{uri: 'https://lh3.googleusercontent.com/proxy/CjgNXKUza04W4bvohq4W6gYQkaDiMfZ-cZOgGoYlxCoVjH-V4M-mYJk418AMoB_kPtlp5JeStqKf5wpGXZfRT1JC3NJKn-37Ba6Vo5gZDN7lQa6kdAOCX4eVRiqwLOF4'}} style={{height:80, width:80}} />
                 
                 
              <Text style={styles.pedometerinfo} justifyContent="center">  Last 24 hours: {this.state.pastStepCount}{"\n"}  Recent Step Count: {this.state.currentStepCount}</Text> 
        <TabBarIcon name="share-apple" onPress={this.onShareFootsteps} size={60}/>

        <TouchableOpacity onPress={this.onShareFootsteps}>
          <Card pointerEvents='none' containerStyle={{height: 65, width: 70, borderRadius: 20, backgroundColor: '#BCC6CC'}}  >
          <TabBarIcon name="share-apple" onPress={this.onShareFootsteps} size={40}/>

          </Card>
          </TouchableOpacity>


      </Card>
      </View> */}
      
      <Text style={styles.title}></Text>
      <Text style={styles.title}>Massager</Text>
      <View style={styles.separator} lightColor="#e0e0e0" darkColor="rgba(255,255,255,0.1)" /> 
      
      
      <SafeAreaView style={styles.massagecontainer} >
           
        <View style={{alignSelf: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>

      <Card containerStyle={{height:390, width:380, backgroundColor: '#BCC6CC', borderColor: 'black', borderWidth: 0.1, borderRadius: 20,shadowColor:'black'}} alignItems='center'>
          <TouchableOpacity onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}>
          
          <Card pointerEvents='none' containerStyle={{height: 100, width: 350, borderRadius: 20, backgroundColor: '#BCC6CC'}} alignSelf='center' alignContent='center' textAlign='center' justifyContent='center'>
          
            <Text style={{textAlign: 'center', fontSize:30, fontWeight: '300'}} onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}>Vibrate Once</Text>
            </Card>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => Vibration.vibrate(PATTERN, true)}>
          <Card pointerEvents='none' containerStyle={{height: 100, width: 350, borderRadius: 20, backgroundColor: '#BCC6CC'}} alignSelf='center' alignContent='center' textAlign='center' justifyContent='center' ><Text style={{textAlign: 'center', fontSize:30, fontWeight: '300'}} onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}>Vibrate With Pattern</Text></Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Vibration.cancel()}>
          <Card pointerEvents='none' containerStyle={{height: 100, width: 350, borderRadius: 20, backgroundColor: '#BCC6CC'}} alignSelf='center' alignContent='center' textAlign='center' justifyContent='center'><Text style={{textAlign: 'center', fontSize:30, fontWeight: '300'}} onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}>Stop Vibration</Text></Card>
          </TouchableOpacity>
     
      </Card>

          
      </View>
        </SafeAreaView>
 


      



      </SafeAreaView>
       <Modal isVisible={this.state.isModalVisible} style={{backgroundColor: 'white'}}>  
          

         
          <View style={{ flex: 1 }}>
            
              <SafeAreaView></SafeAreaView>
              <Button title="Close" onPress={this._hideModal} color="#FF0000" />            
          </View>
        </Modal>

        
        <Animated.ScrollView horizontal={true} pagingEnabled={true} showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
          <Card title="Tip #1" containerStyle={{height:300, width:380, backgroundColor: '#BCC6CC', borderColor: 'black', borderWidth: 0.1, shadowColor:'black'}} borderRadius={16} alignSelf='center'>
              <Text style={{fontSize:25}}>You can recharge your day by closing your eyes! Reading textbooks and squinting to see the board can put a lot of strain on your eyes. </Text>

          </Card>

          <Card title="Tip #2" containerStyle={{height:300, width:380, backgroundColor: '#BCC6CC', borderColor: 'black', borderWidth: 0.1, shadowColor:'black'}} borderRadius={16} alignSelf='center'>
              <Text style={{fontSize:25}}>Get the blood flowing! Exercise increases blood circulation to your brain, helping you think better.</Text>

          </Card>

           <Card title="Tip #3" containerStyle={{height:300, width:380, backgroundColor: '#BCC6CC', borderColor: 'black', borderWidth: 0.1, shadowColor:'black'}} borderRadius={16} alignSelf='center'>
              <Text style={{fontSize:25}}>Take it easy! Have a good work life balance. Overworking your brain does not give it time to rest, making it harder to retain new information.</Text>

          </Card>

        </Animated.ScrollView>
    </ScrollView>


    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'

    //alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  title: {
    fontSize: 45,
    fontWeight: '100',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 20,
  },
  body: {
    fontSize: 20,
    fontWeight: 'normal',
    flex: .1,
    justifyContent: 'center',
    textAlign: 'center',

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',

    
  },
  massagecontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
    // backgroundColor: 'rgb(255,255,255)',
    backgroundColor: 'transparent',
    textAlign: 'center'
    
  },
  massageheader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  massageparagraph: {
    margin: 24,
    textAlign: 'center',
  },
  massageseparator: {
    marginVertical: 8,
    borderBottomColor: '#eef2f9',
    borderBottomWidth: StyleSheet.hairlineWidth,
    textAlign: 'center',
    justifyContent: 'center'
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'transparent'
    
  },
  inputWrap: {
    flex: 1,
    borderColor: "#eef2f9",
    backgroundColor: 'transparent',
    fontWeight: '100',
    width: '50%'
    // borderBottomWidth: 1,
    // marginBottom: 10
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "100",
    letterSpacing: 1.5,
    marginTop: 5,
    backgroundColor: 'transparent',
    alignSelf: 'center'
    // padding: 20
  },

  textinputStyle: {
    fontSize: 50,
    fontWeight: "500",
    letterSpacing: 1.5,
    marginTop: 5,
    backgroundColor: 'transparent',
    color: '#BCC6CC',
    alignSelf: 'center'
    // padding: 20
  },
  pedometerinfo: {
    fontSize: 30,
    fontWeight: '200'

  }
  
});
