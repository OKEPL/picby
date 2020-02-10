import React, {useState} from 'react';

export interface AuthProps {
  registerHeaderTextTwo: string;
  loginHeaderTextTwo: string;
  registerHeaderTextOne: string;
  loginHeaderTextOne: string;
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
});

const AuthContextProvider: React.FC = ({children}) => {
  return (
    <AuthContext.Provider
      value={{
        registerHeaderTextTwo,
        loginHeaderTextTwo,
        registerHeaderTextOne,
        loginHeaderTextOne,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
