import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import {vw} from 'react-native-expo-viewport-units';
import picbyLogo from '../../common/images/picbyLogo.png';
import closedEye from './images/eyeClosed.png';
import openEye from './images/eyeOpen.png';
import FlatButton from '../../common/components/Button';

let {width: vw} = Dimensions.get('window');
console.log(vw);
const Introduction = (props: any) => {
  const {contentText, headerText} = props;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>{headerText}</Text>
          <Image style={styles.img} source={picbyLogo} />
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>{contentText}</Text>
        </View>
        <View style={styles.buttonsWrapper}>
          <View style={styles.singleButtonWrapper}>
            <FlatButton
              textValue={'Zarejestruj się'}
              onPress={() => console.log('elo')}
              colorVariantIndex={0}
              textColor={{color: 'white'}}
            />
          </View>
          <FlatButton
            textValue={'Zaloguj się'}
            onPress={() => console.log('elo')}
            colorVariantIndex={0}
            textColor={{color: 'white'}}
          />
        </View>
        <View style={styles.eyesWrapper}>
          <TouchableOpacity>
            <Image source={openEye} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={closedEye} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={openEye} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
  },
  headerText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: (vw / 100) * 5.6,
    lineHeight: (vw / 100) * 7.8,
    textAlign: 'center',
    color: '#074782',
    marginBottom: (vw / 100) * 6.25,
    marginTop: (vw / 100) * 14.6,
  },
  img: {
    minWidth: (vw / 100) * 65,
    minHeight: (vw / 100) * 21,
    marginBottom: (vw / 100) * 13,
  },
  text: {
    marginTop: (vw / 100) * 10,
  },
  content: {
    maxWidth: (vw / 100) * 90,
    minHeight: (vw / 100) * 33.1,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: (vw / 100) * 2.8,
  },
  buttonsWrapper: {
    marginTop: (vw / 100) * 9.3,
  },
  eyesWrapper: {},
});

export default Introduction;
