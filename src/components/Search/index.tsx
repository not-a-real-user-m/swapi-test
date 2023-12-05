import {ChangeEventHandler, useEffect, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Box, TextField} from '@mui/material';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const throttleTimeout = useRef<number>(0);

  const searchValue = searchParams.get('search') || '';

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;

    clearTimeout(throttleTimeout.current);
    throttleTimeout.current = window.setTimeout(() => {
      setSearchParams(value ? {search: value} : {});
    }, 500);
  };

  useEffect(() => () => {
    clearTimeout(throttleTimeout.current);
  }, []);

  return (
    <Box display="flex" justifyContent="center" mb={5}>
      <TextField
        key={searchValue}
        label="Search your hero"
        variant="standard"
        defaultValue={searchValue}
        onChange={handleInputChange}
      />
    </Box>
  );
};
