import { registerRootComponent } from "expo"

import { App } from "@sinonavo/components"
import { ThemeProvider } from "./themes/ThemeProvider"
import { appTheme } from "./themes/AppTheme"

const Root = () => <ThemeProvider theme={appTheme}><App /></ThemeProvider>

export default registerRootComponent(Root)
