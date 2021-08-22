import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../components';

export const Screenone = () => {
  return (
    <View style={styles.container}>
      <Header text={'screen one'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0002',
  },
});
