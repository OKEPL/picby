import {createStackNavigator} from 'react-navigation-stack';
import WelcomeDashboard from './DashboardScreen';
import Header from '../../navigation/Header';
import React from 'react';

type nav = any;

const screens = {
  Welcome: {
    screen: WelcomeDashboard,
    navigationOptions: ({navigation}: {navigation: nav}) => {
      return {
        headerTitle: () => (
          <Header title="PICBY" style={{margin: 0}} navigation={navigation} />
        ),
      };
    },
  },
};
const DashboardStackNav = createStackNavigator(screens);

export default DashboardStackNav;
