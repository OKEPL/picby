import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  questionText: string;
  actionText: string;
  onPress: () => any;
}

const GotAccountQuestion: React.FC<Props> = props => {
  const {questionText, actionText, onPress} = props;
  return (
    <View style={styles.gotAccountQuestion}>
      <Text>
        {questionText}
        <Text> </Text>
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.actionText}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  gotAccountQuestion: {
    flexDirection: 'row',
  },
  actionText: {
    color: '#3180AE',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
    letterSpacing: 0.3,
  },
});

export default GotAccountQuestion;
