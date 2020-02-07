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

interface ButtonProps {
  onPress: () => void;
  colorVariantIndex: number;
  textColor: object;
  textValue: string;
}

const FlatButton: React.FC<ButtonProps> = (props: any) => {
  const {textValue, onPress, colorVariantIndex, textColor} = props;
  const colorVariants = [
    ['#3180AE', '#074782'],
    ['red', 'blue'],
  ];
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        useAngle={true}
        angle={33}
        start={{x: -0.13, y: 0}}
        end={{x: 0.7, y: 0}}
        colors={colorVariants[colorVariantIndex]}
        style={styles.linearGradient}>
        <Text style={[styles.buttonText, textColor]}>{textValue}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 2,
    minWidth: vw * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: vw * 0.043,
    lineHeight: 20,
    letterSpacing: 0.7,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default FlatButton;
