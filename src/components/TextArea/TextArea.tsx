import { ScrollView, Text, TextInput, TextInputProps } from "react-native"
import { styles } from "./TextArea.css"

export const TextArea = (props: TextInputProps) => (
  <ScrollView style={styles.textAreaContainer}>
    <Text>Test</Text>
    <TextInput
      {...props}
      multiline
      numberOfLines={10}
      style={styles.textArea}
    />
  </ScrollView>
)
