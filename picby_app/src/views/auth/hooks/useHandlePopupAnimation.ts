import {Dimensions, Animated} from 'react-native';
import {useState} from 'react';

const {width: vw} = Dimensions.get('window');

export const useHandlePopupAnimation = (redirectFunction?: () => void) => {
  const [fadeAnim] = useState(new Animated.Value(-1 * vw));
  const HIDE_VALUE = -1;
  const SHOW_VALUE = 0;
  const ANIMATION_DURATION = 300;

  const handlePopUpAnimation = () => {
    const animate = (value: number, callback?: () => void) =>
      Animated.timing(fadeAnim, {
        toValue: value * vw,
        duration: ANIMATION_DURATION,
      }).start(() => callback && callback());
    setTimeout(() => animate(SHOW_VALUE), 300);
    setTimeout(() => animate(HIDE_VALUE, redirectFunction), 4000);
  };

  return {
    handlePopUpAnimation,
    fadeAnim,
  };
};
