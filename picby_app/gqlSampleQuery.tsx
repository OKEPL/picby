import {useQuery, useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

export const FIRST_QUERY = gql`
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

const registerQuery = ({email, password}: RegisterParametersTypes) => {
  registerUser({variables: {password, email}});
  console.log(email, password);
  console.log(registerUser);
  console.log(data);
  console.log(called);
  console.log(loading);
  console.log(error);
  console.log(client);
};

const queries = {
  sampleQueryDataToConsole,
  registerQuery,
};

export default queries;
