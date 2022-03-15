import { View, Text } from 'react-native'

import { FieldType } from "@sinonavo/types"
import { useAppStore } from "@sinonavo/stores/AppStore"
import { SUPPORTED_LANGUAGES } from "@sinonavo/global"

import { FlagIcon } from "./FlagIcon/FlagIcon.parts"
import { LanguagePickerModal } from './LanguagePickerModal/LanguagePickerModal.parts'

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
