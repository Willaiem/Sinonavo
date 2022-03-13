import { View, Text, ScrollView, TextInputProps } from "react-native"
import { TextArea, Navbar } from "@sinonavo/components"

import { useDebounce } from "../../hooks/useDebounce";
import { useAppStore } from "../../stores/AppStore";
import { FieldType } from "../../types";
import { MAX_LENGTH } from "../../global";
import { useCallback } from "react";

export const TranslationSection = ({ type }: { type: FieldType }) => {
  const fetchTranslation = useAppStore(state => state.fetchTranslation)
  const texts = useAppStore(state => state.texts)
  const setText = useAppStore(state => state.setText)

  const debouncedFn = useCallback(useDebounce(fetchTranslation, 500), [])

  const handleChange = () => {
    debouncedFn()
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
    editable: texts.to.length > 0,
  }

  console.log(toProps)

  // onTouchStart={e => console.log("postion touch", e.nativeEvent)}

  return (
    <View>
      <ScrollView>
        <View>
          <Navbar type={type} />
          <Text>{type}:</Text>
          <View>
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
