import { StatusBar } from "expo-status-bar"
import { View, Button } from "react-native"

import { TranslationSection } from "@sinonavo/components"
import { styles } from "./App.css"
import { useAppStore } from "../../stores/AppStore"


const Swap = () => {
  const swap = useAppStore(state => state.swap)

  return (
    <Button accessibilityLabel="Swap" title="🔁" onPress={() => swap()} />
  )
}

export const App = () => {
  return (
    <View style={styles.container}>
      <TranslationSection type="from" />

      <Swap />

      <TranslationSection type="to" />

      <StatusBar style="auto" />
    </View>
  )
}
