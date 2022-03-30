import Svg, { Path } from 'react-native-svg'

import theme from '@utils/styled/theme'
import { IconProps } from '@utils/types/components'

const IconMenu = ({ stroke = theme.colors.white, ...rest }: IconProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    stroke={stroke}
    strokeWidth={2}
    {...rest}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </Svg>
)

export default IconMenu
