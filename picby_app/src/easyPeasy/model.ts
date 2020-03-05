import IntroductionModel, {IntroStoreModel} from './introduction/model/model';

export interface StoreModel {
  IntroductionModel: IntroStoreModel;
}

const model = {
  IntroductionModel,
};

export default model;
