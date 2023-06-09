import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TitleBar from './components/TitleBar';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <TitleBar/>
      <NavBar/>

      <StatusBar style="auto" />
      
    </View>
    <View style={styles.container1}>
        <NavBar/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection:'column',
    paddingHorizontal:10,
    justifyContent:'space-between',

  },
});
