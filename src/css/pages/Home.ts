import styled from "styled-components"

export const Container = styled.div`
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  user-select: none;

  form {
    align-items: center;
    display: flex;
    gap: 0.5rem;

    label,
    span {
      color: ${({ theme }) => theme.COLORS.olive[50]};
      font-size: ${({ theme }) => theme.FONT_SIZE.lg};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.semibold};
    }

    > div {
      align-items: center;
      background: ${({ theme }) => theme.COLORS.olive[700]};
      display: flex;
      height: 100%;
      justify-content: space-between;

      button {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.olive[100]};
        height: 100%;
        line-height: 0;
        outline: none;
        padding: 0.5rem;

        &:disabled {
          cursor: not-allowed;
        }

        &:focus {
          box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.olive[100]};
          position: relative;
          z-index: 10;
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.3;
        }

        &:hover:not(:disabled):hover {
          background: ${({ theme }) => theme.COLORS.olive[400]};
          transition: background-color 0.1s;
        }
      }
    }

    input {
      padding: 0 0.5rem;
      border: none;
      outline: none;
      color: ${({ theme }) => theme.COLORS.olive[50]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.semibold};
      background: ${({ theme }) => theme.COLORS.olive[700]};
      height: 2.5rem;

      &:disabled {
        cursor: not-allowed;
      }

      &:focus {
        box-shadow: 0 0 0 3px ${({ theme }) => theme.COLORS.olive[200]};
      }

      &:focus::-webkit-input-placeholder {
        color: transparent;
        transition: 0.1s;
      }

      &[type="number"] {
        pointer-events: none;
        text-align: center;
        width: 40px;

        &:focus {
          box-shadow: none;
        }

        &::-webkit-inner-spin-button {
          appearance: none;
        }
      }
    }
  }
`

export const Countdown = styled.section`
  align-items: center;
  width: 100%;
  justify-content: space-between;
  display: flex;
  font-family: ${({ theme }) => theme.FONT_FAMILY.mono};
  font-size: ${({ theme }) => theme.FONT_SIZE.exl};
  gap: 0.875rem;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.small};

  span {
    background: ${({ theme }) => theme.COLORS.olive[600]};
    padding: 1rem 1.5rem;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 0.5rem 1rem;
  width: 4rem;
`

const Button = styled.button`
  align-items: center;
  border: none;
  display: flex;
  font-size: ${({ theme }) => theme.FONT_SIZE.lg};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  gap: 0.5rem;
  height: 3rem;
  justify-content: center;
  outline: none;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`

export const ButtonStartCountdown = styled(Button)`
  background: ${({ theme }) => theme.COLORS.olive[100]};
  color: ${({ theme }) => theme.COLORS.olive[50]};

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.COLORS.olive[50]};
  }

  &:hover:not(:disabled):hover {
    background: ${({ theme }) => theme.COLORS.olive[200]};
    transition: background-color 0.2s;
  }
`

export const ButtonInterruptCountdown = styled(Button)`
  background: ${({ theme }) => theme.COLORS.tomato[400]};
  color: ${({ theme }) => theme.COLORS.tomato[100]};

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.COLORS.tomato[200]};
  }

  &:hover:not(:disabled):hover {
    background: ${({ theme }) => theme.COLORS.tomato[500]};
    transition: background-color 0.2s;
  }
`
