import { useState } from "react"
import { TextInput, TextInputProps } from "react-native"
import { styles } from "./TextArea.css"

const useFocus = () => {
  const [isFocused, setIsFocused] = useState(false)

  const onFocus = () => {
    setIsFocused(true)
  }
  const onBlur = () => {
    setIsFocused(false)
  }

  return { isFocused, onFocus, onBlur }
}

export const TextArea = (props: TextInputProps) => {
  const { isFocused, ...events } = useFocus()

  return (
    <TextInput
      {...events}
      {...props}
      onSelectionChange={e =>
        console.log("selection change", e.nativeEvent.selection)
      }
      multiline
      numberOfLines={10}
      style={styles.textArea}
    />
  )
}
