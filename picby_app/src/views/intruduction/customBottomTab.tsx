import React, {useContext} from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import ClosedEye from './images/eyeClosed.svg';
import OpenEye from './images/eyeOpen.svg';
import {IntroductionContext} from './introductionContext';

let {width: vw} = Dimensions.get('window');

const CustomBottomTab: React.FC = (props: any) => {
  const {navigate} = props.navigation;
  const {activeScreenNumber, setActiveScreenNumber} = useContext(
    IntroductionContext,
  );

  return (
    <View style={styles.eyesWrapper}>
      <TouchableOpacity
        onPress={() => {
          navigate('first');
          setActiveScreenNumber(1);
        }}>
        {activeScreenNumber === 1 ? (
          <OpenEye style={styles.eyeIcon} />
        ) : (
          <ClosedEye style={styles.eyeIcon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('second');
          setActiveScreenNumber(2);
        }}>
        {activeScreenNumber === 2 ? (
          <OpenEye style={styles.eyeIcon} />
        ) : (
          <ClosedEye style={styles.eyeIcon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('third');
          setActiveScreenNumber(3);
        }}>
        {activeScreenNumber === 3 ? (
          <OpenEye style={styles.eyeIcon} />
        ) : (
          <ClosedEye style={styles.eyeIcon} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  eyesWrapper: {
    marginTop: vw * 0.07,
    minHeight: 40,
    width: vw * 0.625,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: vw * 0.07,
  },
  eyeIcon: {
    minWidth: (vw / 100) * 9,
    minHeight: (vw / 100) * 9,
    resizeMode: 'contain',
  },
});

export default CustomBottomTab;
