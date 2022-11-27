import Link from "next/link"
import { useRouter } from "next/router"
import * as Icon from "phosphor-react"
import { ActiveLink, Container } from "./styles"

export default function Header() {
  const { asPath } = useRouter()

  return (
    <Container>
      <nav>
        <Link href="/" title="Cronômetro" legacyBehavior passHref>
          <ActiveLink asPath={asPath}>
            <Icon.Timer size={24} weight="duotone" />
            Cronômetro
          </ActiveLink>
        </Link>

        <Link href="/history" title="Histórico" legacyBehavior passHref>
          <ActiveLink asPath={asPath}>
            <Icon.Scroll size={24} weight="duotone" />
            Histórico
          </ActiveLink>
        </Link>
      </nav>
    </Container>
  )
}
