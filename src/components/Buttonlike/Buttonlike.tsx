import { Text, ButtonProps, TouchableOpacity } from "react-native"
import { styles } from "./Buttonlike.css"

export const Buttonlike = ({ title, ...props }: ButtonProps) => (
  <TouchableOpacity {...props}>
    <Text style={styles.icon}>{title}</Text>
  </TouchableOpacity>
)
