import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

import { TranslationSection } from "@sinonavo/components"
import { useKeyboard } from "../../hooks/useKeyboard"
import { styles } from "./App.css"


export const App = () => {
  const isEditing = useKeyboard()

  return (
    <View style={styles.container}>
      <TranslationSection type="from" />

      {!isEditing ? <TranslationSection type="to" /> : null}

      <StatusBar style="auto" />
    </View>
  )
}
