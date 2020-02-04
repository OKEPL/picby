import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {vw} from 'react-native-expo-viewport-units';

export default function FlatButton({
  textValue,
  onPress,
  buttonColor,
  textColor,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, buttonColor]}>
        <Text style={[styles.buttonText, textColor]}>{textValue}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    alignSelf: 'center',
    width: 200,
    margin: 0,
  },
  red: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
