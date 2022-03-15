import { TextInput, TextInputProps } from "react-native"
import { styles } from "./TextArea.css"

export const TextArea = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      multiline
      numberOfLines={10}
      style={styles.textArea}
    />
  )
}
