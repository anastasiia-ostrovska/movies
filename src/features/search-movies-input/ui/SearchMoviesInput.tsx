import { useEffect } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from '@/shared/model';
import { useDebouncedInput } from '@/shared/lib';
import { setSearch } from '@/entities/movie';

const SearchMoviesInput = () => {
  const { inputValue, debouncedInputValue, handleChange } = useDebouncedInput();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isNotOneLetter = debouncedInputValue.length !== 1;

    if (isNotOneLetter) {
      dispatch(setSearch(debouncedInputValue));
    }
  }, [debouncedInputValue, dispatch]);

  return (
    <TextField
      id="serch-movies"
      size="small"
      placeholder="Actor or Title"
      aria-label="Search movies by actor or title"
      value={inputValue}
      onChange={handleChange}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="disabled" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchMoviesInput;
