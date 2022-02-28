import { StatusBar } from "expo-status-bar"
import { View, Text } from "react-native"
import { TextArea } from "../TextArea/TextArea"
import { styles } from "./App.css"

export const App = () => {
  return (
    <View style={styles.container}>
      <TextArea accessibilityLabel="" accessibilityHint="" />
      <TextArea accessibilityLabel="" accessibilityHint="" />
      <StatusBar style="auto" />
    </View>
  )
}
