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
import eyePic from './images/bigEye.png';
import FlatButton from '../../common/components/Button';

let {width: vw} = Dimensions.get('window');
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
            textValue={'Zarejestruj się'}
            onPress={() => console.log('elo')}
            colorVariantIndex={0}
            textColor={{color: 'white'}}
          />

          <View style={styles.singleButtonWrapper}>
            <FlatButton
              textValue={'Zaloguj się'}
              onPress={() => console.log('elo')}
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
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: (vw / 100) * 5.6,
    lineHeight: (vw / 100) * 7.8,
    textAlign: 'center',
    color: '#074782',
    letterSpacing: 0.7,
  },
  headerTextThirdScreen: {
    marginTop: vw * 0.0262,
  },
  logo: {
    minWidth: (vw / 100) * 65,
    minHeight: (vw / 100) * 21,
    resizeMode: 'contain',
    marginTop: vw * 0.0562,
  },
  logoThirdScreen: {
    marginTop: 0.03 * vw,
  },
  text: {},
  content: {
    maxWidth: (vw / 100) * 90,
    minHeight: (vw / 100) * 33.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vw * 0.125,
  },
  contentText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    color: 'rgba(0,0,0,0.9)',
    textAlign: 'center',
    fontSize: (vw / 100) * 5,
    lineHeight: (vw / 100) * 6.87,
  },
  singleButtonWrapper: {
    marginTop: vw * 0.03,
  },
  buttonsWrapper: {
    marginTop: vw * 0.1,
  },
  bigEye: {
    minWidth: vw * 0.5,
    resizeMode: 'contain',
    minHeight: vw * 0.25,
  },
});

export default Introduction;
