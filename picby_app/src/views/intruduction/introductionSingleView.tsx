import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import picbyLogo from '../../common/images/PICBY.png';
import eyePic from '../../common/images/bigEye.png';
import FlatButton from '../../common/components/Button';

const {width: vw} = Dimensions.get('window');

const Introduction = (props: any) => {
  const {contentText, headerText, activeScreenNumber} = props;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={
            activeScreenNumber == 3
              ? styles.headerWrapperThirdScreen
              : styles.headerWrapper
          }>
          <Text
            style={
              activeScreenNumber == 3
                ? [styles.headerText, styles.headerTextThirdScreen]
                : styles.headerText
            }>
            {headerText}
          </Text>
          <Image
            style={
              activeScreenNumber == 3
                ? [styles.logo, styles.logoThirdScreen]
                : styles.logo
            }
            source={picbyLogo}
          />
        </View>
        <View style={styles.content}>
          {activeScreenNumber == 3 ? (
            <View>
              <Image style={styles.bigEye} source={eyePic} />
            </View>
          ) : (
            <Text style={styles.contentText}>{contentText}</Text>
          )}
        </View>
        <View style={styles.buttonsWrapper}>
          <FlatButton
            textValue="Zarejestruj się"
            onPress={() =>
              props.navigation
                .dangerouslyGetParent()
                .navigate({routeName: 'Register'})
            }
            colorVariantIndex={0}
            textColor={{color: 'white'}}
          />
          <View style={styles.singleButtonWrapper}>
            <FlatButton
              textValue={'Zaloguj się'}
              onPress={() =>
                props.navigation
                  .dangerouslyGetParent()
                  .navigate({routeName: 'Login'})
              }
              colorVariantIndex={0}
              textColor={{color: 'white'}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 0.134 * vw,
  },
  headerWrapperThirdScreen: {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {},
  headerText: {
    fontFamily: 'OpenSans-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 0.056 * vw,
    lineHeight: 0.078 * vw,
    textAlign: 'center',
    color: '#074782',
    letterSpacing: 0.7,
  },
  headerTextThirdScreen: {
    marginTop: 0.0262 * vw,
  },
  logo: {
    minWidth: 0.65 * vw,
    minHeight: 0.21 * vw,
    resizeMode: 'contain',
    marginTop: 0.0562 * vw,
  },
  logoThirdScreen: {
    marginTop: 0.03 * vw,
  },
  text: {},
  content: {
    maxWidth: 0.9 * vw,
    minHeight: 0.331 * vw,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.125 * vw,
  },
  contentText: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    color: 'rgba(0,0,0,0.9)',
    textAlign: 'center',
    fontSize: 0.05 * vw,
    lineHeight: 0.0687 * vw,
  },
  singleButtonWrapper: {
    marginTop: 0.03 * vw,
  },
  buttonsWrapper: {
    marginTop: 0.1 * vw,
  },
  bigEye: {
    minWidth: 0.5 * vw,
    resizeMode: 'contain',
    minHeight: 0.25 * vw,
  },
});

export default Introduction;
