import React, { Component } from 'react';
import { TouchableOpacity, Image,Button, ActivityIndicator, Linking, Animated, Platform,Vibration, SafeAreaView, StyleSheet, FlatList, Share, TextInput } from 'react-native';
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
import Newsbrowser from '../components/Newsbrowser';


import Modal from 'react-native-modal';
import { ThemeProvider } from '@react-navigation/native';
import { green100, lightGreen100 } from 'react-native-paper/lib/typescript/styles/colors';
import { setAutoServerRegistrationEnabledAsync } from 'expo-notifications';
import Neumorph from 'react-native-neumorphic';

import Weather from '../components/Weather'
import { API_KEY } from '../components/WeatherAPIKey';
import WebView from 'react-native-webview';

import * as rssParser from 'react-native-rss-parser';


export default class TabFourScreen extends Component {
  constructor (props) {
    super (props)
    this.state = {news : {}, loading : true}
  }    

  
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null

  }


  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Condtions'
        });
      }
    );
    fetch('https://news.yahoo.com/rss')
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => this.setState({news: rss.items, loading: false}))
      .catch(err => console.error(err)); 
  }
  	// handles completion of timer

  
    renderItem = ({ item }) => { 

      const geUrlByParams = (str, param) => {
        return str
          .split('><')
          .find(elem=> elem.includes(param))
          .split('"')
          .find(item => item.includes('http'));
      }
      const handleClick = () => {
        Linking.canOpenURL(`https://news.yahoo.com/${item.id}`).then(supported => {
          if (supported) {
            Linking.openURL(`https://news.yahoo.com/${item.id}`);
            
          } else {
            console.log(`Don't know how to open URI: https://news.yahoo.com/${item.id}`);
          }
        });
    };
  
      return (
        <TouchableOpacity onPress={handleClick}> 
          <View style={styles.item}>
            <Text style={styles.newstitle}>
              {item.title}
            </Text>      
          </View>
        </TouchableOpacity>
    )};  
    
  render () {
    const { isLoading, weatherCondition, temperature } = this.state;

    const { news, loading } = this.state;


    return (
     
      
      
        <ScrollView style={styles.container}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Fetching The Weather</Text>
            </View>
          ) : (
            <Weather weather={weatherCondition} temperature={temperature * 9/5 +32} />
          )}


<View style={{alignItems: 'center', height: 400, width: 400}}>
          <Text style={styles.newsheader}>Yahoo! news</Text>
            <FlatList
              styles={styles.newscontainer}
              data={news}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            {this.state.error &&
              <Text>
                Error message: {this.state.error}
              </Text>
            }

            <Newsbrowser />
        </View>
        </ScrollView>

        
);
    

        
        // <Animated.ScrollView horizontal={true} pagingEnabled={true} showsVerticalScrollIndicator ={false}
        // showsHorizontalScrollIndicator={false}>
        //   <Card title="Tip #1" containerStyle={{height:300, width:380, backgroundColor: '#BCC6CC', borderColor: 'black', borderWidth: 0.1, shadowColor:'black'}} borderRadius={16} alignSelf='center'>
        //       <Text style={{fontSize:25}}>You can recharge your day by closing your eyes! Reading textbooks and squinting to see the board can put a lot of strain on your eyes. </Text>

        //   </Card>

        //   <Card title="Tip #2" containerStyle={{height:300, width:380, backgroundColor: '#BCC6CC', borderColor: 'black', borderWidth: 0.1, shadowColor:'black'}} borderRadius={16} alignSelf='center'>
        //       <Text style={{fontSize:25}}>Get the blood flowing! Exercise increases blood circulation to your brain, helping you think better.</Text>

        //   </Card>

        //    <Card title="Tip #3" containerStyle={{height:300, width:380, backgroundColor: '#BCC6CC', borderColor: 'black', borderWidth: 0.1, shadowColor:'black'}} borderRadius={16} alignSelf='center'>
        //       <Text style={{fontSize:25}}>Take it easy! Have a good work life balance. Overworking your brain does not give it time to rest, making it harder to retain new information.</Text>

        //   </Card>

        // </Animated.ScrollView>



    
    
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

  },


  newsheader: {
    paddingTop: 30,
    fontSize: 24,
    color: '#3366ff',    
    fontWeight: 'bold',
  },
  newscontainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  newsitem: {    
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'    
  },
  newstitle: {
    fontWeight: 'bold',
    fontSize: 17,
    maxWidth: 200,
    height: 80,
  },
  newsimg: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  newsloader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }



});
