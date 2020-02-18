import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import IntroductionSceneStack from '../views/intruduction/introductionScene';
import AuthStackNav from '../views/auth/AuthStackNav';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DashboardStackNav from '../views/dashboard/DashboardStack';
import AboutStackNav from '../views/about/AboutStack';
import CatalogsStackNav from '../views/catalogs/CatalogsStack';
import PrivacyStackNav from '../views/privacy/PrivacyStack';
import SettingsStackNav from '../views/settings/SettingsStack';
import VoiceRecordsStackNav from '../views/voiceRecords/VoiceRecordsStack';
import KidIcon from '../common/icons/menuChildIcon.svg';
import CatalogIcon from '../common/icons/menuCatalog.svg';
import React from 'react';
import Sidebar from './Sidebar';
import {View, Dimensions} from 'react-native';
import {globalStyles} from '../common/styles/globalStyles';

const RED_COLOR = '#EB5F34';
const YELLOW_COLOR = '#FBB114';
const {width: vw} = Dimensions.get('window');

const passIconElement = (element: any, backgroundColor: string | undefined) => {
  return (
    <View style={[globalStyles.menuIcon, {backgroundColor: backgroundColor}]}>
      {element}
    </View>
  );
};

const ParentDrawer = createDrawerNavigator(
  {
    'PANEL DZIECKA': {
      screen: DashboardStackNav,
      navigationOptions: {
        drawerIcon: () => passIconElement(<KidIcon />, RED_COLOR),
      },
    },
    'KATALOGI ': {
      screen: CatalogsStackNav,
      navigationOptions: {
        drawerIcon: () => passIconElement(<CatalogIcon />, YELLOW_COLOR),
      },
    },
    'NAGRANIA GŁOSOWE': VoiceRecordsStackNav,
    'USTAWIENIA ': SettingsStackNav,
    'O APLIKACJI': AboutStackNav,
    'POLITYKA PRYWATNOŚCI': PrivacyStackNav,
  },
  {
    contentComponent: props => <Sidebar {...props} />,
    drawerWidth: vw * 1,
    hideStatusBar: false,
    drawerType: 'slide',
    drawerPosition: 'left',
    contentOptions: {
      itemStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        width: vw * 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        paddingLeft: 30,
      },
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      activeTintColor: '#000',
    },
  },
);

const ChildDrawer = createDrawerNavigator({
  'Panel rodzica': DashboardStackNav,
  Notifications: IntroductionSceneStack,
});

const switchContainer = createSwitchNavigator(
  {
    Intro: IntroductionSceneStack,
    Auth: AuthStackNav,
    ParentDashboard: ParentDrawer,
    ChildDashboard: ChildDrawer,
  },
  {
    initialRouteName: 'Intro',
  },
);

export default createAppContainer(switchContainer);
