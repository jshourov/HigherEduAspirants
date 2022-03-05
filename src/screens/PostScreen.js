import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const PostScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Post Screen !!!! </Text>
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

export default PostScreen;