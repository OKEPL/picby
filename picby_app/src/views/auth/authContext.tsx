import React, {useState} from 'react';

export interface AuthProps {
  questionText1: string;
  questionText2: string;
  actionText1: string;
  actionText2: string;
}
const questionText1 = 'Masz już konto? Doskonale!';
const questionText2 = 'Nie masz jeszcze konta?';
const actionText1 = 'Zaloguj się';
const actionText2 = 'Zarejestruj się';

export const AuthContext = React.createContext<AuthProps>({
  questionText1,
  questionText2,
  actionText1,
  actionText2,
});

const AuthContextProvider: React.FC = ({children}) => {
  return (
    <AuthContext.Provider
      value={{
        questionText1,
        questionText2,
        actionText1,
        actionText2,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
