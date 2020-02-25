import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const FIRST_QUERY = gql`
  {
    hello
  }
`;

const sampleQueryDataToConsole = () => {
  const {loading, error, data} = useQuery(FIRST_QUERY);

  console.log(loading);
  console.log('loading ^^');
  console.log(error);
  console.log('error ^^');
  console.log(data);
  console.log('data ^^');
};

export default sampleQueryDataToConsole;
