import { Text, TouchableOpacity, FlatList, Modal } from 'react-native'
import { View, TextInput } from 'dripsy'

import { Buttonlike } from '@sinonavo/components'
import { FieldType } from "@sinonavo/types"
import { SUPPORTED_LANGUAGES } from "@sinonavo/global"

import { FlagIcon } from "./FlagIcon.parts"
import { LanguagePickerItem } from './LanguagePickerItem.parts'
import { useLanguageModal } from './hooks/useLanguagePicker'
import { styles } from './LanguagePicker.css'

export const LanguagePicker = ({ type }: { type: FieldType }) => {
  const { supportedLanguages, isOpened, lang, handleInputChange,
    onClose, setLang, setIsOpened, fetchTranslation } = useLanguageModal(type)

  return (
    <View>
      <Modal animationType="slide" visible={isOpened} onRequestClose={onClose}>
        <View sx={styles.outerModal}>
          <View sx={styles.innerModal}>
            <Buttonlike title="Close" onPress={onClose} />
            <TextInput sx={styles.innerModalInput} onChangeText={handleInputChange} />
          </View>
          <FlatList data={supportedLanguages} renderItem={({ item }) =>
            <LanguagePickerItem onPress={() => {
              setLang({ type, lang: item })
              fetchTranslation()
              onClose()
            }} language={item} />} />
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setIsOpened(!isOpened)}>
        <Text>{lang?.name ?? SUPPORTED_LANGUAGES.NOFLAG.name}</Text>
        <FlagIcon iso={lang?.iso} />
      </TouchableOpacity>
    </View>
  )
}