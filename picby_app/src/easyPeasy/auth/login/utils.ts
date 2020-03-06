import {userLoginErrorCodes} from '../../../staticData/staticData';
import {useStoreActions} from '../../hooks';
import {RegisterParametersTypes} from '../../../views/auth/authContext';
import {LOGIN_USER, CONFIRM_USER} from '../../../apollo/mutations/mutations';
import {useMutation} from '@apollo/react-hooks';

interface handleLoginRequest {
  email: string;
  password: string;
  resetForm: () => void;
}

const {badEmailOrPasswordCode, userNotConfirmedCode} = userLoginErrorCodes;

export const handleLoginRequestAndErrors = async ({
  email,
  password,
  resetForm,
}: handleLoginRequest) => {
  const {
    setIsUserNotConfirmed,
    setIsServerNotResponding,
    setIsLoginSuccess,
    setIsPasswordBad,
    setAreLoginButtonsDisabled,
  } = useStoreActions(actions => actions.LoginModel);

  try {
    setAreLoginButtonsDisabled(true);
    await setIsServerNotResponding(false);
    await loginGraphQLQuery({email, password});
    setIsLoginSuccess(true);
    resetForm();
  } catch (error) {
    let errorCode = error.message;
    console.log(errorCode);
    if (errorCode == badEmailOrPasswordCode) {
      setIsPasswordBad(true);
    } else if (errorCode == userNotConfirmedCode) {
      console.log('asd');
      setIsUserNotConfirmed(true);
    } else setIsServerNotResponding(true);
  } finally {
    setIsLoginSuccess(false);
    setIsServerNotResponding(false);
    setIsUserNotConfirmed(false);
  }
};

export const loginGraphQLQuery = async ({
  email,
  password,
}: RegisterParametersTypes) => {
  const [loginUser] = useMutation(LOGIN_USER, {
    onError: errorData => {
      const [extensions] = errorData.graphQLErrors;
      console.log(extensions);
      const errorString = extensions.message;
      console.log(errorString);
      throw new Error(errorString);
    },
    onCompleted: data => {
      console.log(data.login.id);
      console.log('asd');
    },
  });
  const emailLowerCase = email.toLowerCase();

  try {
    await loginUser({variables: {email: emailLowerCase, password}});
  } catch (error) {
    throw new Error(error.message);
  }
};

export const confirmUserRequest = async (userToken: string) => {
  const [confirmUser] = useMutation(CONFIRM_USER, {
    onError: errorData => {
      const [extensions] = errorData.graphQLErrors;
      const errorCode = extensions?.extensions?.exception.code;
      throw new Error(errorCode);
    },
    onCompleted: returnedData => {
      console.log(returnedData);
    },
  });
  try {
    await confirmUser({variables: {token: userToken}});
  } catch (error) {
    throw new Error(error);
  }
};

export const handleConfirmUserAndHandleErrors = async (userToken: string) => {
  const {
    setIsServerNotResponding,
    setAreLoginButtonsDisabled,
    setIsUserConfirmedSuccess,
  } = useStoreActions(actions => actions.LoginModel);
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
