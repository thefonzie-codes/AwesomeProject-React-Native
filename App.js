import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Home from './components/Home';

export default function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {setLoading(false)}, 3000);

  return (
    <View style={styles.container}>
      {loading && <Text style={styles.body}>Appy.yo</Text>}
      {!loading && <Home/>}
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
