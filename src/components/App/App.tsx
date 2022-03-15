import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

import { TranslationSection, Buttonlike } from "@sinonavo/components"
import { useAppStore } from "@sinonavo/stores/AppStore"
import { useKeyboard } from "@sinonavo/hooks/useKeyboard"
import { styles } from "./App.css"


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
