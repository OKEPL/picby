import IntroductionModel, {
  IntroStoreModel,
} from './introduction/model/introductionModel';
import ForgotPassModel, {
  ForgotPassStoreModel,
} from './auth/forgotPass/forgotPassModel';
import LoginModel, {LoginStoreModel} from './auth/login/loginModel';

export interface StoreModel {
  IntroductionModel: IntroStoreModel;
  ForgotPassModel: ForgotPassStoreModel;
  LoginModel: LoginStoreModel;
}

const model = {
  IntroductionModel,
  ForgotPassModel,
  LoginModel,
};

export default model;
