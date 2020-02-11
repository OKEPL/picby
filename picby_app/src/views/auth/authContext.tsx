import React, {useState} from 'react';

export interface AuthProps {
  registerHeaderTextTwo: string;
  loginHeaderTextTwo: string;
  registerHeaderTextOne: string;
  loginHeaderTextOne: string;
  registerServerResponseStatus: boolean | null;
}
const registerHeaderTextTwo = 'Masz już konto? Doskonale!';
const loginHeaderTextTwo = 'Nie masz jeszcze konta?';
const registerHeaderTextOne = 'Zaloguj się';
const loginHeaderTextOne = 'Zarejestruj się';

export const AuthContext = React.createContext<AuthProps>({
  registerHeaderTextTwo,
  loginHeaderTextTwo,
  registerHeaderTextOne,
  loginHeaderTextOne,
  registerServerResponseStatus: null,
});

const AuthContextProvider: React.FC = ({children}) => {
  const [
    registerServerResponseStatus,
    setRegisterServerResponseStatus,
  ] = useState(null);

  const queryRegisterUser = () => {};

  return (
    <AuthContext.Provider
      value={{
        registerHeaderTextTwo,
        loginHeaderTextTwo,
        registerHeaderTextOne,
        loginHeaderTextOne,
        registerServerResponseStatus,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
