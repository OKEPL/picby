import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import AboutScreen from './AboutScreen';
import Header from '../../navigation/Header';
import React from 'react';

type nav = NavigationStackProp;

const screens = {
  About: {
    screen: AboutScreen,
    navigationOptions: ({navigation}: {navigation: nav}) => {
      return {
        headerTitle: () => (
          <Header title="O APLIKACJI " navigation={navigation} />
        ),
      };
    },
  },
};
const AboutStackNav = createStackNavigator(screens);

export default AboutStackNav;
