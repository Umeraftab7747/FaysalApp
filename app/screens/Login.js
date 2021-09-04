import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Appbtn, AppInput} from '../components';

export const Login = () => {
  const [Singup, setSingup] = React.useState(true);

  return (
    <View style={styles.container}>
      {/* hermes */}
      {Singup ? (
        <>
          <Text style={styles.textLogin}>Signup</Text>
          <View style={styles.Space} />
          <AppInput placeholder={'Name'} />
          <AppInput placeholder={'Email'} />
          <AppInput placeholder={'Password'} password />
          <Appbtn Text={'LOGIN'} />
          <TouchableOpacity
            onPress={() => {
              setSingup(false);
            }}>
            <Text style={styles.rText}>Login Instead !</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.textLogin}>Login</Text>
          <View style={styles.Space} />
          <AppInput placeholder={'Email'} />
          <AppInput placeholder={'Password'} password />
          <Appbtn Text={'LOGIN'} />
          <TouchableOpacity
            onPress={() => {
              setSingup(true);
            }}>
            <Text style={styles.rText}>REGISTER</Text>
          </TouchableOpacity>
        </>
      )}
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
