import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import googleIcon from '../../views/auth/icons/googleIcon.png';

let {width: vw} = Dimensions.get('window');

interface ButtonProps {
  onPress: () => void;
  colorVariantIndex: number;
  textColor: object;
  textValue: string;
  icon?: boolean;
  disabled: any;
}

const FlatButton: React.FC<ButtonProps> = props => {
  const {
    textValue,
    onPress,
    colorVariantIndex,
    textColor,
    icon = false,
    disabled,
  } = props;

  const colorVariants = [
    ['#3180AE', '#074782'],
    ['rgba(255, 255, 255, 0.87)', 'rgba(255, 255, 255, 0.87)'],
    ['#FBB114', '#FBB114'],
  ];
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <LinearGradient
        useAngle={true}
        angle={33}
        start={{x: -0.13, y: 0}}
        end={{x: 0.7, y: 0}}
        colors={colorVariants[colorVariantIndex]}
        style={
          disabled
            ? [styles.linearGradient, {opacity: 0.5}]
            : [styles.linearGradient]
        }>
        {icon && <Image style={styles.icon} source={googleIcon} />}
        <Text style={[styles.buttonText, textColor]}>{textValue}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    opacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 2,
    minHeight: 0.125 * vw,
    maxHeight: 0.125 * vw,
    minWidth: 0.8 * vw,
    maxWidth: 0.8 * vw,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 0.043 * vw,
    lineHeight: 20,
    letterSpacing: 0.7,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  icon: {
    width: 0.075 * vw,
    height: 0.075 * vw,
    marginRight: 0.0312 * vw,
  },
});

export default FlatButton;
