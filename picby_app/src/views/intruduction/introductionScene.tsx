import React from 'react';
import {View} from 'react-native';
import {useContext} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Introduction from './introductionSingleView';
import {IntroductionContext} from './introductionContext';
import CustomBottomTab from './customBottomTab';

const firstView: React.FC = props => {
  const {firstScreenContentText, firstScreenTitle} = useContext(
    IntroductionContext,
  );
  return (
    <View>
      <Introduction
        {...props}
        headerText={firstScreenTitle}
        contentText={firstScreenContentText}
      />
    </View>
  );
};
const secondView: React.FC = props => {
  const {secondScreenContentText, secondScreenTitle} = useContext(
    IntroductionContext,
  );
  return (
    <View>
      <Introduction
        {...props}
        headerText={secondScreenTitle}
        contentText={secondScreenContentText}
      />
    </View>
  );
};
const thirdView: React.FC = props => {
  const {thirdScreenTitle, activeScreenNumber} = useContext(
    IntroductionContext,
  );
  return (
    <View>
      <Introduction
        {...props}
        headerText={thirdScreenTitle}
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
