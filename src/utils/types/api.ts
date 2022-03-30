export interface IPokemonList {
  name: string
  url: string
}

export type TSprite = {
  front_default: string
}

export type TType = {
  name: string
}

export type TStat = {
  base_stat: number
  stat: {
    name: string
  }
}

export interface IPokemon {
  name: string
  height: number
  weight: number
  sprites: TSprite
  types: TType[]
  stats: TStat[]
}
