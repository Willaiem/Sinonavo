import { StatusBar } from "expo-status-bar"
import { useEffect, useRef } from "react"
import { View, Text, ScrollView } from "react-native"
import { useKeyboard } from "../../hooks/useKeyboard"

import { TextArea } from "../TextArea/TextArea"
import { TranslationNavbar } from "../TranslationNavbar/TranslationNavbar"
import { styles } from "./App.css"

export const App = () => {
  const isEditing = useKeyboard()

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View>
            <TranslationNavbar />
            <Text>From:</Text>
            <View
              onTouchStart={e => console.log("postion touch", e.nativeEvent)}
            >
              <TextArea accessibilityLabel="" accessibilityHint="" />
            </View>
          </View>
        </ScrollView>
      </View>

      {!isEditing ? (
        <View>
          <ScrollView>
            <View>
              <TranslationNavbar />
              <Text>To:</Text>
              <TextArea
                accessibilityLabel=""
                accessibilityHint=""
                editable={false}
              />
            </View>
          </ScrollView>
        </View>
      ) : null}

      <StatusBar style="auto" />
    </View>
  )
}
