import { useState, useEffect } from 'react'

import theme from '@utils/styled/theme'
import { getPokemon } from '@services/api'

import * as S from './PokemonCard.styles'

export interface PokemonCardProps {
  url: string
}

const PokemonCard = ({ url }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<any>({})

  useEffect(() => {
    getPokemon(url).then((data) => setPokemon(data))
  }, [])

  const handlePress = () => alert(pokemon.name)

  return (
    <>
      {Object.keys(pokemon).length !== 0 && (
        <S.PokemonCardWrapper>
          <S.GradientBackground
            colors={['transparent', theme.colors.thunder]}
            locations={[0, 0.8]}
          />
          <S.Svg
            width="100"
            height="100"
            uri={pokemon.sprites.other.dream_world.front_default}
          />
          <S.NameWrapper>
            <S.Name>{pokemon.name}</S.Name>
          </S.NameWrapper>
        </S.PokemonCardWrapper>
      )}
    </>
  )
}

export default PokemonCard
