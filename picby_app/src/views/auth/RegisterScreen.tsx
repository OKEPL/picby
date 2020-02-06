import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RegisterScreen: React.FC = (props: any) => {
  return (
    <View style={styles.screenWrapper}>
      <Text>RegisterScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screenWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterScreen;
