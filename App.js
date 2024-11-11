import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View, Image, Alert, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="orange"
      title="Click me pls" 
      onPress={() => Alert.prompt("title", "message", text => console.log(text))}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
