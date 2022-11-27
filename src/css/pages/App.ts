import styled from "styled-components"

export const AppContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.olive[800]};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  max-width: 64rem;
  padding: 1rem;
  width: 100%;
`
