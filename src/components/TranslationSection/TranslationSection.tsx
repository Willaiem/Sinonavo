import { View, Text, ScrollView, TextInputProps } from "react-native"
import { TextArea, Navbar } from "@sinonavo/components"

import { useDebounce } from "../../hooks/useDebounce";
import { useAppStore } from "../../hooks/useAppStore";
import { FieldType } from "../../types";
import { MAX_LENGTH } from "../../global";

export const TranslationSection = ({ type }: { type: FieldType }) => {
  const { fetchTranslation, texts, setText } = useAppStore()

  const debouncedFetchTranslation = useDebounce(() => console.log('debounce'), 1000)

  const handleChange = () => {
    debouncedFetchTranslation()
  }

  console.log(texts.to)

  const fromProps: TextInputProps = {
    value: texts.from,
    accessibilityLabel: '',
    accessibilityHint: '',
    onChangeText: (text) => {
      setText({ type, text })
      handleChange()
    }
  }

  const toProps: TextInputProps = {
    value: texts.to,
    accessibilityLabel: '',
    accessibilityHint: '',
    onChangeText: (text: string) => setText({ type, text }),
    editable: texts.to.length === 0,
  }

  return (
    <View>
      <ScrollView>
        <View>
          <Navbar type={type} />
          <Text>{type}:</Text>
          <View onTouchStart={e => console.log("postion touch", e.nativeEvent)}>
            <TextArea
              {...(type === 'from' ? fromProps : toProps)}
              maxLength={MAX_LENGTH}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
