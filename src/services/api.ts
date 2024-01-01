import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../pages/Home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/eplay"
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => "destaque"
    }),
    getOnSaleGame: builder.query<Game[], void>({
      query: () => "promocoes"
    }),
    getSoonGame: builder.query<Game[], void>({
      query: () => "em-breve"
    }),
    getActionGame: builder.query<Game[], void>({
      query: () => "acao"
    }),
    getSportsGame: builder.query<Game[], void>({
      query: () => "esportes"
    }),
    getSimulationGame: builder.query<Game[], void>({
      query: () => "simulacao"
    }),
    getFightingGame: builder.query<Game[], void>({
      query: () => "luta"
    }),
    getRpgGame: builder.query<Game[], void>({
      query: () => "rpg"
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
});

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleGameQuery,
  useGetSoonGameQuery,
  useGetActionGameQuery,
  useGetSportsGameQuery,
  useGetSimulationGameQuery,
  useGetFightingGameQuery,
  useGetRpgGameQuery,
  useGetGameQuery
} = api;

export default api;
