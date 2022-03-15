import { View, Text, ScrollView } from "react-native"
import { TextArea, Navbar } from "@sinonavo/components"


import { FieldType } from "../../types";
import { MAX_LENGTH } from "../../global";
import { useAppStore } from "../../stores/AppStore";
import { useTranslationSection } from "./hooks/useTranslationSection";


export const TranslationSection = ({ type }: { type: FieldType }) => {
  const { shouldBeVisible, inputProps } = useTranslationSection(type)

  const status = useAppStore(state => state.status)
  const loadingIndicator = status === 'pending' ? <Text>INSERT THE PULSING LOADING BAR HERE!!!</Text> : null

  return shouldBeVisible ? (
    <View>
      <ScrollView>
        <View>
          <Navbar type={type} />
          <Text>{type}:</Text>
          {loadingIndicator}
          <View>
            <TextArea
              {...inputProps}
              maxLength={MAX_LENGTH}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  ) : null
}
