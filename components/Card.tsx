import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
const width =  (Dimensions.get('window').width); 

export default class extends Component {
  render() {
    return (
          <View style=
          
          {{width}}>
            <Card {...this.props}  />
          </View>
    );
  }
}

const styles = StyleSheet.create({
    
});
