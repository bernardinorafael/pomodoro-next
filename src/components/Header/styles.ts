import styled from "styled-components"

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  nav {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }
`

interface ActiveLinkType {
  asPath: string
}

export const ActiveLink = styled.a<ActiveLinkType>`
  align-items: center;
  background: ${({ asPath, href, theme }) =>
    asPath === href ? theme.COLORS.olive[700] : "transparent"};
  color: ${({ asPath, href, theme }) =>
    asPath === href ? theme.COLORS.olive[50] : theme.COLORS.olive[100]};
  display: flex;
  gap: 0.5rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.semibold};
  justify-content: center;
  line-height: 0;
  padding: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.COLORS.olive[700]};
    color: ${({ theme }) => theme.COLORS.olive[50]};
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  }
`
