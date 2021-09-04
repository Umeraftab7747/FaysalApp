import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const Pratice = () => {
  const [switched, setSwitched] = useState(false);

  return (
    <View style={styles.container}>
      {switched === true ? (
        <>
          <Text>HELLO WOLRD</Text>
          <Text>Hellow world 2</Text>
        </>
      ) : (
        <Text>PRATICE</Text>
      )}
      <Button
        title={'Switch'}
        onPress={() => {
          setSwitched(!switched);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0009',
    borderWidth: 10,
  },
});
