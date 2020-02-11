import {Dimensions, Animated} from 'react-native';
import {useState} from 'react';

const {width: vw} = Dimensions.get('window');

export const useHandlePopupAnimation = () => {
  const [fadeAnim] = useState(new Animated.Value(-1 * vw));

  const handlePopUpAnimation = () => {
    const hideValue = -1;
    const showValue = 0;

    const animate = (value: number) =>
      Animated.timing(fadeAnim, {
        toValue: value * vw,
        duration: 300,
      }).start();
    setTimeout(() => animate(showValue), 300);
    setTimeout(() => animate(hideValue), 4000);
  };

  return {
    handlePopUpAnimation,
    fadeAnim,
  };
};
