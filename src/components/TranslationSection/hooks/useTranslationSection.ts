import { TextInputProps } from "react-native"
import { useCallback } from "react";

import { useAppStore } from "@sinonavo/stores/AppStore";
import { useKeyboard } from "@sinonavo/hooks/useKeyboard";
import { useDebounce } from "@sinonavo/hooks/useDebounce";
import { FieldType } from "../../../types"

const useInputFocus = (type: FieldType) => {
  const setFocusedInput = useAppStore(state => state.setFocusedInput)

  const onFocus = () => {
    setFocusedInput(type)
  }
  const onBlur = () => {
    setFocusedInput(type)
  }

  return { onFocus, onBlur }
}

export const useTranslationSection = (type: FieldType) => {
  const texts = useAppStore(state => state.texts)
  const setText = useAppStore(state => state.setText)
  const focusedInput = useAppStore(state => state.focusedInput)

  const fetchTranslation = useAppStore(state => state.fetchTranslation)
  const debouncedFetchTranslation = useCallback(useDebounce({ fn: fetchTranslation, ms: 500 }), [])

  const isEditing = useKeyboard()
  const { onFocus, onBlur } = useInputFocus(type)

  const handleChange = () => {
    debouncedFetchTranslation()
  }

  const fromInputProps: TextInputProps = {
    value: texts.from,
    accessibilityLabel: '',
    accessibilityHint: '',
    onChangeText: text => {
      setText({ type, text })
      handleChange()
    }
  }

  const toInputProps: TextInputProps = {
    value: texts.to,
    accessibilityLabel: '',
    accessibilityHint: '',
    onChangeText: text => setText({ type, text }),
    editable: texts.to.length > 0,
  }

  const inputProps = type === 'from' ? fromInputProps : toInputProps
  const shouldBeVisible = !isEditing || focusedInput === type

  return { shouldBeVisible, inputProps: { ...inputProps, onFocus, onBlur } }
}