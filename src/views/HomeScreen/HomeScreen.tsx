import { useState, useEffect } from 'react'

import Hamburger from '@components/Hamburger/Hamburger'
import PokeballBg from '@components/PokeballBg/PokeballBg'
import Text from '@components/Text/Text'
import Search from '@components/Search/Search'
import PokemonGrid from '@components/PokemonGrid/PokemonGrid'

import { getAllPokemons } from '@services/api'

import * as S from './HomeScreen.styles'

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getAllPokemons().then((data) => setPokemons(data.results))
  }, [])

  return (
    <S.HomeScreenWrapper>
      <Hamburger />
      <S.PokeballBgWrapper>
        <PokeballBg />
      </S.PokeballBgWrapper>
      <Text variant="h1">What Pokemon are you looking for?</Text>
      <Search />

      {pokemons.length === 0 ? (
        <Text variant="h1">Loading...</Text>
      ) : (
        <PokemonGrid list={pokemons} />
      )}
    </S.HomeScreenWrapper>
  )
}

export default HomeScreen
