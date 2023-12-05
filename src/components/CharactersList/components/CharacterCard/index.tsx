import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import {ICharacter} from '../../../../api/swapi/types';

interface CharacterCardProps {
  data: ICharacter;
}

export const CharacterCard: FC<CharacterCardProps> = ({data}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${data._id}`);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea onClick={handleClick}>
        <Box width={290} height={400}>
          <CardMedia
            component="img"
            height={400}
            image={data._imageSrc}
            alt={data.name}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
