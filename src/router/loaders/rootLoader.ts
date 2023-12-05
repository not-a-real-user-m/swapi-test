import {defer, LoaderFunction} from 'react-router-dom';
import {SWApi} from '../../api/swapi';

export const rootLoader: LoaderFunction = async ({request}) => {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || '1';
  const search = url.searchParams.get('search');

  return defer({
    allCharactersData: SWApi.getAllCharacters({
      page,
      ...(search ? {search} : {}),
    }, request.signal)
  });
};
