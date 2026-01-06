import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PokemonList } from '../types/pokemonList';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonList, number>({ //Pokemon list by names
      query: (offset: number) => `pokemon?limit=6&offset=${offset}`,
    }),
    getPokemonListByName: builder.query<any, string>({ //Details of a single pokemon
      query: (name: string) => `pokemon/${name.toLowerCase()}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonListByNameQuery } = pokemonApi;