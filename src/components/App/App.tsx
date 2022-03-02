import { StatusBar } from "expo-status-bar"
import { View, Text, ScrollView } from "react-native"

import { TextArea } from "../TextArea/TextArea"
import { TranslationNavbar } from "../TranslationNavbar/TranslationNavbar"
import { styles } from "./App.css"

export const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View>
            <TranslationNavbar />
            <Text>From:</Text>
            <TextArea accessibilityLabel="" accessibilityHint="" />
          </View>
        </ScrollView>
      </View>

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

      <StatusBar style="auto" />
    </View>
  )
}
