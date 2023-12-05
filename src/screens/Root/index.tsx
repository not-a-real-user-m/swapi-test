import {useLoaderData, useNavigation} from 'react-router-dom';
import {IAllCharactersData} from '../../api/swapi/types';
import {DeferPage} from '../../primitives/DeferPage';
import {Content} from './components/Content';
import {Layout} from '../../components/Layout';
import {Stub} from './components/Stub';
import {Search} from '../../components/Search';

export default function RootScreen() {
  const {allCharactersData} = useLoaderData() as {allCharactersData: IAllCharactersData};

  const {state} = useNavigation();

  return (
    <Layout>
      <Search/>

      <DeferPage
        resolve={allCharactersData}
        loader={<Stub/>}
      >
        {state === 'loading' && <Stub/>}

        <Content/>
      </DeferPage>
    </Layout>
  );
}
