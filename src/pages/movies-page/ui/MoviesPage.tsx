import { ModalController } from '@/app/modal-controller';
import { MovieCardList } from '@/widgets/movie-card-list';
import { SortMoviesMenu } from '@/features/sort-movies-menu';
import { AddMoviesButton } from '@/features/add-movies-button';
import { SearchMoviesInput } from '@/features/search-movies-input';
import MoviesPageLayout from './MoviesPageLayout';

const MoviesPage = () => {
  return (
    <MoviesPageLayout
      searchInput={<SearchMoviesInput />}
      sortButton={<SortMoviesMenu />}
      moviesList={<MovieCardList />}
      addMoviesButton={<AddMoviesButton />}
      modalController={<ModalController />}
    />
  );
};

export default MoviesPage;
