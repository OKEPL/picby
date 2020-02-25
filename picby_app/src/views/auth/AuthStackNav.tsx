import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ForgotPasswordScreen from './ForgotPassScreen';

const screens = {
  Login: LoginScreen,
  Register: RegisterScreen,
  ForgotPass: ForgotPasswordScreen,
};
const AuthStackNav = createStackNavigator(screens, {
  headerMode: 'none',
});

export default AuthStackNav;
