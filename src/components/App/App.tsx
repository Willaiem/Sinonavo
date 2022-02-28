import { StatusBar } from "expo-status-bar"
import {
  View,
  Text,
  ScrollView,
  Button,
  ButtonProps,
  TouchableOpacity,
} from "react-native"
import CountryPicker from "react-native-country-picker-modal"
import { CountryCode } from "react-native-country-picker-modal/lib/types"

import { TextArea } from "../TextArea/TextArea"
import { styles } from "./App.css"

type SupportedCountries = CountryCode[]

const IconButton = ({ title, onPress }: ButtonProps) => (
  <TouchableOpacity accessibilityRole="button" onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
)

export const App = () => {
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

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 10 }}>
        <View>
          <CountryPicker
            countryCodes={supportedCountries}
            countryCode="PL"
            withCountryNameButton
            withFilter
            visible
          />
          <IconButton title="🎤" />
          <IconButton title="📷" />
        </View>
        <Text>From:</Text>
        <TextArea accessibilityLabel="" accessibilityHint="" />
      </ScrollView>
      <ScrollView style={{ marginTop: 10 }}>
        <CountryPicker countryCode="US" withCountryNameButton visible />
        <Text>To:</Text>
        <TextArea accessibilityLabel="" accessibilityHint="" editable={false} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}
