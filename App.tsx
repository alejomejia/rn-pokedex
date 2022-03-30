import { Text } from 'react-native'

import HomeScreen from '@views/HomeScreen/HomeScreen'
import Container from '@components/Container/Container'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Container>
      <HomeScreen />
    </Container>
  )
}
