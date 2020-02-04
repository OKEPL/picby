/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @ format
 * @ flow
 */

import React from 'react';
import IntroductionContextProvider from './src/views/intruduction/introductionContext';
import IntroductionScene from './src/views/intruduction/introductionScene';
import Introduction from './src/views/intruduction/introduction';
import {Text, View} from 'react-native';
const App = () => {
  return (
    <IntroductionContextProvider>
      <View>
        <IntroductionScene />
      </View>
    </IntroductionContextProvider>
  );
};

export default App;
