import React, {useState, Dispatch, SetStateAction} from 'react';
import {Keyboard} from 'react-native';

export interface AuthProps {
  registerServerResponseStatus: number | undefined;
  loginServerResponseStatus?: number;
  sendRegstrationRequest: (values: Values) => void;
  loadingData: boolean;
  setRegisterServerResponseStatus: (
    value: React.SetStateAction<number | undefined>,
  ) => void;
  dismissKeyboard: () => void;
}
export interface Values {
  password: string;
  email: string;
  passwordRepeat: string;
}
export const AuthContext = React.createContext<AuthProps>({} as AuthProps);

const AuthContextProvider: React.FC = ({children}) => {
  const [
    registerServerResponseStatus,
    setRegisterServerResponseStatus,
  ] = useState<number | undefined>();

  const [loginServerResponseStatus, setLoginServerResponseStatus] = useState<
    number
  >();

  const [loadingData, setLoadingData] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const sendRegstrationRequest = (values: Values) => {
    setLoadingData(true);
    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
          console.log(response);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`${response.status}`);
          }
        })
        .then(data => {
          setRegisterServerResponseStatus(200);
          setLoadingData(false);
        })
        .catch(error => {
          console.log(typeof error.message);
          setRegisterServerResponseStatus(Number(error.message));
          setLoadingData(false);
        });
    }, 3000);
  };

  return (
    <AuthContext.Provider
      value={{
        registerServerResponseStatus,
        loginServerResponseStatus,
        sendRegstrationRequest,
        setRegisterServerResponseStatus,
        loadingData,
        dismissKeyboard,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
