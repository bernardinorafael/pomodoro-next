import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../css/global"
import { theme } from "../css/themes/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
