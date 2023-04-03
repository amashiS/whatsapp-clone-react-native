import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TitleBar from './components/TitleBar';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <TitleBar/>

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
    paddingHorizontal:20,
    justifyContent:'space-between',

  },
  container1:{
    backgroundColor: '#000',
    flexDirection:'column',

  }
});
