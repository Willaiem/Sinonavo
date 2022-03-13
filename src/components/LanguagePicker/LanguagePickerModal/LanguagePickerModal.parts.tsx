import { FlatList, Modal, TextInput, View } from "react-native"
import { IconButton } from "@sinonavo/components"

import { LanguagePickerItem } from "../LanguagePickerItem/LanguagePickerItem.parts"

import { useLanguagePickerModal } from "./hooks/useLanguagePickerModal"
import { FieldType } from "../../../types"

export const LanguagePickerModal = ({ type }: { type: FieldType }) => {
  const { supportedLanguages, isOpened,
    handleInputChange, onClose, setIsOpened, setLang, fetchTranslation } = useLanguagePickerModal()

  return (
    <>
      <Modal animationType="slide" visible={isOpened} onRequestClose={onClose}>
        <View style={{ flex: 1 }}>
          <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            margin: 10
          }}>
            <IconButton title="Close" onPress={onClose} />
            <TextInput style={{ borderWidth: 1, width: "80%", marginLeft: 15 }} onChangeText={handleInputChange} />
          </View>
          <FlatList data={supportedLanguages} renderItem={({ item }) =>
            <LanguagePickerItem onPress={() => {
              setLang({ type, lang: item })
              fetchTranslation()
              onClose()
            }} language={item} />} />
        </View>
      </Modal>
      <IconButton title="Languages" onPress={() => setIsOpened(!isOpened)} />
    </>
  )
}