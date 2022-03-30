import PokemonCard from '@components/PokemonCard/PokemonCard'

import { IPokemonList } from '@utils/types/api'

import * as S from './PokemonGrid.styles'

export interface PokemonGridProps {
  list: IPokemonList[]
}

const PokemonGrid = ({ list }: PokemonGridProps) => {
  const renderItem = ({ item }: any) => <PokemonCard url={item.url} />

  return (
    <S.PokemonGridWrapper>
      <S.FlatList
        data={list}
        keyExtractor={(item: any) => item.name}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingTop: 28 }}
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
      />
    </S.PokemonGridWrapper>
  )
}

export default PokemonGrid
