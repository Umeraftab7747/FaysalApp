import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbtn, AppInput} from '../components';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>LOGIN</Text>
      <AppInput />
      <AppInput />
      <Appbtn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textLogin: {
    color: '#0007',
    fontSize: 60,
    fontWeight: '700',
    marginTop: 90,
  },
});
