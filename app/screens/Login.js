import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Appbtn, AppInput} from '../components';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>LOGIN</Text>
      <View style={styles.Space} />
      <AppInput imge={require('../assets/mail.png')} />
      <AppInput />
      <Appbtn Text={'LOGIN'} />
      <TouchableOpacity>
        <Text style={styles.rText}>REGISTER</Text>
      </TouchableOpacity>
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
  rText: {
    color: '#0008',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  Space: {
    width: '90%',
    height: '10%',
    // backgroundColor: 'red',
  },
});
