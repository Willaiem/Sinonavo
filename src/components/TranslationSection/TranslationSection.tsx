import { View, Text, ScrollView, TextInputProps } from "react-native"
import { TextArea, Navbar } from "@sinonavo/components"

import { useDebounce } from "../../hooks/useDebounce";
import { useAppStore } from "../../stores/AppStore";
import { FieldType } from "../../types";
import { MAX_LENGTH } from "../../global";
import { useCallback } from "react";
import { useKeyboard } from "../../hooks/useKeyboard";

export const TranslationSection = ({ type }: { type: FieldType }) => {
  const fetchTranslation = useAppStore(state => state.fetchTranslation)

  const texts = useAppStore(state => state.texts)
  const setText = useAppStore(state => state.setText)
  const status = useAppStore(state => state.status)

  const focusedInput = useAppStore(state => state.focusedInput)
  const setFocusedInput = useAppStore(state => state.setFocusedInput)

  const debouncedFetchTranslation = useCallback(useDebounce({ fn: fetchTranslation, ms: 500 }), [])

  const isEditing = useKeyboard()

  const handleChange = () => {
    debouncedFetchTranslation()
  }

  const fromInputProps: TextInputProps = {
    value: texts.from,
    accessibilityLabel: '',
    accessibilityHint: '',
    onChangeText: (text) => {
      setText({ type, text })
      handleChange()
    }
  }

  const toInputProps: TextInputProps = {
    value: texts.to,
    accessibilityLabel: '',
    accessibilityHint: '',
    onChangeText: (text: string) => setText({ type, text }),
    editable: texts.to.length > 0,
  }
  const inputProps = type === 'from' ? fromInputProps : toInputProps


  const onFocus = () => {
    setFocusedInput(type)
  }
  const onBlur = () => {
    setFocusedInput(type)
  }

  const shouldBeVisible = !isEditing || focusedInput === type

  const loadingIndicator = status === 'pending' ? <Text>INSERT THE PULSING LOADING BAR HERE!!!</Text> : null

  return shouldBeVisible ? (
    <View>
      <ScrollView>
        <View>
          <Navbar type={type} />
          <Text>{type}:</Text>
          {loadingIndicator}
          <View>
            <TextArea
              {...inputProps}
              onFocus={onFocus}
              onBlur={onBlur}
              maxLength={MAX_LENGTH}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  ) : null
}
