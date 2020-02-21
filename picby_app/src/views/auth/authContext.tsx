import React, {useState, Dispatch, SetStateAction} from 'react';
import {Keyboard} from 'react-native';

export interface AuthProps {
  registerContextData: {
    isEmailAlreadyTaken: boolean;
    setIsEmailAlreadyTaken: Dispatch<SetStateAction<boolean>>;
    isItServerError: boolean;
    isRegisterSuccess: boolean;
    handleRegisterRequestAndErrors: (
      email: string,
      password: string,
      resetForm: () => void,
    ) => Promise<void>;
    setAreRegisterButtonsDisabled: Dispatch<SetStateAction<boolean>>;
    areRegisterButtonsDisabled: boolean;
    setRegisterScreenStateToDefault: () => void;
  };
  dismissKeyboard: () => void;
  loginContextData: {
    isPasswordBad: boolean;
    isServerNotResponding: boolean;
    isLoginSuccess: boolean;
    isUserLoggedInFirstTime: boolean;
    setIsPasswordBad: Dispatch<SetStateAction<boolean>>;
    areLoginButtonsDisabled: boolean;
    setAreLoginButtonsDisabled: Dispatch<SetStateAction<boolean>>;
    handleLoginRequestAndErrors: (
      email: string,
      password: string,
      resetForm: () => void,
    ) => Promise<void>;
    setLoginScreenStateToDefault: () => void;
  };
  forgotPassContextData: {
    isEmailNotFound: boolean;
    isEmailSendSuccess: boolean;
    areForgotPassButtonsDisabled: boolean;
    setAreForgotPassButtonsDisabled: Dispatch<SetStateAction<boolean>>;
    setIsEmailNotFound: Dispatch<SetStateAction<boolean>>;
    isItForgotPassServerError: boolean;
    handleForgotPasswordRequestAndErrors: (
      email: string,
      resetForm: () => void,
    ) => Promise<void>;
    setForgotScreenStateToDefault: () => void;
  };
}

export interface Values {
  password: string;
  email: string;
  passwordRepeat: string;
}

export const AuthContext = React.createContext<AuthProps>({} as AuthProps);

