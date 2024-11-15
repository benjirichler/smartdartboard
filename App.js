import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View, Image, Alert, SafeAreaView, Button, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button 
      color="blue"
      title="Click me pls" 
      onPress={() => Alert.prompt("title", "message", text => console.log(text))}/>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
