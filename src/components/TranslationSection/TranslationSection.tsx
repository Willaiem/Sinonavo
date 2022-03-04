import { View, Text, ScrollView } from "react-native"
import { TextArea, Navbar } from "@sinonavo/components"

import { useDebounce } from "../../hooks/useDebounce";

// ! the max length of text that Deepl APL can handle at once.
const MAX_LENGTH = 5000

export const TranslationSection = ({ type }: { type: "From" | "To" }) => {
  const fn = useDebounce((text: string) => console.log(text))

  const handleChange = (text: string) => {
    fn(text)
  }

  return (
    <View>
      <ScrollView>
        <View>
          <Navbar />
          <Text>{type}:</Text>
          <View onTouchStart={e => console.log("postion touch", e.nativeEvent)}>
            <TextArea
              accessibilityLabel=""
              accessibilityHint=""
              onChangeText={handleChange}
              editable={type === "From"}
              maxLength={MAX_LENGTH}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
