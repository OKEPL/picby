import React, {useState} from 'react';

export interface AuthProps {
  registerHeaderTextTwo: string;
  loginHeaderTextTwo: string;
  registerHeaderTextOne: string;
  loginHeaderTextOne: string;
  registerServerResponseStatus: boolean | null;
  loginServerResponseStatus: boolean | null;
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
  loginServerResponseStatus: false,
});

const AuthContextProvider: React.FC = ({children}) => {
  const [
    registerServerResponseStatus,
    setRegisterServerResponseStatus,
  ] = useState(true);
  const [loginServerResponseStatus, setLoginServerResponseStatus] = useState(
    true,
  );

  const queryRegisterUser = () => {};
  return (
    <AuthContext.Provider
      value={{
        registerHeaderTextTwo,
        loginHeaderTextTwo,
        registerHeaderTextOne,
        loginHeaderTextOne,
        registerServerResponseStatus,
        loginServerResponseStatus,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
