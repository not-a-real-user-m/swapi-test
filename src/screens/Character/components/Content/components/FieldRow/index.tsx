import {ChangeEventHandler, FC, ReactNode} from 'react';
import {Box, TextField} from '@mui/material';
import {ICharacter} from '../../../../../../api/swapi/types';

interface FieldRowProps {
  name: keyof ICharacter;
  label: ReactNode;
  defaultValue: string|string[];
  multiline?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FieldRow: FC<FieldRowProps> = ({name, label, defaultValue, multiline, onChange}) => {
  return (
    <Box mb={3}>
      <TextField
        fullWidth
        variant="outlined"
        name={name}
        label={label}
        defaultValue={defaultValue}
        onChange={onChange}
        multiline={multiline}
      />
    </Box>
  );
};
