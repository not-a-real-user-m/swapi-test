import {IAllCharactersResponse, ICharacter} from './types';
import {allCharactersSerializer} from './serialize/allCharactersSerializer';
import {characterSerializer} from './serialize/characterSerializer';
import {jsonParse} from '../../utils/jsonParse';

export class SWApi {
  public static async getAllCharacters(params: {page?: string, search?: string}, signal?: AbortSignal): Promise<IAllCharactersResponse> {
    const requestUrl = ['https://swapi.dev/api/people/', params && new URLSearchParams(params).toString()].filter(Boolean).join('?');
    const response = await fetch(requestUrl, {
      signal,
    });

    const data = await response.json();

    return allCharactersSerializer(data);
  }

  public static async getCharacter(id: string, signal?: AbortSignal) {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`, {
      signal,
    });

    if (response.status !== 200) {
      throw response;
    }

    const rawData = await response.json();
    let data = characterSerializer(rawData);

    if (typeof localStorage !== 'undefined') {
      const localData = jsonParse<Partial<ICharacter>>(localStorage.getItem(SWApi.getCharacterLSKey(id)));

      if (localData) {
        data = {...data, ...localData};
      }
    }

    return data;
  }

  public static editCharacter(id: string, data: Partial<ICharacter>) {
    if (typeof localStorage !== 'undefined') {
      const localData = jsonParse<Partial<ICharacter>>(localStorage.getItem(SWApi.getCharacterLSKey(id))) || {};
      localStorage.setItem(SWApi.getCharacterLSKey(id), JSON.stringify({...localData, ...data}));
    }
  }

  private static getCharacterLSKey(id: string) {
    return `ch_${id}`;
  }
}
