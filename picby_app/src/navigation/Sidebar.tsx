import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

const Sidebar = (props: any) => {
  return (
    <ScrollView>
      <View style={styles.liWrapper}>
        <DrawerNavigatorItems {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  liWrapper: {
    paddingTop: 10,
  },
});

export default Sidebar;
