import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Button title="My Balance"/>
      <Button title="Convert Balance"/>
      <Button title="Send Gift"/>
      <Button title="Add Funds"/>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      gap: 5,
    }
  });