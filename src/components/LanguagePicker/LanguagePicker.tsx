import { View, Text } from 'react-native'

import { FlagIcon } from "./FlagIcon/FlagIcon.parts"
import { LanguagePickerModal } from './LanguagePickerModal/LanguagePickerModal.parts'

import { FieldType } from "@sinonavo/types"
import { SUPPORTED_LANGUAGES } from "../../global"
import { useAppStore } from "../../stores/AppStore"

export const LanguagePicker = ({ type }: { type: FieldType }) => {
  const lang = useAppStore(state => state.langs)[type]

  return (
    <View>
      <LanguagePickerModal type={type} />
      <Text>{lang?.name ?? SUPPORTED_LANGUAGES.NOFLAG.name}</Text>
      <FlagIcon iso={lang?.iso} />
    </View>
  )
}
