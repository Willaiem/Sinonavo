import { makeTheme } from 'dripsy'

export const appTheme = makeTheme({
  colors: {
    $text: '#000',
    $background: '#fff',
    $primary: 'tomato',
  },
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 28,
    $6: 32,
  },
  types: {
    reactNativeTypesOnly: true,
    strictVariants: true
  }
})

export type AppTheme = typeof appTheme

declare module 'dripsy' {
  interface DripsyCustomTheme extends AppTheme { }
}