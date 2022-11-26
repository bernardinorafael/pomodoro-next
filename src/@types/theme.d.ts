import "styled-components"
import { theme } from "../css/themes/theme"

type ThemeType = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
