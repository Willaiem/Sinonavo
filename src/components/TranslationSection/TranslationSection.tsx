import { View, Text, ScrollView } from "react-native"
import { TextArea } from "../TextArea/TextArea"
import { Navbar } from "../Navbar/Navbar"

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
            editable={type === "To"}
          />
        </View>
      </View>
    </ScrollView>
  </View>
)
