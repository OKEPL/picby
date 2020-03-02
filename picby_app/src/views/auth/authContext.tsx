import React, {useState, Dispatch, SetStateAction} from 'react';
import {Keyboard} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import {REGISTER_QUERY, CONFIRM_USER} from './mutationsGQL';

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
    isUserConfirmedSuccess: boolean;
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
    handleConfirmUserAndHandleErrors: (userToken: string) => Promise<void>;
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
  >(true);

  const [areLoginButtonsDisabled, setAreLoginButtonsDisabled] = useState<
    boolean
  >(false);

  const [isUserConfirmedSuccess, setIsUserConfirmedSuccess] = useState<boolean>(
    false,
  );

  const setLoginScreenStateToDefault = () => {
    setIsPasswordBad(false);
    setIsServerNotResponding(false);
    setIsLoginSuccess(false);
    setAreLoginButtonsDisabled(false);
  };
  const loginGraphQLQuery = async () => {
    try {
      await fetch('https://pokeapi.co/api/v2/pokemon').then(response => {
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
      // setIsServerNotResponding(true);
      setIsPasswordBad(true);
    } finally {
      setIsLoginSuccess(false);
      setIsServerNotResponding(false);
    }
  };

  const [confirmUser] = useMutation(CONFIRM_USER, {
    onError: errorData => {
      const [extensions] = errorData.graphQLErrors;
      const errorCode = extensions?.extensions?.exception.code;
      console.log(errorCode);
      throw new Error(errorCode);
    },
    onCompleted: returnedData => {
      console.log(returnedData);
    },
  });

  const confirmUserRequest = async (userToken: string) => {
    console.log(userToken);
    try {
      await confirmUser({variables: {token: userToken}});
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleConfirmUserAndHandleErrors = async (userToken: string) => {
    try {
      setAreLoginButtonsDisabled(true);
      await setIsServerNotResponding(false);
      await confirmUserRequest(userToken);
      setIsUserConfirmedSuccess(true);
    } catch (error) {
      setIsServerNotResponding(true);
    } finally {
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
    isUserConfirmedSuccess,
    handleConfirmUserAndHandleErrors,
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

  const [registerUser, {error}] = useMutation(REGISTER_QUERY, {
    onError: errorData => {
      console.log(errorData);
      console.log(errorData.extraInfo);
      console.log(errorData.graphQLErrors);
      console.log(errorData.networkError?.message);

      const [extensions] = errorData.graphQLErrors;
      const errorCode = extensions.extensions?.exception.code;
      throw new Error(errorCode);
    },
    onCompleted: data => {
      console.log(data);
    },
  });
  console.log(error?.networkError);
  interface RegisterParametersTypes {
    email: String;
    password: String;
  }

  const registerGraphQLQuery = async ({
    email,
    password,
  }: RegisterParametersTypes) => {
    try {
      await registerUser({variables: {email, password}});
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleRegisterRequestAndErrors = async (
    email: string,
    password: string,
    resetForm: () => void,
  ) => {
    const lowerCaseEmail: string = email.toLowerCase();
    try {
      setAreRegisterButtonsDisabled(true);
      await setIsItServerError(false);
      await registerGraphQLQuery({email: lowerCaseEmail, password});
      await setIsRegisterSuccess(true);
      resetForm();
    } catch (error) {
      let errorCode = error.message;
      Number(errorCode) == 23505
        ? setIsEmailAlreadyTaken(true)
        : setIsItServerError(true);
    } finally {
      setIsRegisterSuccess(false);
      setIsItServerError(false);
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
