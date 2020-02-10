import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Animated,
} from 'react-native';
import eyePic from '../../common/images/bigEye.png';
import FlatButton from '../../common/components/Button';
import {Formik} from 'formik';
import * as yup from 'yup';
import emailLogo from './icons/envelope.png';
import errorLogo from './icons/exclamationMark.png';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {width: vw, height: vh} = Dimensions.get('window');

const reviewSchema = yup.object({
  email: yup
    .string()
    .required()
    .email(),
});

const ForgotPasswordScreen = (props: any) => {
  const {navigate} = props.navigation;
  const [fadeAnim] = useState(new Animated.Value(-1 * vw));
  const [emailNotFoundError, setEmailNotFoundError] = useState(false);
  const [serverResponseStatus, setServerResponseStatus] = useState(false);

  const messageBadMail = 'Wprowadź poprawny adres e-mail.';
  const messageEmailNotFound = 'Podany adres e-mail nie istnieje w bazie';

  const handleSendEmailRequest = () => {
    let promise = new Promise((res, rej) =>
      serverResponseStatus ? res(true) : rej(true),
    );
    promise
      .then(() => {
        setTimeout(() => handleAnimation(0), 300);
        setTimeout(() => handleAnimation(-1), 4000);
      })
      .catch(() => {
        setEmailNotFoundError(true);
      });
  };

  const handleAnimation = (value: number) => {
    Animated.timing(fadeAnim, {
      toValue: value * vw,
      duration: 300,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={styles.wrapper}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.popUp, {transform: [{translateX: fadeAnim}]}]}>
          <Text style={styles.popUpText}>
            {`Przypomnienie zostało wysłane.${'\n'} Sprawdź skrzynkę odbiorczą.`}
          </Text>
        </Animated.View>
        <View style={styles.content}>
          <Image style={styles.bigEye} source={eyePic} />
          <Text style={styles.headerText}>ZAPOMNIAŁEŚ HASŁA?</Text>
          <Text style={styles.contentText}>
            {`Wprowadź swój adres e-mail ${'\n'} żeby zresetować hasło.`}
          </Text>
        </View>
        <View>
          <Formik
            validationSchema={reviewSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={(values: any, actions: any) => {
              handleSendEmailRequest();
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
                      onFocus={() =>
                        emailNotFoundError ? setEmailNotFoundError(false) : null
                      }
                    />
                  </View>
                  <View style={styles.errorTextWrapper}>
                    {(formikProps.touched.email && formikProps.errors.email) ||
                    emailNotFoundError ? (
                      <Image
                        style={styles.errorExlamationMark}
                        source={errorLogo}
                      />
                    ) : null}
                    <Text style={styles.errorText}>
                      {formikProps.touched.email && formikProps.errors.email
                        ? messageBadMail
                        : null}
                      {emailNotFoundError ? messageEmailNotFound : null}
                    </Text>
                  </View>
                  <View style={styles.buttonsWrapper}>
                    <FlatButton
                      textValue={'Wyślij'}
                      onPress={formikProps.handleSubmit}
                      colorVariantIndex={0}
                      textColor={{color: 'white'}}
                    />
                    <View style={styles.singleButtonWrapper}>
                      <FlatButton
                        textValue={'Wróć'}
                        onPress={() => navigate('Login')}
                        colorVariantIndex={2}
                        textColor={{color: '#3180AE'}}
                      />
                    </View>
                  </View>
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
  wrapper: {
    backgroundColor: '#FBB114',
    minHeight: 100 * vh,
    position: 'relative',
    zIndex: 2,
  },
  container: {
    alignItems: 'center',
    textAlign: 'center',
  },
  headerWrapperThirdScreen: {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'OpenSans-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: (vw / 100) * 5.6,
    lineHeight: (vw / 100) * 7.8,
    textAlign: 'center',
    color: '#074782',
    letterSpacing: 0.7,
    marginTop: vw * 0.187,
  },
  content: {
    maxWidth: (vw / 100) * 90,
    minHeight: (vw / 100) * 33.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vw * 0.187,
  },
  contentText: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    color: 'rgba(0,0,0,0.9)',
    textAlign: 'center',
    fontSize: (vw / 100) * 5,
    lineHeight: (vw / 100) * 6.87,
    marginTop: vw * 0.05,
  },
  singleButtonWrapper: {
    marginTop: vw * 0.03,
  },
  buttonsWrapper: {
    marginTop: vw * 0.084,
  },
  bigEye: {
    minWidth: vw * 0.5,
    resizeMode: 'contain',
    minHeight: vw * 0.25,
  },
  inputWrapper: {
    height: 0.093 * vw,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#EB5F34',
    borderBottomWidth: 2,
    borderRadius: 0,
    textAlign: 'center',
    paddingHorizontal: 5,
    width: vw * 0.8,
    marginTop: vw * 0.13,
  },
  emailLogo: {
    width: 0.0625 * vw,
    marginRight: 0.0062 * vw,
    height: 0.05 * vw,
  },
  input: {
    paddingLeft: 0.053 * vw,
    width: 0.72 * vw,
    margin: 0,
    padding: 0,
    letterSpacing: 0.5,
    fontSize: 16,
    color: 'rgba(7, 71, 130, 0.68)',
  },
  errorTextWrapper: {
    marginTop: 3,
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
    marginBottom: 10,
    minHeight: 0.0625 * vw,
    paddingHorizontal: 2,
  },
  errorExlamationMark: {
    maxWidth: 0.0625 * vw,
    maxHeight: 0.0625 * vw,
    marginRight: 0.063 * vw,
  },
  errorText: {
    color: '#CC1919',
    letterSpacing: 0.7,
    fontSize: 14,
  },
  popUp: {
    backgroundColor: '#074782',
    color: 'white',
    width: 0.95 * vw,
    paddingHorizontal: 0.0312 * vw,
    paddingVertical: 0.02 * vw,
    position: 'absolute',
    top: 0.84 * vh,
    borderRadius: 2,
    textAlign: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  popUpHidden: {
    display: 'none',
  },
  popUpText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 0.5,
  },
});

export default ForgotPasswordScreen;
