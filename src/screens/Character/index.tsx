import {Link as NavigationLink, useLoaderData} from 'react-router-dom';
import {Box, Link, Typography} from '@mui/material';
import {ArrowBack} from '@mui/icons-material';
import {ICharacter} from '../../api/swapi/types';
import {DeferPage} from '../../primitives/DeferPage';
import {Layout} from '../../components/Layout';
import {Stub} from './components/Stub';
import {Content} from './components/Content';
import {Error} from './components/Error';

export default function CharacterScreen() {
  const {characterData} = useLoaderData() as {characterData: ICharacter};

  return (
    <Layout>
      <Box display="flex" justifyContent="center">
        <Box maxWidth="md" flex={1}>

          <Link to="/" component={NavigationLink} underline="none">
            <Box display="flex" flexDirection="row" alignItems="center">
              <ArrowBack fontSize="small"/>
              <Box ml={1}>
                <Typography variant="body1" >
                  Back to list
                </Typography>
              </Box>
            </Box>
          </Link>

          <DeferPage
            resolve={characterData}
            loader={<Stub/>}
            errorFallback={<Error/>}
          >
            <Content/>
          </DeferPage>
        </Box>
      </Box>
    </Layout>
  );
}
