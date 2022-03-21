import { useMemo, useState } from "react"

import { useAppStore } from "@sinonavo/stores/AppStore"
import { SUPPORTED_LANGUAGES } from "@sinonavo/global"
import { FieldType } from "@sinonavo/types"

export const useLanguageModal = (type: FieldType) => {
  const lang = useAppStore(state => state.langs[type])
  const setLang = useAppStore(state => state.setLang)
  const fetchTranslation = useAppStore(state => state.fetchTranslation)

  const [isOpened, setIsOpened] = useState(false)
  const [text, setText] = useState('')

  const handleInputChange = (inputText: string) => {
    setText(inputText.trim())
  }

  const supportedLanguages = useMemo(() => Object.values(SUPPORTED_LANGUAGES), [])

  const filteredLanguages = text.length > 0
    ? supportedLanguages
      .filter(({ name }) =>
        name.toLowerCase().includes(text.toLowerCase()))
    : supportedLanguages


  const onClose = () => {
    setIsOpened(!isOpened)
    setText('')
  }

  return { filteredLanguages, isOpened, setIsOpened, lang, setLang, handleInputChange, onClose, fetchTranslation }
}