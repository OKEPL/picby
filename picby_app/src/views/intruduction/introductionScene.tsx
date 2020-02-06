import React from 'react';
import {View} from 'react-native';
import {useContext} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Introduction from './introductionSingleView';
import {IntroductionContext} from './introductionContext';
import CustomBottomTab from './customBottomTab';

const firstView: React.FC = props => {
  const {contentText, title} = useContext(IntroductionContext);
  return (
    <View>
      <Introduction {...props} headerText={title} contentText={contentText} />
    </View>
  );
};
const secondView: React.FC = props => {
  const {contentText2, title2} = useContext(IntroductionContext);
  return (
    <View>
      <Introduction {...props} headerText={title2} contentText={contentText2} />
    </View>
  );
};
const thirdView: React.FC = props => {
  const {contentText, title3, activeScreenNumber} = useContext(
    IntroductionContext,
  );
  return (
    <View>
      <Introduction
        {...props}
        headerText={title3}
        contentText={contentText}
        activeScreenNumber={activeScreenNumber}
      />
    </View>
  );
};

const IntroductionSceneStack = createBottomTabNavigator(
  {
    first: firstView,
    second: secondView,
    third: thirdView,
  },
  {
    tabBarComponent: props => <CustomBottomTab {...props} />,
  },
);

export default IntroductionSceneStack;
