import { Text, TouchableOpacity } from "react-native"

import { Language } from "@sinonavo/types"
import { FlagIcon } from "./FlagIcon.parts"

export const LanguagePickerItem = ({ language, onPress }: { language: Language, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{language.name}</Text>
      <FlagIcon iso={language.iso} />
    </TouchableOpacity>
  )
}
