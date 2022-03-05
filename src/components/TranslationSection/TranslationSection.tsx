import { View, Text, ScrollView, TextInputProps } from "react-native"
import { TextArea, Navbar } from "@sinonavo/components"

import { useDebounce } from "../../hooks/useDebounce";
import { useAppStore } from "../../hooks/useAppStore";


// ! the max length of text that Deepl APL can handle at once.
const MAX_LENGTH = 5000

export const TranslationSection = ({ type }: { type: "From" | "To" }) => {
  const { fetchTranslation, fromText, toText, setFromText, setToText } = useAppStore()

  const debouncedFetchTranslation = useDebounce(() => console.log('debounce'), 1000)

  const handleChange = () => {
    debouncedFetchTranslation()
  }

  console.log(toText)

  const fromProps: TextInputProps = {
    value: fromText,
    accessibilityLabel: '',
    accessibilityHint: '',
    onChangeText: (text) => {
      setFromText(text)
      handleChange()
    }
  }

  const toProps: TextInputProps = {
    value: toText,
    accessibilityLabel: '',
    accessibilityHint: '',
    onChangeText: setToText,
    editable: toText.length === 0,
  }

  return (
    <View>
      <ScrollView>
        <View>
          <Navbar />
          <Text>{type}:</Text>
          <View onTouchStart={e => console.log("postion touch", e.nativeEvent)}>
            <TextArea
              {...(type === 'From' ? fromProps : toProps)}
              maxLength={MAX_LENGTH}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
