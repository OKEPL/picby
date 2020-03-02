import {gql} from 'apollo-boost';

export const REGISTER_QUERY = gql`
  mutation register($password: String!, $email: String!) {
    register(data: {password: $password, email: $email}) {
      id
      email
      catalogs {
        id
        name
      }
    }
  }
`;

export const CONFIRM_USER = gql`
  mutation confirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;

export const LOGIN_USER = gql`
  mutation login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      id
      email
      catalogs {
        id
        name
      }
    }
  }
`;
