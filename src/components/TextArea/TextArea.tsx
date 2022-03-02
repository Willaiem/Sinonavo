import { TextInput, TextInputProps } from "react-native"
import { useKeyboard } from "../../hooks/useKeyboard"
import { styles } from "./TextArea.css"

export const TextArea = (props: TextInputProps) => {
  const isEditing = useKeyboard()

  const height = isEditing ? 50 : styles.textArea.height

  return (
    <TextInput
      {...props}
      multiline
      numberOfLines={10}
      style={{ ...styles.textArea, height }}
    />
  )
}
