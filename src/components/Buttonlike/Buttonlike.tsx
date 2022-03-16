import { Text, ButtonProps, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./Buttonlike.css"

export const Buttonlike = ({ title, ...props }: TouchableOpacityProps & Pick<ButtonProps, 'title'>) => (
  <TouchableOpacity {...props} >
    <Text style={styles.icon}>{title}</Text>
  </TouchableOpacity>
)
