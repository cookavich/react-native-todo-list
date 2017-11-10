import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 24,
        paddingBottom: 16
    }
});

export const Title = ({title}) => (
    <View style={styles.container}>
        <Text>{title}</Text>
    </View>
);
