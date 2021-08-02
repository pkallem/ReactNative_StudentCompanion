import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async ({datascience}) => {
    let result = await WebBrowser.openBrowserAsync(datascience);
    setResult(result);
  };
  return (
    <View>
      <Button title="Open WebBrowser" onPress={() => _handlePressButtonAsync('https://www.google.com/')} />
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  );
}