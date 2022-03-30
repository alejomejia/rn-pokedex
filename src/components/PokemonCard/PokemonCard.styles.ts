import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { SvgUri } from 'react-native-svg'

import fonts from '@utils/styled/fonts'

export const PokemonCardWrapper = styled.View`
  display: flex;
  align-items: center;
  width: 47.5%;
  max-height: 180px;
  margin-bottom: 48px;
  padding: 16px 0 10px;
`

export const GradientBackground = styled(LinearGradient)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 24px;
`

export const Svg = styled(SvgUri)`
  margin-bottom: 12px;
  margin-top: -40px;
`

export const NameWrapper = styled.View`
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.codGray};
  border-radius: 40px;
  min-width: 85%;
`

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  text-align: center;

  ${fonts.h2}
`
