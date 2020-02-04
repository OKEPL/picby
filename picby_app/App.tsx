/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @ format
 * @ flow
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Introduction12 from './src/views/intruduction/introduction12';
const App = () => {
  const contentText = `aplikacji budującej język ${'\n'} w umyśle dziecka,${'\n'} a także uczącącej komunikacji.`;
  const contentText2 = `Dodawaj zdjęcia i nagrania głosowe,${'\n'} twórz opisy, przesyłaj pliki,${'\n'} komponuj albumy${'\n'} pełne wyjątkowych wspomnień!`;
  const title = 'WITAJ W';
  const title2 = 'POZNAJ';
  return (
    <View>
      <Introduction12 headerText={title} contentText={contentText} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
