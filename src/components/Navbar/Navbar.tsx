import { View } from "react-native"

import { Buttonlike, LanguagePicker } from "@sinonavo/components"
import { FieldType } from "../../types"
import { styles } from "./Navbar.css"

export const Navbar = ({ type }: { type: FieldType }) => {
  return (
    <View style={styles.container}>
      <LanguagePicker type={type} />
      {/* Below are not important until the app became MVP. */}
      {/* <Buttonlike title="🎤" />
      <Buttonlike title="📷" /> */}
    </View>
  )
}
