import { useState } from "react"

import { useAppStore } from "../../../../stores/AppStore"
import { SUPPORTED_LANGUAGES } from "../../../../global"

export const useLanguagePickerModal = () => {
  const setLang = useAppStore(state => state.setLang)
  const fetchTranslation = useAppStore(state => state.fetchTranslation)

  const [isOpened, setIsOpened] = useState(false)
  const [text, setText] = useState('')

  const handleInputChange = (inputText: string) => {
    setText(inputText.trim())
  }

  const supportedLanguages = text.length > 0
    ? Object.values(SUPPORTED_LANGUAGES)
      .filter(({ name }: { name: string }) =>
        name.toLowerCase().includes(text.toLowerCase()))

    : Object.values(SUPPORTED_LANGUAGES)


  const onClose = () => {
    setIsOpened(!isOpened)
    setText('')
  }

  return { supportedLanguages, isOpened, setIsOpened, setLang, handleInputChange, onClose, fetchTranslation }
}