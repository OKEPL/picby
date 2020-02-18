import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import SettingsScreen from './SettingsScreen';
import Header from '../../navigation/Header';
import React from 'react';

type nav = NavigationStackProp;

const screens = {
  Welcome: {
    screen: SettingsScreen,
    navigationOptions: ({navigation}: {navigation: nav}) => {
      return {
        headerTitle: () => (
          <Header title="USTAWIENIA" navigation={navigation} />
        ),
      };
    },
  },
};
const SettingsStackNav = createStackNavigator(screens);

export default SettingsStackNav;
