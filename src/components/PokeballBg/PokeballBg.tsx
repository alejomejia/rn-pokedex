import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

const PokeballBg = ({ ...rest }) => (
  <Svg width={232} height={233} fill="none" {...rest}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m158.096 118.245 72.218-19.446c8.988 57.539-26.649 113.807-84.168 129.296-57.52 15.488-116.593-15.277-137.712-69.549l72.217-19.447c9.604 15.072 28.201 22.872 46.372 17.98 18.17-4.893 30.336-20.977 31.073-38.834Zm-5.979-23.416 72.019-19.392C203.352 20.55 143.912-10.68 86.046 4.902c-57.867 15.582-93.587 72.437-84 130.338l72.018-19.393c.274-18.29 12.563-34.937 31.104-39.93 18.542-4.992 37.528 3.232 46.949 18.912Zm-29.192 47.032c14.008-3.772 22.305-18.185 18.533-32.192-3.772-14.008-18.185-22.306-32.192-18.534-14.008 3.772-22.305 18.185-18.533 32.193 3.771 14.007 18.185 22.305 32.192 18.533Z"
      fill="url(#a)"
      fillOpacity={0.1}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={86.045}
        y1={4.902}
        x2={150.459}
        y2={228.207}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default PokeballBg
