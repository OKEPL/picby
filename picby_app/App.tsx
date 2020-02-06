import React from 'react';
import IntroductionContextProvider from './src/views/intruduction/introductionContext';
import AppContainer from './src/navigation/rootNavFlow';

const App = () => {
  return (
    <IntroductionContextProvider>
      <AppContainer />
    </IntroductionContextProvider>
  );
};

export default App;
