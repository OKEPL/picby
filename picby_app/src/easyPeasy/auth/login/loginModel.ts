import {Action, action} from 'easy-peasy';

export interface LoginStoreModel {
  isUserConfirmedSuccess: boolean;
  isPasswordBad: boolean;
  isServerNotResponding: boolean;
  isLoginSuccess: boolean;
  isUserLoggedInFirstTime: boolean;
  // setIsPasswordBad: Dispatch<SetStateAction<boolean>>;
  areLoginButtonsDisabled: boolean;
  // setAreLoginButtonsDisabled: Dispatch<SetStateAction<boolean>>;
  // handleLoginRequestAndErrors: (
  //   email: string,
  //   password: string,
  //   resetForm: () => void,
  // ) => Promise<void>;
  // setLoginScreenStateToDefault: () => void;
  // handleConfirmUserAndHandleErrors: (userToken: string) => Promise<void>;
  isUserNotConfirmed: boolean;
  setIsUserConfirmedSuccess: Action<LoginStoreModel, boolean>;
  setIsPasswordBad: Action<LoginStoreModel, boolean>;
  setIsServerNotResponding: Action<LoginStoreModel, boolean>;
  setIsLoginSuccess: Action<LoginStoreModel, boolean>;
  setIsUserLoggedInFirstTime: Action<LoginStoreModel, boolean>;
  setAreLoginButtonsDisabled: Action<LoginStoreModel, boolean>;
  setIsUserNotConfirmed: Action<LoginStoreModel, boolean>;
}
const LoginModel: LoginStoreModel = {
  //   state   //
  isUserConfirmedSuccess: false,
  isPasswordBad: false,
  isServerNotResponding: false,
  isLoginSuccess: false,
  isUserLoggedInFirstTime: false,
  areLoginButtonsDisabled: false,
  isUserNotConfirmed: false,
  //   actions //
  setIsUserConfirmedSuccess: action((state, payload) => {
    state.isUserConfirmedSuccess = payload;
  }),
  setIsPasswordBad: action((state, payload) => {
    state.isPasswordBad = payload;
  }),
  setIsServerNotResponding: action((state, payload) => {
    state.isServerNotResponding = payload;
  }),
  setIsLoginSuccess: action((state, payload) => {
    state.isLoginSuccess = payload;
  }),
  setIsUserLoggedInFirstTime: action((state, payload) => {
    state.isUserLoggedInFirstTime = payload;
  }),
  setAreLoginButtonsDisabled: action((state, payload) => {
    state.areLoginButtonsDisabled = payload;
  }),
  setIsUserNotConfirmed: action((state, payload) => {
    state.isUserNotConfirmed = payload;
  }),
};

export default LoginModel;
