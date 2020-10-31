import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    }
});

const HeaderStyleTextComponent = (props) => {

    return (
        <Text style={styles.header}>{props.text}</Text>
    );
};

export default HeaderStyleTextComponent;
