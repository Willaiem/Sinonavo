import { useState } from "react"
import { FlatList, Modal, TextInput, View, Text, TouchableOpacity, Image } from "react-native"

import { IconButton } from "@sinonavo/components"
import { styles } from "./Navbar.css"
import { FieldType, Language, LanguagesISO } from "../../types"
import { useAppStore } from "../../stores/AppStore"
import { SUPPORTED_LANGUAGES } from "../../global"

import countriesFlagsLinks from '../../links/countriesflags-link'

const FlagImage = ({ iso }: { iso?: LanguagesISO }) => {
  const getFlagSource = () =>
    iso
      ? Image.resolveAssetSource(countriesFlagsLinks[iso])
      : Image.resolveAssetSource(countriesFlagsLinks.NOFLAG)

  return <Image height={16} width={12} source={getFlagSource()} />
}

const CountryFlag = ({ language, onPress }: { language: Language, onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{language.name}</Text>
    <FlagImage iso={language.iso} />
  </TouchableOpacity>
)

// TODO: change name to CountryPicker after migration
const CountryPicker = ({ type }: { type: FieldType }) => {
  const lang = useAppStore(state => state.langs)[type]
  const setLang = useAppStore(state => state.setLang)

  const [isOpened, setIsOpened] = useState(false)

  const onClose = () => setIsOpened(!isOpened)

  return (
    <View>
      <Modal animationType="slide" visible={isOpened} onRequestClose={onClose}>
        <View style={{ flex: 1 }}>
          <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            margin: 10
          }}>
            <IconButton title="Close" onPress={onClose} />
            <TextInput style={{ borderWidth: 1, width: "80%", marginLeft: 15 }} />
          </View>
          <FlatList data={SUPPORTED_LANGUAGES} renderItem={({ item }) =>
            <CountryFlag onPress={() => {
              setLang({ type, lang: item })
              onClose()
            }} language={item} />} />
        </View>
      </Modal>
      <IconButton title="Languages" onPress={() => setIsOpened(!isOpened)} />
      <Text>{lang?.name ?? 'Automatic'}</Text>
      <FlagImage iso={lang?.iso} />
    </View>
  )
}

export const Navbar = ({ type }: { type: FieldType }) => {
  return (
    <View style={styles.container}>
      <CountryPicker type={type} />
      <IconButton title="🎤" />
      <IconButton title="📷" />
    </View>
  )
}
