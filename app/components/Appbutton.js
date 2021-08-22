import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const Appbutton = props => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btntext}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: 'dodgerblue',
    width: '70%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btntext: {
    color: 'white',
    fontSize: 25,
  },
});
