import { DripsyProvider, DripsyFinalTheme } from "dripsy"

export const ThemeProvider = ({ children, theme }: { children: React.ReactNode, theme: DripsyFinalTheme }) => (
  <DripsyProvider theme={theme}>{children}</DripsyProvider>
)