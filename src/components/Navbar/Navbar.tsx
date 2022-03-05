import { useState } from "react"
import { FlatList, Modal, TextInput, View } from "react-native"
import CountryPicker from "react-native-country-picker-modal"
import { CountryCode } from "react-native-country-picker-modal/lib/types"

import { IconButton } from "@sinonavo/components"
import { styles } from "./Navbar.css"
import { SupportedLanguages } from "../../types"

type SupportedCountries = CountryCode[]

const supportedCountries: SupportedCountries = [
  "US",
  "BG",
  "CN",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "GR",
  "ES",
  "JP",
  "LT",
  "LV",
  "NL",
  "DE",
  "PL",
  "PT",
  "RU",
  "RO",
  "SK",
  "SI",
  "SE",
  "HU",
  "IT",
]

// TODO: change name to CountryPicker after migration
const Picker = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [country, setCountry] = useState<CountryCode | null>(null)

  return (
    <View>
      {/* Example from React Native documentation: */}
      <Modal animationType="slide" visible={isOpened}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <IconButton title="Close" onPress={() => setIsOpened(!isOpened)} />
            <TextInput style={{ borderWidth: 1 }} />
          </View>

          {/* <FlatList /> */}
          {/* to render the list of supported countries */}
        </View>
      </Modal>
      <IconButton title="Languages" onPress={() => setIsOpened(!isOpened)} />
    </View>
  )
}

export const Navbar = () => {
  return (
    <View style={styles.container}>
      <Picker />
      {/* below component have to be replaced */}
      <CountryPicker
        countryCodes={supportedCountries}
        countryCode="PL"
        withCountryNameButton
        withFilter
      />
      <IconButton title="🎤" />
      <IconButton title="📷" />
    </View>
  )
}
