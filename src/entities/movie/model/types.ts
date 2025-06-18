// Get Movie types
import type { FailureResponse } from '@/shared/api';

export interface Movie {
  id: number;
  title: string;
  year: number;
  format: string;
  createdAt: string;
  updatedAt: string;
}

export interface MovieItem {
  id: number;
  title: string;
  year: string;
  format: string;
}

interface Actor {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface FakeMovie {
  id: string;
  title: string;
  year: string;
  format: string;
  actors: Actor[];
}

export interface MovieWithActors extends Movie {
  actors: Actor[];
}

export interface MovieByIdResponse {
  data: MovieWithActors;
  status: 1;
}

export interface MoviesListSuccessResponse {
  data: Movie[];
  meta: {
    total: number;
  };
  status: 1;
}

export type MoviesListResponse = MoviesListSuccessResponse | FailureResponse;
export type MovieResponse = MovieWithActors | FailureResponse;

// List search parameters
export type SortParam = 'id' | 'title' | 'year';
export type OrderParam = 'ASC' | 'DESC';

export interface MoviesParams {
  actor: string;
  search: string;
  title: string;
  limit: number;
  offset: number;
  sort: SortParam;
  order: OrderParam;
}

// Create movie types
export interface NewMovie {
  title: string;
  year: number;
  format: string;
  actors: string;
}

export interface NewMovieFormatted {
  title: string;
  year: number;
  format: string;
  actors: string[];
}

interface AddMovieSuccessResponse {
  data: MovieByIdResponse;
  status: 1;
}

export type AddMovieResponse = AddMovieSuccessResponse | FailureResponse;

// Delete movie types
export type DeleteMovieResponse = { status: 1 } | FailureResponse;

// Add movie file types
export interface MoviesFile {
  movies: FileList | null;
}

export type AddMoviesFileResponse = { status: 1 } | FailureResponse;
