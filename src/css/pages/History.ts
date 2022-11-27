import styled, { css } from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3rem;
  user-select: none;

  h1 {
    color: ${({ theme }) => theme.COLORS.olive[50]};
    font-size: ${({ theme }) => theme.FONT_SIZE.xxl};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  overflow: auto;

  table {
    border-collapse: collapse;
    min-width: 900px;
    width: 100%;
    width: 100%;

    th {
      background: ${({ theme }) => theme.COLORS.olive[600]};
      color: ${({ theme }) => theme.COLORS.olive[50]};
      font-size: ${({ theme }) => theme.FONT_SIZE.sm};
      line-height: ${({ theme }) => theme.LINE_HEIGHT.base};
      padding: 0.875rem 0.5rem;
      text-align: left;
    }

    td {
      background: ${({ theme }) => theme.COLORS.olive[700]};
      border-top: 4px solid ${({ theme }) => theme.COLORS.olive[800]};
      line-height: ${({ theme }) => theme.LINE_HEIGHT.base};
      padding: 0.5rem;
    }
  }
`

const STATUS_COLORS = {
  progress: "#443592",
  interrupted: "#822025",
  concluded: "#1b543a",
}

interface StatusType {
  status: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusType>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${({ status, theme }) =>
    status === "progress" &&
    css`
      svg {
        color: ${theme.COLORS.violet[200]};
      }
    `}

  ${({ status, theme }) =>
    status === "concluded" &&
    css`
      svg {
        color: ${theme.COLORS.green[200]};
      }
    `}

  ${({ status, theme }) =>
    status === "interrupted" &&
    css`
      svg {
        color: ${theme.COLORS.red[200]};
      }
    `}
`
