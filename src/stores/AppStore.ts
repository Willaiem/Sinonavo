import { Alert } from 'react-native'
import { DEEPL_SECRET } from 'react-native-dotenv'
import create from 'zustand'
// ! TODO: może to wywołuje bugi?
import 'abortcontroller-polyfill'

import { FieldType, Language } from '@sinonavo/types'
import { APIResponseSchema } from '../schemas/APIResponseSchema'
import { createError } from '../utils/createError'
import { SUPPORTED_LANGUAGES } from '@sinonavo/global'

type AppStore = {
  langs: { from: Language | null, to: Language | null }
  setLang: ({ type, lang }: { type: FieldType, lang: Language }) => void,
  texts: { from: string, to: string },
  setText: ({ type, text }: { type: FieldType, text: string }) => void,
  focusedInput: FieldType | null,
  setFocusedInput: (type: FieldType) => void,
  status: "idle" | "pending" | "success" | "error"
  error: Error | null,
  swap: () => void,
  showAlertError: () => void,
  fetchTranslation: () => void
}

const RequestController = new window.AbortController()

export const useAppStore = create<AppStore>((set, get) => ({
  texts: { from: '', to: '' },
  setText: ({ type, text }) => {
    set({ texts: { ...get().texts, [type]: text } })
  },
  langs: { from: null, to: SUPPORTED_LANGUAGES.EN },
  setLang: ({ type, lang }) => {
    set({ langs: { ...get().langs, [type]: lang } })
  },
  focusedInput: null,
  setFocusedInput: (type) => {
    set({ focusedInput: type })
  },
  status: 'idle',
  error: null,
  swap: () => {
    const { texts, langs } = get()

    if (texts.from.trim().length === 0) return

    set({ langs: { from: langs.to, to: langs.from }, texts: { from: texts.to, to: '' } })
    get().fetchTranslation()
  },
  showAlertError: () => {
    const { fetchTranslation } = get()

    Alert.alert(
      'Something went wrong...',
      `Unable to get the translation. Please try again.`,
      [
        {
          text: 'Try again',
          onPress: () => fetchTranslation()
        },
        {
          text: 'Cancel',
          style: 'cancel',
        }
      ],
      {
        cancelable: false
      }
    )
  },
  fetchTranslation: async () => {
    const { texts, langs, status, showAlertError } = get()

    const isFromTextEmpty = texts.from.trim().length === 0
    if (isFromTextEmpty) return

    // ! TODO: tworzy jakieś bugi związane z requestem.
    // ! albo w ogóle blokuje wszystkie requesty i wywala błąd (Alert się odpala)
    // ! albo jak nie ma błędu to pole "to" się "czyści"
    if (status === 'pending') {
      RequestController.abort('The request was aborted.')
    }

    const authKey = `auth_key=${DEEPL_SECRET ?? ''}`
    const text = `text=${texts.from}`
    const targetLang = langs.to ? `&target_lang=${langs.to.iso}` : ''

    try {
      set({ status: 'pending' })

      const response = await fetch(`https://api-free.deepl.com/v2/translate?${authKey}&${text}${targetLang}`, {
        method: 'POST',
        signal: RequestController.signal
      })

      console.log('response', JSON.stringify(response))

      const { translations: [{ detected_source_language, text: translatedText }] }
        = APIResponseSchema.parse(await response.json())

      set({
        status: 'success',
        langs: { from: SUPPORTED_LANGUAGES[detected_source_language], to: langs.to },
        texts: { from: texts.from, to: translatedText }
      })
    } catch (err) {
      console.log('error', JSON.stringify(err))
      console.log('createError', createError(err))

      set({ status: 'error', error: createError(err) })

      showAlertError()
    }
  }
}))