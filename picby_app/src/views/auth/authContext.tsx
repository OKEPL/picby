import React, {useState} from 'react';

export interface AuthProps {
  questionText1: string;
  questionText2: string;
  actionText1: string;
  actionText2: string;
  activeScreenNumber: number;
  setActiveScreenNumber: any;
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
  activeScreenNumber: 1,
  setActiveScreenNumber: null,
});

const AuthContextProvider: React.FC = ({children}) => {
  const [activeScreenNumber, setActiveScreenNumber] = useState(1);
  return (
    <AuthContext.Provider
      value={{
        questionText1,
        questionText2,
        actionText1,
        actionText2,
        activeScreenNumber,
        setActiveScreenNumber,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
