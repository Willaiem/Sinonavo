import { View } from "react-native"

import { Buttonlike, LanguagePicker } from "@sinonavo/components"
import { styles } from "./Navbar.css"
import { FieldType } from "../../types"

export const Navbar = ({ type }: { type: FieldType }) => {
  return (
    <View style={styles.container}>
      <LanguagePicker type={type} />
      <Buttonlike title="🎤" />
      <Buttonlike title="📷" />
    </View>
  )
}
