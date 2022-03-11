
import { Text, TouchableOpacity } from "react-native"
import { FlagIcon } from "../FlagIcon/FlagIcon.parts"
import { Language } from "../../../types"

export const LanguagePickerItem = ({ language, onPress }: { language: Language, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{language.name}</Text>
      <FlagIcon iso={language.iso} />
    </TouchableOpacity>
  )
}
