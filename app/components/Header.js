import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Header = props => {
  return (
    <View style={styles.headerContianer}>
      <Text style={styles.Textheader}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContianer: {
    width: '100%',
    height: '7%',
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textheader: {
    color: 'white',
    fontSize: 25,
  },
});
