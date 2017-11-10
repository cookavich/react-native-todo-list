import React, { Component, PropTypes } from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 24
    }
});

export const Footer = () => (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Remove Completed Items</Text>
      </TouchableOpacity>
    </View>
);
