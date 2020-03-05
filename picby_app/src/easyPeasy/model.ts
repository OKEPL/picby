import IntroductionModel, {
  IntroStoreModel,
} from './introduction/model/introductionModel';
import ForgotPassModel, {
  ForgotPassStoreModel,
} from './auth/forgotPass/forgotPassModel';

export interface StoreModel {
  IntroductionModel: IntroStoreModel;
  ForgotPassModel: ForgotPassStoreModel;
}

const model = {
  IntroductionModel,
  ForgotPassModel,
};

export default model;
