import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import CatalogsScreen from './CatalogsScreen';
import Header from '../../navigation/Header';
import React from 'react';

type nav = NavigationStackProp;

const screens = {
  Welcome: {
    screen: CatalogsScreen,
    navigationOptions: ({navigation}: {navigation: nav}) => {
      return {
        headerTitle: () => <Header title="KATALOGI" navigation={navigation} />,
      };
    },
  },
};
const CatalogsStackNav = createStackNavigator(screens);

export default CatalogsStackNav;