const AuthContextProvider: React.FC = ({children}) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  //////// beginning of login logic /////////////////////////////////////////////////
  const [isPasswordBad, setIsPasswordBad] = useState<boolean>(false);
  const [isServerNotResponding, setIsServerNotResponding] = useState<boolean>(
    false,
  );
  const [isLoginSuccess, setIsLoginSuccess] = useState<boolean>(false);
  const [isUserLoggedInFirstTime, setIsUserLoggedInFirstTime] = useState<
    boolean
  >(false);

  const [areLoginButtonsDisabled, setAreLoginButtonsDisabled] = useState<
    boolean
  >(false);

  const setLoginScreenStateToDefault = () => {
    setIsPasswordBad(false);
    setIsServerNotResponding(false);
    setIsLoginSuccess(false);
    setIsUserLoggedInFirstTime(false);
    ///////// rethink that line ^^^^^ //////////////
    setAreLoginButtonsDisabled(false);
  };
  const loginGraphQLQuery = async () => {
    try {
      await fetch('https://pokeapi.co/api/v2/pokemon/asdasd').then(response => {
        if (response.status > 400) {
          throw new Error();
          //add else if with different status to pass error to catch
        }
        return response;
      });
    } catch (error) {
      console.log(error.message);
      throw new Error('2');
    }
  };

  const handleLoginRequestAndErrors = async (
    email: string,
    password: string,
    resetForm: () => void,
  ) => {
    try {
      setAreLoginButtonsDisabled(true);
      await setIsServerNotResponding(false);
      await loginGraphQLQuery();
      setIsLoginSuccess(true);
      resetForm();
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
    areLoginButtonsDisabled,
    setAreLoginButtonsDisabled,
    handleLoginRequestAndErrors,
    setLoginScreenStateToDefault,
  };

  /////////////////////  end of login logic /////////////////////////////////////////

  ////////////////////////// start of register logic //////////////////////////////////////

  const [isEmailAlreadyTaken, setIsEmailAlreadyTaken] = useState<boolean>(
    false,
  );
  const [isItServerError, setIsItServerError] = useState<boolean>(false);
  const [areRegisterButtonsDisabled, setAreRegisterButtonsDisabled] = useState<
    boolean
  >(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean>(false);

  const setRegisterScreenStateToDefault = () => {
    setIsEmailAlreadyTaken(false);
    setIsItServerError(false);
    setAreRegisterButtonsDisabled(false);
    setIsRegisterSuccess(false);
  };

  const registerGraphQLQuery = async () => {
    try {
      //to have good response delete /"random string" after /pokemon/
      await fetch('https://pokeapi.co/api/v2/pokemon/asdasdasd').then(
        response => {
          if (response.status > 400) {
            throw new Error();
            //add else if with different status to pass error to catch
          }
          return response;
        },
      );
    } catch (error) {
      console.log(error.message);
      throw new Error('2');
    }
  };

  const handleRegisterRequestAndErrors = async (
    email: string,
    password: string,
    resetForm: () => void,
  ) => {
    try {
      setAreRegisterButtonsDisabled(true);
      await setIsItServerError(false);
      await registerGraphQLQuery();
      await setIsRegisterSuccess(true);
      resetForm();
    } catch (error) {
      // console.log(error.message);
      // setIsItServerError(true);
      setIsEmailAlreadyTaken(true);
    } finally {
      setIsRegisterSuccess(false);
      setIsItServerError(false);
      console.log('register request finished');
    }
  };

  const registerContextData = {
    isEmailAlreadyTaken,
    isRegisterSuccess,
    isItServerError,
    handleRegisterRequestAndErrors,
    setAreRegisterButtonsDisabled,
    areRegisterButtonsDisabled,
    setIsEmailAlreadyTaken,
    setRegisterScreenStateToDefault,
  };

  //////////////////////// end of reigster logic ////////////////////////////////////////////

  /////////////////////// start of forgot password logic////////////////////////
  const [isEmailNotFound, setIsEmailNotFound] = useState<boolean>(false);
  const [isItForgotPassServerError, setIsItForgotPassServerError] = useState<
    boolean
  >(false);
  const [
    areForgotPassButtonsDisabled,
    setAreForgotPassButtonsDisabled,
  ] = useState<boolean>(false);

  const [isEmailSendSuccess, setIsEmailSendSuccess] = useState<boolean>(false);

  const setForgotScreenStateToDefault = () => {
    setIsEmailNotFound(false);
    setIsEmailSendSuccess(false);
    setIsItForgotPassServerError(false);
    setAreForgotPassButtonsDisabled(false);
  };

  const forgotPassGraphQLQuery = async () => {
    try {
      //to have good response delete /"random string" after /pokemon/
      await fetch('https://pokeapi.co/api/v2/pokemon/asdasd').then(response => {
        if (response.status > 400) {
          throw new Error();
          //add else if with different status to pass error to catch
        }
        return response;
      });
    } catch (error) {
      console.log(error.message);
      throw new Error('2');
    }
  };

  const handleForgotPasswordRequestAndErrors = async (
    email: string,
    resetForm: () => void,
  ) => {
    try {
      setAreForgotPassButtonsDisabled(true);
      await setIsItForgotPassServerError(false);
      await forgotPassGraphQLQuery();
      await setIsEmailSendSuccess(true);
      resetForm();
    } catch (error) {
      console.log('błąd');
      setIsEmailNotFound(true);
      // setIsItForgotPassServerError(true);
    } finally {
      // setIsEmailNotFound(false);
      setIsItForgotPassServerError(false);
      setIsEmailSendSuccess(false);
      console.log('forgot pass request finished');
    }
  };

  const forgotPassContextData = {
    isEmailNotFound,
    areForgotPassButtonsDisabled,
    setAreForgotPassButtonsDisabled,
    setIsEmailNotFound,
    isEmailSendSuccess,
    handleForgotPasswordRequestAndErrors,
    isItForgotPassServerError,
    setForgotScreenStateToDefault,
  };
  ////////////////////////////// end of forgot password logic /////////////////////
  return (
    <AuthContext.Provider
      value={{
        registerContextData,
        dismissKeyboard,
        loginContextData,
        forgotPassContextData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
