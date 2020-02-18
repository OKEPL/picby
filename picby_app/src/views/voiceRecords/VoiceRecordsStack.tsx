import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import VoiceRecordsScreen from './VioceRecordsScreen';
import Header from '../../navigation/Header';
import React from 'react';

type nav = NavigationStackProp;

const screens = {
  Welcome: {
    screen: VoiceRecordsScreen,
    navigationOptions: ({navigation}: {navigation: nav}) => {
      return {
        headerTitle: () => (
          <Header title="NAGRANIA GŁOSOWE" navigation={navigation} />
        ),
      };
    },
  },
};
const VoiceRecordsStackNav = createStackNavigator(screens);

export default VoiceRecordsStackNav;
