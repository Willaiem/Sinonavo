import { useState } from "react"
import { FlatList, Modal, TextInput, View, Text, TouchableOpacity, Image } from "react-native"
// import CountryPicker from "react-native-country-picker-modal"
// import { CountryCode } from "react-native-country-picker-modal/lib/types"

import { IconButton } from "@sinonavo/components"
import { styles } from "./Navbar.css"
import { FieldType, Language, LanguagesISO } from "../../types"
import { useAppStore } from "../../hooks/useAppStore"
import { SUPPORTED_LANGUAGES } from "../../global"


const FlagImage = ({ iso }: { iso?: LanguagesISO }) => {
  const getFlagSource = () =>
    iso
      ? Image.resolveAssetSource(require(`@sinonavo/countriesflags/${(iso ?? '').toLowerCase()}.png`))
      : Image.resolveAssetSource(require(`@sinonavo/countriesflags/noflag.png`))

  return <Image height={16} width={12} source={getFlagSource()} />
}

const CountryFlag = ({ language, onPress }: { language: Language, onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{language.name}</Text>
    <FlagImage />
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
      {/* below component have to be replaced */}
      {/* <CountryPicker
        countryCodes={supportedCountries}
        countryCode="PL"
        withCountryNameButton
        withFilter
      /> */}
      <IconButton title="🎤" />
      <IconButton title="📷" />
    </View>
  )
}
