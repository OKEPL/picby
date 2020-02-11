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
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {TextInput} from 'react-native-gesture-handler';

import {globalStyles} from '../../common/styles/globalStyles';
import {AuthContext} from './authContext';
import GotAccountQuestion from './components/GotAccountQuestion';
import picbyLogo from '../../common/images/PICBY.png';
import emailLogo from './icons/envelope.png';
import errorLogo from './icons/exclamationMark.png';
import keyLogo from './icons/key.png';
import FlatButton from '../../common/components/Button';
import {useHandlePopupAnimation} from './hooks/useHandlePopupAnimation';
import PopUp from '../auth/components/Popup';
import {useSubmit} from './hooks/useSubmit';

const {width: vw} = Dimensions.get('window');

const RegisterScreen: React.FC = (props: any) => {
  const {
    registerHeaderTextTwo,
    registerHeaderTextOne,
    registerServerResponseStatus,
  } = useContext(AuthContext);
  const {navigate} = props.navigation;
  const [emailAlreadyTaken, setEmailAlreadyTakenError] = useState(false);
  const {handlePopUpAnimation, fadeAnim} = useHandlePopupAnimation();
  const [messagePopUpText, setMessagePopUpText] = useState('');
  const messageEmailAlreadyTaken = 'Konto o podanym e-mail już istnieje.';
  const messageBadEmail = 'Wprowadź poprawny adres e-mail.';
  const messagePasswordError = 'Hasło musi zawierać min. 8 znaków';
  const messagePasswordNotSimilar = 'Podane hasła nie są identyczne.';
  const messageRegisterSuccess = `Zarejestrowano pomyślnie,${'\n'}sprawdź skrzynkę pocztową.`;

  const reviewSchema = yup.object({
    email: yup
      .string()
      .required()
      .email(),
    password: yup
      .string()
      .required()
      .min(8),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref('password'), null], messagePasswordNotSimilar),
  });

  const handleSendData = () => {
    let promise = new Promise((res, rej) =>
      setTimeout(
        () => (registerServerResponseStatus ? res(true) : rej(true)),
        3000,
      ),
    );
    return promise
      .then(() => {
        //dane ok// wyślij email potwierdzajacy -> //
        setMessagePopUpText(messageRegisterSuccess);
        handlePopUpAnimation();
      })
      .catch(() => {
        setMessagePopUpText(messageEmailAlreadyTaken);
        handlePopUpAnimation();
        setEmailAlreadyTakenError(true);
      });
  };
  const {handleSubmit, loading, serverError} = useSubmit(handleSendData);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screenWrapper}>
        <PopUp fadeAnim={fadeAnim} popUpText={messagePopUpText} />
        <View style={styles.gotAccountQuestion}>
          <GotAccountQuestion
            questionText={registerHeaderTextTwo}
            actionText={registerHeaderTextOne}
            onPress={() => navigate('Login')}
          />
        </View>
        <Image style={styles.logo} source={picbyLogo} />
        <View>
          <Formik
            validationSchema={reviewSchema}
            initialValues={{email: '', password: '', passwordRepeat: ''}}
            onSubmit={(values, actions) => {
              handleSubmit();
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
                      onFocus={() =>
                        emailAlreadyTaken && setEmailAlreadyTakenError(false)
                      }
                    />
                  </View>
                  <View style={globalStyles.errorTextWrapper}>
                    {(formikProps.touched.email && formikProps.errors.email) ||
                    emailAlreadyTaken ? (
                      <Image
                        style={globalStyles.errorExlamationMark}
                        source={errorLogo}
                      />
                    ) : null}
                    <Text style={globalStyles.errorText}>
                      {formikProps.touched.email &&
                        formikProps.errors.email &&
                        messageBadEmail}
                      {emailAlreadyTaken && messageEmailAlreadyTaken}
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
                    />
                  </View>
                  <View style={globalStyles.errorTextWrapper}>
                    {formikProps.touched.password &&
                    formikProps.errors.password ? (
                      <Image
                        style={globalStyles.errorExlamationMark}
                        source={errorLogo}
                      />
                    ) : null}
                    <Text style={globalStyles.errorText}>
                      {formikProps.touched.password &&
                        formikProps.errors.password &&
                        messagePasswordError}
                    </Text>
                  </View>
                  <View style={styles.inputWrapper}>
                    <Image style={globalStyles.keyLogo} source={keyLogo} />
                    <TextInput
                      secureTextEntry={true}
                      style={globalStyles.input}
                      placeholder="Powtórz hasło"
                      placeholderTextColor="rgba(7, 71, 130, 0.68)"
                      onChangeText={formikProps.handleChange('passwordRepeat')}
                      value={formikProps.values.passwordRepeat}
                    />
                  </View>
                  <View style={globalStyles.errorTextWrapper}>
                    {formikProps.touched.passwordRepeat &&
                    formikProps.errors.passwordRepeat ? (
                      <Image
                        style={globalStyles.errorExlamationMark}
                        source={errorLogo}
                      />
                    ) : null}
                    <Text style={globalStyles.errorText}>
                      {formikProps.touched.passwordRepeat &&
                        formikProps.errors.passwordRepeat}
                    </Text>
                  </View>
                  <View style={styles.googleButtonWrapper}>
                    <FlatButton
                      onPress={formikProps.handleSubmit}
                      colorVariantIndex={1}
                      textValue="Zarejestruj się z google"
                      textColor={{color: '#3180AE'}}
                      icon={true}
                      disabled={loading}
                    />
                  </View>
                  <FlatButton
                    onPress={formikProps.handleSubmit}
                    colorVariantIndex={0}
                    textValue="Zarejestruj się"
                    textColor={{color: 'white'}}
                    disabled={loading}
                  />
                </View>
              );
            }}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screenWrapper: {
    alignItems: 'center',
  },
  gotAccountQuestion: {
    alignSelf: 'flex-start',
    marginLeft: 0.1 * vw,
    marginTop: 0.05 * vw,
  },
  logo: {
    minWidth: 0.65 * vw,
    minHeight: 0.21 * vw,
    resizeMode: 'contain',
    marginTop: 0.112 * vw,
    marginBottom: 0.112 * vw,
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
});

export default RegisterScreen;
