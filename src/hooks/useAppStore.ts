import { DEEPL_SECRET } from 'react-native-dotenv'
import create from 'zustand'

// ! The list of supported languages (as ISO codes) in Deepl API.
type SupportedLanguages =
  | 'EN'
  | 'BG'
  | 'CN'
  | 'DK'
  | 'EE'
  | 'FI'
  | 'FR'
  | 'GR'
  | 'ES'
  | 'JP'
  | 'LT'
  | 'LV'
  | 'NL'
  | 'DE'
  | 'PL'
  | 'PT'
  | 'RU'
  | 'RO'
  | 'SK'
  | 'SI'
  | 'SE'
  | 'HU'
  | 'IT'

type APIResponse = {
  translations: [{
    detected_source_language: SupportedLanguages,
    text: string
  }]
}

type APIError = {
  message: string
}

type State = {
  fromLang: SupportedLanguages | null,
  fromText: string,
  toLang: SupportedLanguages | null,
  toText: string,
  error: APIError | null
}


export const useAppStore = create<State>((set, get) => ({
  fromLang: null,
  fromText: '',
  toLang: null,
  toText: '',
  error: null,
  setFromLang: (lang: SupportedLanguages) => set({ fromLang: lang }),
  setFromText: (text: string) => set({ fromText: text }),
  setToLang: (lang: SupportedLanguages) => set({ toLang: lang }),
  setToText: (text: string) => set({ toText: text }),
  fetchTranslation: async () => {
    const fromText = get().fromText
    const fromLang = get().fromLang

    const authKey = `auth_key=${DEEPL_SECRET ?? ''}`
    const text = `text=${fromText}`
    const targetLang = fromLang ? `target_lang=${fromLang}` : ''

    try {
      const response = await fetch(`https://api-free.deepl.com/v2/translate?${authKey}&${text}&${targetLang}`)
      const body = await response.json()

      // TODO: insert validation here

      // ! set({})
    } catch (err) {
      // TODO: insert validation here

      // ! set({})
    }
  }
}))


