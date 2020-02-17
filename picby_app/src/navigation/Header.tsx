import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import MenuIcon from '../common/icons/hamburger.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width: vw, height: vh} = Dimensions.get('window');

const Header = (props: any) => {
  const {title, navigation} = props;
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconWrapper} onPress={() => openMenu()}>
        <MenuIcon />
      </TouchableOpacity>

      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: vw,
    height: 0.1 * vh,
    flexDirection: 'row',
    margin: -16,
    alignItems: 'center',
    backgroundColor: '#3180AE',
  },
  headerText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20,
    letterSpacing: 1,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0.05 * vw,
    marginRight: 0.03 * vw,
  },
  icon: {
    minHeight: 0.068 * vw,
    minWidth: 0.068 * vw,
    borderWidth: 1,
  },
});

export default Header;
