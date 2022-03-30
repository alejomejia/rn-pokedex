import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import theme from '@utils/styled/theme'

import * as S from './Container.styles'

export interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <ThemeProvider theme={theme}>
    <S.ContainerWrapper>
      <StatusBar style="light" />
      <SafeAreaView>{children}</SafeAreaView>
    </S.ContainerWrapper>
  </ThemeProvider>
)

export default Container
