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
import {AuthContext} from './authContext';
import GotAccountQuestion from './components/GotAccountQuestion';
import picbyLogo from '../../common/images/PICBY.png';
import {TextInput} from 'react-native-gesture-handler';
import emailLogo from './icons/envelope.png';
import keyLogo from './icons/key.png';
import {Formik} from 'formik';
import * as yup from 'yup';
import uuid from 'uuid';
import FlatButton from '../../common/components/Button';

const {width: vw} = Dimensions.get('window');

const RegisterScreen: React.FC = (props: any) => {
  const {questionText1, actionText1} = useContext(AuthContext);

  const reviewSchema = yup.object({
    email: yup
      .string()
      .required()
      .email(),
    password: yup.string().required(),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Podane hasła nie są identyczne.'),
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screenWrapper}>
        <View style={styles.gotAccountQuestion}>
          <GotAccountQuestion
            questionText={questionText1}
            actionText={actionText1}
            onPress={() => console.log('elo')}
          />
        </View>
        <Image style={styles.logo} source={picbyLogo} />
        <View style={styles.formWrapper}>
          <Formik
            validationSchema={reviewSchema}
            initialValues={{email: '', password: '', passwordRepeat: ''}}
            onSubmit={(values, actions) => {
              console.log(values);
            }}>
            {formikProps => {
              return (
                <View>
                  <View style={styles.inputWrapper}>
                    <Image style={styles.emailLogo} source={emailLogo} />
                    <TextInput
                      keyboardType={'email-address'}
                      style={styles.input}
                      placeholder="E-mail"
                      placeholderTextColor="rgba(7, 71, 130, 0.68)"
                      onChangeText={formikProps.handleChange('email')}
                      value={formikProps.values.email}
                      onBlur={formikProps.handleBlur('email')}
                    />
                  </View>
                  <Text style={styles.errorText}>
                    {formikProps.touched.email && formikProps.errors.email
                      ? 'Wprowadź poprawny adres e-mail.'
                      : null}
                  </Text>
                  <View style={styles.inputWrapper}>
                    <Image style={styles.keyLogo} source={keyLogo} />
                    <TextInput
                      secureTextEntry={true}
                      style={styles.input}
                      placeholder="Hasło"
                      placeholderTextColor="rgba(7, 71, 130, 0.68)"
                      onChangeText={formikProps.handleChange('password')}
                      value={formikProps.values.password}
                      onBlur={formikProps.handleBlur('password')}
                    />
                  </View>
                  <Text style={styles.errorText}>
                    {formikProps.touched.password && formikProps.errors.password
                      ? 'Hasło jest wymagane'
                      : null}
                  </Text>
                  <View style={styles.inputWrapper}>
                    <Image style={styles.keyLogo} source={keyLogo} />
                    <TextInput
                      secureTextEntry={true}
                      style={styles.input}
                      placeholder="Powtórz hasło"
                      placeholderTextColor="rgba(7, 71, 130, 0.68)"
                      onChangeText={formikProps.handleChange('passwordRepeat')}
                      value={formikProps.values.passwordRepeat}
                    />
                  </View>
                  <Text style={styles.errorText}>
                    {formikProps.touched.passwordRepeat &&
                      formikProps.errors.passwordRepeat}
                  </Text>
                  <FlatButton
                    onPress={formikProps.handleSubmit}
                    colorVariantIndex={0}
                    textValue={'Zarejestruj się'}
                    textColor={{color: 'white'}}
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
    minWidth: (vw / 100) * 65,
    minHeight: (vw / 100) * 21,
    resizeMode: 'contain',
    marginTop: vw * 0.112,
    marginBottom: vw * 0.112,
  },
  formWrapper: {},
  input: {
    paddingLeft: 0.053 * vw,
    width: 0.72 * vw,
    margin: 0,
    padding: 0,
    letterSpacing: 0.5,
    fontSize: 16,
    color: 'rgba(7, 71, 130, 0.68)',
  },
  inputWrapper: {
    marginBottom: vw * 0.1,
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
  emailLogo: {
    width: 0.0625 * vw,
    marginRight: 0.0062 * vw,
    height: 0.05 * vw,
  },
  keyLogo: {
    width: 0.0687 * vw,
    height: 0.0375 * vw,
  },
  errorText: {
    color: 'red',
  },
});

export default RegisterScreen;
