import styled from 'styled-components/native'
import fonts from '@utils/styled/fonts'

export const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin: 40px 0 20px 0;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.thunder};
  border-radius: 40px;
`

export const IconWrapper = styled.View`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.white};
  padding-right: 30px;

  ${fonts.search}
`
