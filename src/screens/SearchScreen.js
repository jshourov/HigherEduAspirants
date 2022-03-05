import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Search Screen!!!! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
});

export default SearchScreen;