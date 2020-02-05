import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import closedEye from './images/eyeClosed.png';
import openEye from './images/eyeOpen.png';
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
        <Image
          style={styles.eyeIcon}
          source={activeScreenNumber == 1 ? openEye : closedEye}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('second');
          setActiveScreenNumber(2);
        }}>
        <Image
          style={styles.eyeIcon}
          source={activeScreenNumber == 2 ? openEye : closedEye}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('third');
          setActiveScreenNumber(3);
        }}>
        <Image
          style={styles.eyeIcon}
          source={activeScreenNumber == 3 ? openEye : closedEye}
        />
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
