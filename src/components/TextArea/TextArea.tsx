import { TextInput, DripsyTextInputProps } from 'dripsy'
import { styles } from "./TextArea.css"

export const TextArea = (props: DripsyTextInputProps) => {
  return (
    <TextInput
      {...props}
      multiline
      numberOfLines={10}
      sx={styles.textArea}
    />
  )
}