import { Text, ScrollView, Alert } from "react-native"
import { View, styled } from 'dripsy'
import { MotiView } from 'moti'
import * as Clipboard from 'expo-clipboard';

import { TextArea, Navbar, Buttonlike } from "@sinonavo/components"
import { FieldType } from "@sinonavo/types";
import { MAX_LENGTH } from "@sinonavo/global";
import { useAppStore } from "@sinonavo/stores/AppStore";

import { useTranslationSection } from "./hooks/useTranslationSection";
import { useKeyboard } from "@sinonavo/hooks/useKeyboard";

const AnimatedView = styled(MotiView)()

const ClipboardButton = ({ type }: { type: FieldType }) => {
  const text = useAppStore(state => state.texts[type])

  const isEditing = useKeyboard()
  const isEmpty = text.trim().length === 0

  const handleClipboard = () => {
    Clipboard.setString(text)
    Alert.alert('Copied to clipboard!')
  }

  return !isEditing && !isEmpty ? (
    <Buttonlike
      style={{
        position: 'absolute',
        // ! TODO: needs to be checked on different devices 
        right: 50,
        bottom: 5
      }}
      accessibilityLabel="Copy to clipboard" title="📋" onPress={handleClipboard} />
  ) : null
}

const ClearButton = ({ type }: { type: FieldType }) => {
  const fromText = useAppStore(state => state.texts.from)
  const setText = useAppStore(state => state.setText)
  const isEditing = useKeyboard()

  const handleCleaning = () => {
    setText({
      type: 'from',
      text: ''
    })
    setText({
      type: 'to',
      text: ''
    })
  }

  return !isEditing && type === 'from' && fromText.trim().length > 0 ? (
    <Buttonlike
      style={{
        position: 'absolute',
        // ! TODO: needs to be checked on different devices 
        right: 50,
        bottom: 35
      }}
      accessibilityLabel={`Clear the fields`} title="❌" onPress={handleCleaning} />
  ) : null
}

export const TranslationSection = ({ type }: { type: FieldType }) => {
  const { shouldBeVisible, inputProps } = useTranslationSection(type)

  const status = useAppStore(state => state.status)
  const loadingIndicator = status === 'pending' ? <Text>INSERT THE PULSING LOADING BAR HERE!!!</Text> : null

  return shouldBeVisible ? (
    <AnimatedView
      transition={{ type: 'timing', duration: 2000 }}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <ScrollView>
        <View>
          <Navbar type={type} />
          <Text>{type}:</Text>
          {loadingIndicator}
          <View>
            <TextArea
              {...inputProps}
              maxLength={MAX_LENGTH}
            />
            <ClipboardButton type={type} />
            <ClearButton type={type} />
          </View>
        </View>
      </ScrollView>
    </AnimatedView>
  ) : null
}
