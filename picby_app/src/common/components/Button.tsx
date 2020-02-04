import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {vw} from 'react-native-expo-viewport-units';
import LinearGradient from 'react-native-linear-gradient';

export default function FlatButton({
  textValue,
  onPress,
  colorVariantIndex,
  textColor,
}) {
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
    minWidth: vw(80),
  },
  buttonText: {
    fontSize: vw(4.3),
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
