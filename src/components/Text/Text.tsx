import theme from '@utils/styled/theme'

import * as S from './Text.styles'

export type VariantTypes = 'h1' | 'h2' | 'h3' | 'body'

export interface TextProps {
  color?: string
  variant: VariantTypes
  children: React.ReactText
}

const Text = ({ color = theme.colors.white, variant, children }: TextProps) => (
  <S.Text $color={color} $variant={variant}>
    {children}
  </S.Text>
)

export default Text
