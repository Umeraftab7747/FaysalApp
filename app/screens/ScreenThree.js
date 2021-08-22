import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Appbutton} from '../components';

export const ScreenThree = () => {
  return (
    <View style={styles.container}>
      <Header text={'Screen three'} />
      <Appbutton text={'Login'} />
      <Appbutton text={'Singup'} />
      <Appbutton text={'3rd Button'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
