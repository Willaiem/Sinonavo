import { DEEPL_SECRET } from 'react-native-dotenv'

import create from 'zustand'
import { SUPPORTED_LANGUAGES } from '../global'

import { APIResponseSchema } from '../schemas/APIResponseSchema'
import { AppStore } from '../types'
import { isApiError } from '../validations/isApiError'

export const useAppStore = create<AppStore>((set, get) => ({
  texts: { from: '', to: '' },
  langs: { from: null, to: null },
  setLang: ({ type, lang }) => {
    set({ langs: { ...get().langs, [type]: lang } })
  },
  setText: ({ type, text }) => {
    set({ texts: { ...get().texts, [type]: text } })
  },
  error: null,
  swap: () => {
    const { texts, langs } = get()

    set({ langs: { from: langs.to, to: langs.from }, texts: { from: texts.to, to: '' } })
  },
  fetchTranslation: async () => {
    const { texts, langs } = get()

    const authKey = `auth_key=${DEEPL_SECRET ?? ''}`
    const text = `text=${texts.from}`
    const targetLang = langs.to ? `&target_lang=${langs.to}` : ''

    try {
      const response = await fetch(`https://api-free.deepl.com/v2/translate?${authKey}&${text}${targetLang}`, {
        method: 'POST'
      })

      console.log(JSON.stringify(response))

      const { translations: [{ detected_source_language, text: translatedText }] } = APIResponseSchema.parse(await response.json())

      const foundSourceLanguage = SUPPORTED_LANGUAGES.find(({ iso }) =>
        iso === detected_source_language) ?? null

      set({
        langs: { from: langs.from, to: foundSourceLanguage },
        texts: { from: texts.from, to: translatedText }
      })
    } catch (err) {
      set({ error: isApiError(err) ? err : new Error(JSON.stringify(err)) })
    }
  }
}))