import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const LoginScreen: React.FC = (props: any) => {
  return (
    <View style={styles.screenWrapper}>
      <Text>LoginScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
