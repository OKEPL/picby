import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import PrivacyScreen from './PrivacyScreen';
import Header from '../../navigation/Header';
import React from 'react';

type nav = NavigationStackProp;

const screens = {
  Welcome: {
    screen: PrivacyScreen,
    navigationOptions: ({navigation}: {navigation: nav}) => {
      return {
        headerTitle: () => (
          <Header title="POLITYKA PRYWATNOŚCI" navigation={navigation} />
        ),
      };
    },
  },
};
const PrivacyStackNav = createStackNavigator(screens);

export default PrivacyStackNav;
