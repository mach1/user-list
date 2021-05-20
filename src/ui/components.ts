import styled from '@emotion/styled'

export const SectionTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.primaryText};
`

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: 150%;
  height: 40px;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`

export const Button = styled.button`
  height: 40px;
  padding: 0 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: 150%;
  font-weight: 500;
  cursor: pointer;
`

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`
