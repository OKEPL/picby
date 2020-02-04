import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {vw} from 'react-native-expo-viewport-units';
import {globalStyles} from '../../common/styles/globalStyles';
import picbyLogo from '../../common/images/picbyLogo.png';
import FlatButton from '../../common/components/Button';
import LinearGradient from 'react-native-linear-gradient';

const Introduction12 = ({contentText, headerText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Image style={styles.img} source={picbyLogo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{contentText}</Text>
      </View>
      <FlatButton
        textValue={'Zarejestruj się'}
        onPress={() => console.log('elo')}
        buttonColor={{backgroundColor: 'blue'}}
        textColor={{color: 'white'}}
      />
    </View>
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
    fontSize: vw(5.6),
    lineHeight: vw(7.8),
    textAlign: 'center',
    color: '#074782',
    marginBottom: vw(6.25),
    marginTop: vw(14.6),
  },
  img: {
    minWidth: vw(65),
    minHeight: vw(21),
    marginBottom: vw(13),
  },
  text: {
    marginTop: vw(10),
  },
  content: {
    maxWidth: vw(90),
    minHeight: vw(33.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    color: 'rgba(0,0,0,0.9)',
    textAlign: 'center',
    fontSize: vw(5),
    lineHeight: vw(6.87),
  },
});

export default Introduction12;
