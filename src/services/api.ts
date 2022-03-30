import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/'

export const getAllPokemons = () => {
  return axios.get(`${BASE_URL}/pokemon`).then((response) => response.data)
}

export const getPokemon = (url: string) => {
  return axios.get(url).then((response) => response.data)
}
