import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const screens = {
  Login: LoginScreen,
  Register: RegisterScreen,
};
const AuthStackNav = createStackNavigator(screens, {
  headerMode: 'none',
});

export default AuthStackNav;
