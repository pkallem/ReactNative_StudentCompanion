import React, { useState, useEffect } from 'react';
import { Text, View, Animated,StyleSheet, Button, Alert, TextInput, Image, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign } from "@expo/vector-icons";

import Navigation from '../navigation';
import * as WebBrowser from 'expo-web-browser';
import shouldUseActivityState from 'react-native-screens';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { Card } from 'react-native-paper';
import Card from '../components/Card';

export default function TabTwoScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  var itemsArray = [];
  const [count, setCount] = useState("");
  const [qrtext, setqrtext] = useState("");
  const [texty, setText] = useState("")

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const clearEverything = () => {
 
    setText("")
    setCount("")
    setqrtext("")

  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    WebBrowser.openBrowserAsync(data);

    
    
    if (validURL(data) == false) {
      if (type == 'org.iso.Code39' || type == 'org.iso.Code128') {
        
        itemsArray.push(data)

        if (data == "BANANA $2.00") {
          setCount(count + " | Banana, $2.00 | ")          
        } else if (data == "ORANGE $3.00") {
          setCount(count + " | Orange, $3.00 | ")          
        } else if (data == "LAYS CHIPS $2.00") {
          setCount(count + " | Lays Chips, $2.00 | ")          
        } else {
          setCount(count + " | Invalid Item | ")
        }
        // Alert.alert('Item Name & Cost:', `${count}`
      } else {
        Alert.alert('Message',`${data}`);
      }
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  

  return (

    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

    
      {/* <Button title={'REFRESH CART'} onPress={() => } /> */}
       <Animated.ScrollView horizontal={true} pagingEnabled={true} showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
           



    
    
    <View style={{marginRight:5, marginLeft: 5}}>
    <Card pointerEvents='none' containerStyle={{height: 200, width: 400, borderRadius: 16,backgroundColor: 'white'}} alignSelf='center' alignContent='center' textAlign='center' >
     
     <Text style={styles.cart}>{"\n"}{count}</Text>
     </Card>
     <View style={{flexDirection: 'row', alignSelf: 'center', alignContent: 'center', backgroundColor: 'white', borderRadius: 10, marginTop: 3}}>
      
     <Button title={'CLEAR CART'} onPress={() => clearEverything()} />
{scanned && <Button title={'SCAN AGAIN'} onPress={() => setScanned(false)} />}
     </View>

</View>

<View style={{marginRight:5, marginLeft: 5}}>
<Image style={{width:199, height:199, borderRadius: 15, justifyContent: 'center'}}  source={{uri:`https://chart.googleapis.com/chart?chl=${qrtext}&cht=qr&chs=300x300`}} />      
    <TextInput style={{borderWidth:1, borderRadius: 15, marginRight: 5,width: 200, height: 200, backgroundColor:'white', flexWrap: 'wrap'}} value={texty} onChangeText={(text) => { setText(text)}}/>

    <View style={{alignSelf: 'center', alignContent: 'center', backgroundColor: 'white', borderRadius: 10, marginTop: 3}}>
      
     <Button title={'SHARE CART'} onPress={() => setqrtext(qrtext + count + texty)} /> 
      </View>
    </View>

    

        </Animated.ScrollView>
      
    
     
      
    
    
    </View>

);
}



function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  barCodeView: {
    width: '100%', 
    height: '50%', 
    marginBottom: 40
  },
  navbar: {
    
  },
  cart: {
    fontSize: 20,
    fontWeight: '200',
  }

});