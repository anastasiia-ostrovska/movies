import { baseAPI, ENDPOINTS, INVALIDATION_TAGS, METHODS } from '@/shared/api';
import type {
  DeleteMovieResponse,
  MovieResponse,
  MoviesListResponse,
  MoviesParams,
  NewMovie,
} from '../model/types';

const movieAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    // Queries
    moviesList: builder.query<MoviesListResponse, MoviesParams>({
      query: params => {
        const filteredParams = Object.fromEntries(
          Object.entries(params).filter(
            ([, value]) => value !== '' && value !== null && value !== undefined
          )
        );

        return {
          url: ENDPOINTS.MOVIES,
          params: filteredParams,
        };
      },
      providesTags: [INVALIDATION_TAGS.MOVIES_LIST],
    }),

    movieById: builder.query<MovieResponse, number>({
      query: id => ({
        url: `${ENDPOINTS.MOVIES}/${id}`,
      }),
      providesTags: [INVALIDATION_TAGS.MOVIE],
    }),

    // Mutations
    createMovie: builder.mutation<MovieResponse, NewMovie>({
      query: newMovieData => ({
        method: METHODS.POST,
        url: ENDPOINTS.MOVIES,
        body: newMovieData,
      }),
      invalidatesTags: [INVALIDATION_TAGS.MOVIES_LIST],
    }),

    deleteMovie: builder.mutation<DeleteMovieResponse, number>({
      query: id => ({
        method: METHODS.DELETE,
        url: `${ENDPOINTS.MOVIES}/${id}`,
      }),
      invalidatesTags: [INVALIDATION_TAGS.MOVIES_LIST],
    }),

    addMoviesFile: builder.mutation<DeleteMovieResponse, FormData>({
      query: movies => ({
        method: METHODS.POST,
        url: ENDPOINTS.MOVIES_IMPORT,
        body: movies,
      }),
      invalidatesTags: [INVALIDATION_TAGS.MOVIES_LIST],
    }),
  }),
});

export const { useMoviesListQuery, useMovieByIdQuery } = movieAPI;
export const { useCreateMovieMutation, useDeleteMovieMutation, useAddMoviesFileMutation } =
  movieAPI;
