import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import IntroductionSceneStack from '../views/intruduction/introductionScene';
import AuthStackNav from '../views/auth/AuthStackNav';

const switchContainer = createSwitchNavigator(
  {
    Intro: IntroductionSceneStack,
    Auth: AuthStackNav,
  },
  {
    initialRouteName: 'Intro',
  },
);

export default createAppContainer(switchContainer);
