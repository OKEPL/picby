import React from 'react';
import IntroductionContextProvider from './src/views/intruduction/introductionContext';
import AppContainer from './src/navigation/rootNavFlow';
import AuthContextProvider from './src/views/auth/authContext';
import client from './apollo.config';
import {ApolloProvider} from '@apollo/react-hooks';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <IntroductionContextProvider>
        <AuthContextProvider>
          <AppContainer />
        </AuthContextProvider>
      </IntroductionContextProvider>
    </ApolloProvider>
  );
};

export default App;
