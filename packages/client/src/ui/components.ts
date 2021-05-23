import styled from '@emotion/styled'

export const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray90};
`

export const ListTitle = styled.h3`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray80};
`

export const ColumnTitle = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray60};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: 150%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: 150%;
  height: 40px;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray50};
  }
`

export const Button = styled.button`
  height: 40px;
  padding: 0 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: 150%;
  font-weight: 500;
  cursor: pointer;
`

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.brand50};
  color: ${({ theme }) => theme.colors.white};
  border: none;
`

export const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray70};
`

export const ActionButton = styled(SecondaryButton)`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 ${({ theme }) => theme.spacing.sm}px;
  box-shadow: 0px 1px 2px 0px rgba(45, 55, 72, 0.08);
`

export const ActionButtonText = styled.span`
  margin-left: ${({ theme }) => theme.spacing.sm}px;
`
