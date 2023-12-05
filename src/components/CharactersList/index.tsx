import {FC} from 'react';
import {Grid, Typography} from '@mui/material';
import {CharacterCard} from './components/CharacterCard';
import {ICharacter} from '../../api/swapi/types';

interface CharactersListProps {
  characters: ICharacter[];
}

export const CharactersList: FC<CharactersListProps> = ({characters}) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {characters.map((character) => (
        <Grid key={character.name} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <CharacterCard data={character}/>
        </Grid>
      ))}

      {!characters.length && (
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3">Characters not found!</Typography>
        </Grid>
      )}
    </Grid>
  )
}
