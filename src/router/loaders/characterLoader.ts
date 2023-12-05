import {defer, LoaderFunction} from 'react-router-dom';
import {SWApi} from '../../api/swapi';

export const characterLoader: LoaderFunction = async ({params, request}) => {
  if (params.id) {
    return defer({
      characterData: SWApi.getCharacter(params.id, request.signal),
    });
  }

  throw new Response('', {
    status: 404,
    statusText: 'Not Found',
  });
};
