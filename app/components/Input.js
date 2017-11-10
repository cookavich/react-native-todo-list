import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <TextInput style={styles.input}/>
      );

  }
}
