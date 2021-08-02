import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Share, TouchableOpacity, FlatList, Modal, Button, Image, Platform, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import * as Sharing from 'expo-sharing';

import { Text, useThemeColor, View} from '../components/Themed';
import { BackgroundImage } from 'react-native-elements/dist/config';
import Card from '../components/Card';

import { EvilIcons } from '@expo/vector-icons';

import BigImage from '../components/BigImages';

function TabBarIcon(props: { name: React.ComponentProps<typeof EvilIcons>['name']; color: string }) {
  return <EvilIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);


  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  var pickAnImage = null;
  var pickAnImage2 = null;
  var pickAnImage3 = null;
  var pickAnImage4 = null;
  var pickAnImage5 = null;
  var pickAnImage6 = null;


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  
    if (result != null) {
      pickAnImage = "Choose another image"
    } else {
      pickAnImage = "Pick an image from camera roll"
    }
  
  };

  const image1share = async () => {
    try {
      const result =  await Sharing.shareAsync(image);


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

  const pickImage2 = async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result2);

    if (!result2.cancelled) {
      setImage2(result2.uri);
    }
  
    if (result2 != null) {
      pickAnImage2 = "Choose another image"
    } else {
      pickAnImage2 = "Pick an image from camera roll"
    }
  
  };

  const image2share = async () => {
    try {
      const result =  await Sharing.shareAsync(image2);


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
 
  const pickImage3 = async () => {
    let result3 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result3);

    if (!result3.cancelled) {
      setImage3(result3.uri);
    }
  
    if (result3 != null) {
      pickAnImage3 = "Choose another image"
    } else {
      pickAnImage3 = "Pick an image from camera roll"
    }
  
  };

  const image3share = async () => {
    try {
      const result =  await Sharing.shareAsync(image3);


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
 
  const pickImage4 = async () => {
    let result4 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result4);

    if (!result4.cancelled) {
      setImage4(result4.uri);
    }
  
    if (result4 != null) {
      pickAnImage4 = "Choose another image"
    } else {
      pickAnImage4 = "Pick an image from camera roll"
    }
  
  };
 
  const image4share = async () => {
    try {
      const result =  await Sharing.shareAsync(image4);


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

  const pickImage5 = async () => {
    let result5 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result5);

    if (!result5.cancelled) {
      setImage5(result5.uri);
    }
  
    if (result5 != null) {
      pickAnImage5 = "Choose another image"
    } else {
      pickAnImage5 = "Pick an image from camera roll"
    }
  
  };

  const image5share = async () => {
    try {
      const result =  await Sharing.shareAsync(image5);


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
 
  const pickImage6 = async () => {
    let result6 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result6.cancelled) {
      setImage6(result6.uri);
    }
  
    if (result6 != null) {
      pickAnImage6 = "Choose another image"
    } else {
      pickAnImage6 = "Pick an image from camera roll"
    }
  
  };

  const image6share = async () => {
    try {
      const result =  await Sharing.shareAsync(image6);


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
 
  return (
    
    <ScrollView style={styles.container} showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false}>
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>

<Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons 
            name='close'
            size={24} 
            style={{...styles.modalToggle, ...styles.modalClose}} 
            onPress={() => setModalOpen(false)} 
          />
          <Text>Hello from the modal :)</Text>
        </View>
      </Modal>
      
      <Text style={styles.title}></Text>
      <Text style={styles.title}>ID Card</Text>
      <View style={styles.separator} lightColor="#e0e0e0" darkColor="rgba(255,255,255,0.1)" /> 
    <Button 
    title="Choose image" onPress={pickImage} />
    {image && <Image source={{ uri: image }} style={{ width: 400, height: 260, borderRadius: 20 }} />}
    <Text style={styles.information}>You can upload your identification card here. Make sure to align the left and right sides of your screen with the card, leaving equal space at the top and bottom.</Text>
    {/* <Text onPress={() => setModalOpen(true)}>open</Text> */}

    <Text style={styles.title}></Text>
      {/* <Text style={styles.title}>Calculator</Text>
      <View style={styles.separator} lightColor="#e0e0e0" darkColor="rgba(255,255,255,0.1)" /> 
      <Text style={styles.title}></Text> */}
      <Text style={styles.title}>Documents</Text>
      <View style={styles.separator} lightColor="#e0e0e0" darkColor="rgba(255,255,255,0.1)" /> 
    </View>   



        
        <Animated.ScrollView horizontal={true} pagingEnabled={true} showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
          


    
          <Card containerStyle={{borderRadius: 15}}>
            <View  style={{backgroundColor:'transparent'}}>
            <Button 
    title="Add/Change Document" onPress={pickImage6} />
            <Image source={{uri: image6}} style={{width: 350, height: 500}}/>
            <TouchableOpacity onPress={image6share}>
            <Card pointerEvents='none' containerStyle={{height: 80, width: 80, borderRadius: 20, backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 270}}  >
            <TabBarIcon name="share-apple" onPress={image6share} size={60}/>
            </Card>
            </TouchableOpacity>
            </View>
          </Card>
          
          <Card containerStyle={{borderRadius: 15} }>
            <View  style={{backgroundColor:'transparent'}}>
            <Button 
    title="Add/Change Document" onPress={pickImage2} />  
            <Image source={{uri: image2}} style={{width: 350, height: 500}}/>
            <TouchableOpacity onPress={image2share}>
            <Card pointerEvents='none' containerStyle={{height: 80, width: 80, borderRadius: 20, backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 270}}  >
            <TabBarIcon name="share-apple" onPress={image2share} size={60}/>
            </Card>
            </TouchableOpacity>
            </View>
          </Card>

          <Card containerStyle={{borderRadius: 15} }>
            <View  style={{backgroundColor:'transparent'}}>
            <Button 
    title="Add/Change Document" onPress={pickImage3} />

            <Image source={{uri: image3}} style={{width: 350, height: 500}}/>
            <TouchableOpacity onPress={image3share}>
            <Card pointerEvents='none' containerStyle={{height: 80, width: 80, borderRadius: 20, backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 270}}  >
            <TabBarIcon name="share-apple" onPress={image3share} size={60}/>
            </Card>
            </TouchableOpacity>
            </View>
          </Card>

          <Card containerStyle={{borderRadius: 15} }>
            <View  style={{backgroundColor:'transparent'}}>
            <Button 
    title="Add/Change Document" onPress={pickImage4} />

          

            <Image source={{uri:  image4}} style={{width: 350, height: 500}}/>
            <TouchableOpacity onPress={image4share}>
            <Card pointerEvents='none' containerStyle={{height: 80, width: 80, borderRadius: 20, backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 270}}  >
            <TabBarIcon name="share-apple" onPress={image4share} size={60}/>
            </Card>
            </TouchableOpacity>
            </View>
          </Card>

          <Card containerStyle={{borderRadius: 15} }>

<View style={{backgroundColor:'transparent'}}>
<Button 
title="Add/Change Document" onPress={pickImage5} />
<Image source={{uri: image5}} style={{width: 350, height: 500}}/>
<TouchableOpacity onPress={image5share}>
            <Card pointerEvents='none' containerStyle={{height: 80, width: 80, borderRadius: 20, backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 270}}  >
            <TabBarIcon name="share-apple" onPress={image5share} size={60}/>
            </Card>
            </TouchableOpacity>
</View>
</Card>
          
        </Animated.ScrollView>
    



    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  title: {
    fontSize: 45,
    fontWeight: '100',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 20
  },
  information: {
    fontSize: 15,
    fontWeight: '100',
    justifyContent: 'center',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingTop: 5
  },
  body: {
    fontSize: 20,
    fontWeight: 'normal',
    flex: .1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center'
  },
  massagecontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
    backgroundColor: 'rgb(255,255,255)',
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
  },
  inputWrap: {
    flex: 1,
    borderColor: "#eef2f9",
    // borderBottomWidth: 1,
    // marginBottom: 10
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 5,
    // padding: 20
  },
  pedometerinfo: {
    fontSize: 27,
    fontWeight: '100'

  }
  
});