import React from 'react';
import IntroductionContextProvider from './src/views/intruduction/introductionContext';
import IntroductionScene from './src/views/intruduction/introductionScene';

const App = () => {
  return (
    <IntroductionContextProvider>
      <IntroductionScene />
    </IntroductionContextProvider>
  );
};

export default App;
