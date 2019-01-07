import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './containers/Counter/Counter';
import Controller from './containers/Controller/Controller';

//<Counter />

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
