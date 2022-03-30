import IconSearch from '@components/Icons/IconSearch'

import theme from '@utils/styled/theme'
import * as S from './Search.styles'

export interface SearchProps {}

const Search = ({}: SearchProps) => (
  <S.SearchWrapper>
    <S.IconWrapper>
      <IconSearch />
    </S.IconWrapper>
    <S.Input
      placeholder="Search Pokemon"
      placeholderTextColor={theme.colors.boulder}
      autoCapitalize="none"
    />
  </S.SearchWrapper>
)

export default Search
