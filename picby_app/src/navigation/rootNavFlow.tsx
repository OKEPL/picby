import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import IntroductionSceneStack from '../views/intruduction/introductionScene';
import AuthStackNav from '../views/auth/AuthStackNav';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DashboardStackNav from '../views/dashboard/DashboardStack';

const Drawer = createDrawerNavigator({
  'Panel rodzica': DashboardStackNav,
  Notifications: IntroductionSceneStack,
});

const switchContainer = createSwitchNavigator(
  {
    Intro: IntroductionSceneStack,
    Auth: AuthStackNav,
    Dashboard: Drawer,
  },
  {
    initialRouteName: 'Intro',
  },
);

export default createAppContainer(switchContainer);
