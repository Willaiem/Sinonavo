import { Text, ButtonProps, TouchableOpacity } from "react-native"
import { styles } from "./IconButton.css"

export const IconButton = ({ title, onPress }: ButtonProps) => (
  <TouchableOpacity accessibilityRole="button" onPress={onPress}>
    <Text style={styles.icon}>{title}</Text>
  </TouchableOpacity>
)
