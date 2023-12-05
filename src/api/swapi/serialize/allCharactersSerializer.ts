import {IAllCharactersResponse, IAllCharactersData} from '../types';
import {characterSerializer} from './characterSerializer';

export const allCharactersSerializer = (response: IAllCharactersResponse): IAllCharactersData => {
  return {
    ...response,
    results: response.results.map(characterSerializer),
  }
}
