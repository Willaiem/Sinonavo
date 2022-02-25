import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './App.css';

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx ziomek to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

