import * as React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {vw} from 'react-native-expo-viewport-units';
import picbyLogo from '../../common/images/picbyLogo.png';
import FlatButton from '../../common/components/Button';

const Introduction12 = ({contentText, headerText}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
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
  singleButtonWrapper: {
    marginBottom: vw(2.8),
  },
  buttonsWrapper: {
    marginTop: vw(9.3),
  },
});

export default Introduction12;
