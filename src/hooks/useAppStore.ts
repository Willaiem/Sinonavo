import { DEEPL_SECRET } from 'react-native-dotenv'

import create from 'zustand'

import { APIResponseSchema } from '../schemas/APIResponseSchema'
import { AppStore, SupportedLanguages } from '../types'
import { isApiError } from '../validations/isApiError'

export const useAppStore = create<AppStore>((set, get) => ({
  fromLang: null,
  fromText: '',
  toLang: null,
  toText: '',
  error: null,
  setFromLang: (lang: SupportedLanguages) => set({ fromLang: lang }),
  setFromText: (text: string) => set({ fromText: text }),
  setToLang: (lang: SupportedLanguages) => set({ toLang: lang }),
  setToText: (text: string) => set({ toText: text }),
  swap: () => set({ fromLang: get().toLang, fromText: get().toText, toLang: get().fromLang, toText: '' }),
  fetchTranslation: async () => {
    const { fromText, toLang } = get()

    const authKey = `auth_key=${DEEPL_SECRET ?? ''}`
    const text = `text=${fromText}`
    const targetLang = toLang ? `&target_lang=${toLang}` : ''

    try {
      const response = await fetch(`https://api-free.deepl.com/v2/translate?${authKey}&${text}${targetLang}`, {
        method: 'POST'
      })

      console.log(JSON.stringify(response))

      const { translations: [{ detected_source_language, text: translatedText }] } = APIResponseSchema.parse(await response.json())

      set({ toLang: detected_source_language, toText: translatedText })
    } catch (err) {
      set({ error: isApiError(err) ? err : new Error(JSON.stringify(err)) })
    }
  }
}))