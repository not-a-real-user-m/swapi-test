import {ChangeEventHandler, SyntheticEvent, useCallback, useEffect, useRef, useState} from 'react';
import {SWApi} from '../../../../../api/swapi';
import {ICharacter} from '../../../../../api/swapi/types';

export const useCharacterForm = (character: ICharacter) => {
  const throttleTimeout = useRef(0);

  const [snackbarOpenState, setSnackbarOpenState] = useState(false);

  const openSnackbar = useCallback(() => {
    setSnackbarOpenState(true);
  }, []);

  const closeSnackbar = useCallback((event?: SyntheticEvent | Event, reason?: string) => {
    if (reason !== 'clickaway') {
      setSnackbarOpenState(false);
    }
  }, []);

  const changeField = useCallback((name: keyof ICharacter, value: ICharacter[keyof ICharacter]) => {
    clearTimeout(throttleTimeout.current);
    throttleTimeout.current = window.setTimeout(() => {
      SWApi.editCharacter(character._id, {
        [name]: value,
      });

      openSnackbar();
    }, 500);
  }, [character._id]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const fieldName = e.target.name as keyof ICharacter;
    const value = e.target.value;

    changeField(fieldName, value);
  }, [changeField]);


  const handleMultilineInputChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const fieldName = e.target.name as keyof ICharacter;
    const value = e.target.value.split('\n');

    changeField(fieldName, value);
  }, [changeField]);

  useEffect(() => () => {
    clearTimeout(throttleTimeout.current);
  })

  return {handleInputChange, handleMultilineInputChange, snackbarOpenState, closeSnackbar}
};
