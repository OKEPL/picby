import {Action, action} from 'easy-peasy';

export interface ForgotPassStoreModel {
  isEmailNotFound: boolean;
  isEmailSendSuccess: boolean;
  areForgotPassButtonsDisabled: boolean;
  isItForgotPassServerError: boolean;
  //   handleForgotPasswordRequestAndErrors: (
  //     email: string,
  //     resetForm: () => void,
  //   ) => Promise<void>;
  //   setForgotScreenStateToDefault: () => void;
  setIsEmailNotFound: Action<ForgotPassStoreModel, boolean>;
  setIsEmailSendSuccess: Action<ForgotPassStoreModel, boolean>;
  setAreForgotPassButtonsDisabled: Action<ForgotPassStoreModel, boolean>;
  setIsItForgotPassServerError: Action<ForgotPassStoreModel, boolean>;
}
const ForgotPassModel: ForgotPassStoreModel = {
  isEmailNotFound: false,
  isEmailSendSuccess: false,
  areForgotPassButtonsDisabled: false,
  isItForgotPassServerError: false,
  setIsEmailNotFound: action((state, payload) => {
    state.isEmailNotFound = payload;
  }),
  setIsEmailSendSuccess: action((state, payload) => {
    state.isEmailSendSuccess = payload;
  }),
  setAreForgotPassButtonsDisabled: action((state, payload) => {
    state.areForgotPassButtonsDisabled = payload;
  }),
  setIsItForgotPassServerError: action((state, payload) => {
    state.isItForgotPassServerError = payload;
  }),
};

export default ForgotPassModel;
