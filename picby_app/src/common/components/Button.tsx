import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

let {width: vw} = Dimensions.get('window');

export default function FlatButton(props: any) {
  const {textValue, onPress, colorVariantIndex, textColor} = props;
  const colorVariants = [
    ['#3180AE', '#074782'],
    ['red', 'blue'],
  ];
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colorVariants[colorVariantIndex]}
        style={styles.linearGradient}>
        <Text style={[styles.buttonText, textColor]}>{textValue}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 2,
    minWidth: vw * 0.8,
  },
  buttonText: {
    fontSize: vw * 0.043,
    lineHeight: 20,
    letterSpacing: 0.7,
    fontFamily: 'Gill Sans',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
