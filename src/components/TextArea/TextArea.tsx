import { useEffect, useState } from "react"
import { Keyboard, TextInput, TextInputProps } from "react-native"
import { styles } from "./TextArea.css"

const useKeyboard = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false)
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return isKeyboardVisible
}

export const TextArea = (props: TextInputProps) => {
  const isEditing = useKeyboard()

  const height = isEditing ? 100 : styles.textArea.height

  return (
    <TextInput
      {...props}
      multiline
      numberOfLines={10}
      style={{ ...styles.textArea, height }}
    />
  )
}
