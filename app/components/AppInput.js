import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';

export const AppInput = ({placeholder, password}) => {
  return (
    <View style={styles.Container}>
      <TextInput
        placeholder={placeholder}
        style={styles.inputStyles}
        secureTextEntry={password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '80%',
    height: '7%',
    // backgroundColor: '#FF4848',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    borderColor: '#0007',
    borderWidth: 1,
    marginTop: 10,
  },
  inputStyles: {
    width: '80%',
    height: '100%',
  },
  ImageContainer: {
    width: '20%',
    height: '100%',
    // backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
});
