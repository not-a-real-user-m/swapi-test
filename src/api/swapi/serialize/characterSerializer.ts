import {ICharacter, IRawCharacter} from '../types';

export const characterSerializer = (character: IRawCharacter): ICharacter => {
  const id = character.url.match(/\d+/g)?.[0] || '';
  return {
    ...character,
    _id: id,
    _imageSrc: `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`,
  };
};
