import {ChangeEvent, useCallback} from 'react';
import {useAsyncValue, useNavigation, useSearchParams} from 'react-router-dom';
import {Box, Pagination} from '@mui/material';
import {IAllCharactersData} from '../../../../api/swapi/types';
import {CharactersList} from '../../../../components/CharactersList';

export const Content = () => {
  const {count, results} = useAsyncValue() as IAllCharactersData;

  const {state} = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get('page');

  const handleChangePage = useCallback((e: ChangeEvent<unknown>, page: number) => {
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <>
      {state !== 'loading' && <CharactersList characters={results}/>}

      {count > 10 && (
        <Box display="flex" justifyContent="center" mt={6}>
          <Pagination
            page={currentPage ? parseInt(currentPage, 10) : 1}
            count={Math.ceil(count / 10)}
            onChange={handleChangePage}
          />
        </Box>
      )}
    </>
  );
};
