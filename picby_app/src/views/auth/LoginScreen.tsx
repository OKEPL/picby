import * as React from 'react';
import {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';

import {globalStyles} from '../../common/styles/globalStyles';
import {AuthContext} from './authContext';
import GotAccountQuestion from './components/GotAccountQuestion';
import FlatButton from '../../common/components/Button';
import picbyLogo from '../../common/images/PICBY.png';
import emailLogo from './icons/envelope.png';
import keyLogo from './icons/key.png';
import errorLogo from './icons/exclamationMark.png';

const {width: vw} = Dimensions.get('window');

const LoginScreen: React.FC = (props: any) => {
  const {loginHeaderTextTwo, loginHeaderTextOne} = useContext(AuthContext);
  const {navigate} = props.navigation;
  const [passwordError, setPasswordError] = useState(false);
  const [serverError, setServerError] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(-1 * vw));

  const reviewSchema = yup.object({
    email: yup
      .string()
      .required()
      .email(),
    password: yup.string().required(),
  });

  const handleThrowPasswordError = () => {
    let promise = new Promise((resolve, reject) => {
      //await for server response then set passwordError to true
      setTimeout(() => {
        if (serverError) {
          return resolve(true);
        }
        reject(true);
      }, 1000);
    });
    return promise
      .then(() => setPasswordError(true))
      .catch(() => console.log('Logowanie pomyslne'));
  };
  const handlePopUpAnimation = (value: number = 0) => {
    Animated.timing(fadeAnim, {
      toValue: value * vw,
      duration: 300,
    }).start();
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={globalStyles.screenWrapper}>
        <View style={styles.gotAccountQuestion}>
          <GotAccountQuestion
            questionText={loginHeaderTextTwo}
            actionText={loginHeaderTextOne}
            onPress={() => navigate('Register')}
          />
        </View>
        <Image style={styles.logo} source={picbyLogo} />
        <View>
          <Formik
            validationSchema={reviewSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={(values: any, actions: any) => {
              handleThrowPasswordError();
            }}>
            {formikProps => {
              return (
                <View>
                  <View style={styles.inputWrapper}>
                    <Image style={globalStyles.emailLogo} source={emailLogo} />
                    <TextInput
                      keyboardType="email-address"
                      style={globalStyles.input}
                      placeholder="E-mail"
                      placeholderTextColor="rgba(7, 71, 130, 0.68)"
                      onChangeText={formikProps.handleChange('email')}
                      value={formikProps.values.email}
                      onBlur={formikProps.handleBlur('email')}
                    />
                  </View>
                  <View style={globalStyles.errorTextWrapper}>
                    {formikProps.touched.email && formikProps.errors.email && (
                      <Image
                        style={globalStyles.errorExlamationMark}
                        source={errorLogo}
                      />
                    )}
                    <Text style={globalStyles.errorText}>
                      {formikProps.touched.email &&
                        formikProps.errors.email &&
                        'Wprowadź poprawny adres e-mail.'}
                    </Text>
                  </View>
                  <View style={styles.inputWrapper}>
                    <Image style={globalStyles.keyLogo} source={keyLogo} />
                    <TextInput
                      secureTextEntry={true}
                      style={globalStyles.input}
                      placeholder="Hasło"
                      placeholderTextColor="rgba(7, 71, 130, 0.68)"
                      onChangeText={formikProps.handleChange('password')}
                      value={formikProps.values.password}
                      onBlur={formikProps.handleBlur('password')}
                      onFocus={() => passwordError && setPasswordError(false)}
                    />
                  </View>
                  <View style={globalStyles.errorTextWrapper}>
                    {passwordError && (
                      <Image
                        style={globalStyles.errorExlamationMark}
                        source={errorLogo}
                      />
                    )}
                    <Text style={globalStyles.errorText}>
                      {passwordError && 'Hasło jest nieprawidłowe'}
                    </Text>
                  </View>
                  <View style={styles.googleButtonWrapper}>
                    <FlatButton
                      onPress={formikProps.handleSubmit}
                      colorVariantIndex={1}
                      textValue="Zaloguj się z google"
                      textColor={{color: '#3180AE'}}
                      icon={true}
                    />
                  </View>
                  <FlatButton
                    onPress={formikProps.handleSubmit}
                    colorVariantIndex={0}
                    textValue="Zaloguj się"
                    textColor={{color: 'white'}}
                  />
                </View>
              );
            }}
          </Formik>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigate('ForgotPass')}>
            <Text style={styles.forgotPassword}>Zapomniałeś hasła?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  gotAccountQuestion: {
    alignSelf: 'flex-start',
    marginLeft: 0.1 * vw,
    marginTop: 0.05 * vw,
  },
  logo: {
    minWidth: 0.65 * vw,
    minHeight: 0.21 * vw,
    resizeMode: 'contain',
    marginTop: 0.2187 * vw,
    marginBottom: 0.2187 * vw,
  },
  inputWrapper: {
    height: 0.093 * vw,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(242, 143, 174, 0.68)',
    borderBottomWidth: 2,
    borderRadius: 0,
    textAlign: 'center',
    paddingHorizontal: 5,
    width: vw * 0.8,
  },
  googleButtonWrapper: {
    marginTop: vw * 0.0625,
    marginBottom: vw * 0.05,
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    color: '#000',
    marginTop: 0.04 * vw,
  },
});

export default LoginScreen;
