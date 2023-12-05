import {useAsyncValue} from 'react-router-dom';
import {Alert, Grid, Snackbar, Typography} from '@mui/material';
import {ICharacter} from '../../../../api/swapi/types';
import {useCharacterForm} from './hooks/useCharacterForm';
import {FieldRow} from './components/FieldRow';

export const Content = () => {
  const character = useAsyncValue() as ICharacter;

  const {
    handleInputChange,
    handleMultilineInputChange,
    snackbarOpenState,
    closeSnackbar
  } = useCharacterForm(character);

  return (
    <Grid container spacing={2} mt={1}>
      <Grid item xs={12} textAlign={{xs: 'center', md: 'initial'}}>
        <Typography variant="h3" mt={1}>{character.name}</Typography>
      </Grid>

      <Grid
        item
        order={{md: 2}}
        xs={12}
        md={5}
        textAlign={{xs: 'center', md: 'right'}}
      >
        <img width={400} height={550} src={character._imageSrc} alt={character.name}/>
      </Grid>

      <Grid item order={{md: 1}} xs={12} md={6} mr={{md: 3}} justifyContent={{xs: 'center'}}>
        <FieldRow
          name="birth_year"
          label="Birth year"
          defaultValue={character.birth_year}
          onChange={handleInputChange}
        />

        <FieldRow
          name="eye_color"
          label="Eye color"
          defaultValue={character.eye_color}
          onChange={handleInputChange}
        />

        <FieldRow
          name="gender"
          label="Gender"
          defaultValue={character.gender}
          onChange={handleInputChange}
        />

        <FieldRow
          name="hair_color"
          label="Hair color"
          defaultValue={character.hair_color}
          onChange={handleInputChange}
        />

        <FieldRow
          name="height"
          label="Height"
          defaultValue={character.height}
          onChange={handleInputChange}
        />

        <FieldRow
          name="mass"
          label="Mass"
          defaultValue={character.mass}
          onChange={handleInputChange}
        />

        <FieldRow
          name="skin_color"
          label="Skin color"
          defaultValue={character.skin_color}
          onChange={handleInputChange}
        />

        <FieldRow
          name="homeworld"
          label="Homeworld"
          defaultValue={character.homeworld}
          onChange={handleInputChange}
        />

        <FieldRow
          multiline
          name="films"
          label="Films"
          defaultValue={character.films.join('\n')}
          onChange={handleMultilineInputChange}
        />

        <FieldRow
          multiline
          name="species"
          label="Species"
          defaultValue={character.species.join('\n')}
          onChange={handleMultilineInputChange}
        />

        <FieldRow
          multiline
          name="starships"
          label="Starships"
          defaultValue={character.starships.join('\n')}
          onChange={handleMultilineInputChange}
        />

        <FieldRow
          multiline
          name="vehicles"
          label="Vehicles"
          defaultValue={character.vehicles.join('\n')}
          onChange={handleMultilineInputChange}
        />

        <Snackbar open={snackbarOpenState} autoHideDuration={2000} onClose={closeSnackbar}>
          <Alert severity="success" sx={{width: '100%'}}>
            Saved!
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};
