import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import { CyclesProvider } from "../contexts/CyclesContext"
import { GlobalStyle } from "../css/global"
import { AppContainer } from "../css/pages/App"
import { theme } from "../css/themes/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppContainer>
        <Header />
        <CyclesProvider>
          <Component {...pageProps} />
        </CyclesProvider>
      </AppContainer>
    </ThemeProvider>
  )
}
