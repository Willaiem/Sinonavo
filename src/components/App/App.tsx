import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

import { TranslationSection } from "@sinonavo/components"
import { styles } from "./App.css"
import { useAppStore } from "../../stores/AppStore"
import { Buttonlike } from "../Buttonlike/Buttonlike"
import { useKeyboard } from "../../hooks/useKeyboard"


const Swap = () => {
  const swap = useAppStore(state => state.swap)
  const isEditing = useKeyboard()

  return !isEditing ? (
    <Buttonlike accessibilityLabel="Swap" title="🔁" onPress={() => swap()} />
  ) : null
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
