import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    common: {
        fontSize: 18,
        color: 'black',
        textAlign: 'left',
    }
});

const CommonStyleText = (props) => {

    return (
        <Text style={styles.common}>{props.text}</Text>
    )
};

export default CommonStyleText;
