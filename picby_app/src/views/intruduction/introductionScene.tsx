import React from 'react';
import {View} from 'react-native';
import {useContext} from 'react';

import Introduction from './introduction';
import {IntroductionContext} from './introductionContext';

const IntruductionScene = (props: object) => {
  const {contentText, contentText2, title, title2} = useContext(
    IntroductionContext,
  );

  return (
    <View>
      <Introduction headerText={title} contentText={contentText} />
    </View>
  );
};

export default IntruductionScene;
