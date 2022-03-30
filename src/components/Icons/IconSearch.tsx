import Svg, { Path } from 'react-native-svg'

import theme from '@utils/styled/theme'
import { IconProps } from '@utils/types/components'

const IconSearch = ({ stroke = theme.colors.white, ...rest }: IconProps) => (
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
      d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
    />
  </Svg>
)

export default IconSearch
