import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const Appbtn = props => {
  return (
    <TouchableOpacity style={styles.BtnContainer}>
      <Text style={styles.textSytles}>{props.Text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BtnContainer: {
    backgroundColor: '#FF67D6',
    width: '60%',
    height: '7%',
    marginTop: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSytles: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
