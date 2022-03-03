import { View, Text, ScrollView } from "react-native"
import { TextArea, Navbar } from "@sinonavo/components"

export const TranslationSection = ({ type }: { type: "From" | "To" }) => (
  <View>
    <ScrollView>
      <View>
        <Navbar />
        <Text>{type}:</Text>
        <View onTouchStart={e => console.log("postion touch", e.nativeEvent)}>
          <TextArea
            accessibilityLabel=""
            accessibilityHint=""
            editable={type === "From"}
          />
        </View>
      </View>
    </ScrollView>
  </View>
)
