import React from 'react';
import {View} from 'react-native';
import {useContext} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Introduction from './introductionSingleView';
import {IntroductionContext} from './introductionContext';
import CustomBottomTab from './customBottomTab';

const firstView: React.FC = () => {
  const {contentText, title} = useContext(IntroductionContext);
  return (
    <View>
      <Introduction headerText={title} contentText={contentText} />
    </View>
  );
};
const secondView: React.FC = () => {
  const {contentText2, title2} = useContext(IntroductionContext);
  return (
    <View>
      <Introduction headerText={title2} contentText={contentText2} />
    </View>
  );
};
const thirdView: React.FC = () => {
  const {contentText, title3, activeScreenNumber} = useContext(
    IntroductionContext,
  );
  return (
    <View>
      <Introduction
        headerText={title3}
        contentText={contentText}
        activeScreenNumber={activeScreenNumber}
      />
    </View>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    first: firstView,
    second: secondView,
    third: thirdView,
  },
  {
    tabBarComponent: props => <CustomBottomTab {...props} />,
  },
);

export default createAppContainer(TabNavigator);
