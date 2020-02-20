import React, {useState, Dispatch, SetStateAction} from 'react';
import {Keyboard} from 'react-native';
import {debug} from 'react-native-reanimated';

export interface AuthProps {
  registerServerResponseStatus: number | undefined;
  sendRegstrationRequest: (values: Values) => void;
  loadingData: boolean;
  setRegisterServerResponseStatus: (
    value: React.SetStateAction<number | undefined>,
  ) => void;
  dismissKeyboard: () => void;
  loginContextData: {
    isPasswordBad: boolean;
    isServerNotResponding: boolean;
    isLoginSuccess: boolean;
    isUserLoggedInFirstTime: boolean;
    setIsPasswordBad: Dispatch<SetStateAction<boolean>>;
    areButtonsDisabled: boolean;
    setAreButtonsDisabled: Dispatch<SetStateAction<boolean>>;
    sendCredentialsToApi: (email: string, password: string) => Promise<void>;
  };
}

export interface Values {
  password: string;
  email: string;
  passwordRepeat: string;
}

export const AuthContext = React.createContext<AuthProps>({} as AuthProps);

const AuthContextProvider: React.FC = ({children}) => {
  //////// beginning of login logic /////////////
  const [isPasswordBad, setIsPasswordBad] = useState<boolean>(false);
  const [isServerNotResponding, setIsServerNotResponding] = useState<boolean>(
    false,
  );
  const [isLoginSuccess, setIsLoginSuccess] = useState<boolean>(false);
  const [isUserLoggedInFirstTime, setIsUserLoggedInFirstTime] = useState<
    boolean
  >(false);

  const [areButtonsDisabled, setAreButtonsDisabled] = useState<boolean>(false);

  const loginQraphQLQuery = async () => {
    try {
      await fetch('https://pokeapi.co/api/v2/pokemon/asdasd').then(response => {
        if (response.status > 400) {
          throw new Error();
          //add else if with different status to pass to catch
        }
        return response;
      });
    } catch (error) {
      throw new Error('2');
    }
  };

  const sendCredentialsToApi = async (email: string, password: string) => {
    try {
      setAreButtonsDisabled(true);
      await setIsServerNotResponding(false);
      await loginQraphQLQuery();
      setIsLoginSuccess(true);
    } catch (error) {
      // console.log(error.message);
      // setIsServerNotResponding(true);
      setIsPasswordBad(true);
    } finally {
      console.log('request zakonczony');
      setIsLoginSuccess(false);
      setIsServerNotResponding(false);
    }
  };

  const loginContextData = {
    isPasswordBad,
    isServerNotResponding,
    isLoginSuccess,
    isUserLoggedInFirstTime,
    setIsPasswordBad,
    areButtonsDisabled,
    setAreButtonsDisabled,
    sendCredentialsToApi,
  };

  ////////////  end of login logic //////////////
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const [loadingData, setLoadingData] = useState(false);
  const [
    registerServerResponseStatus,
    setRegisterServerResponseStatus,
  ] = useState<number | undefined>();
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
        sendRegstrationRequest,
        setRegisterServerResponseStatus,
        loadingData,
        dismissKeyboard,
        loginContextData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
