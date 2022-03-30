import styled from 'styled-components/native'
import { VariantTypes } from './Text'

import fonts from '@utils/styled/fonts'

interface STextProps {
  $color: string
  $variant: VariantTypes
}

export const Text = styled.Text<STextProps>`
  color: ${({ $color }) => $color};

  ${({ $variant }) => $variant === 'h1' && fonts.h1}
`
