import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {getTextAlignFromProps} from '../utils';

const HeaderStyleTextComponent = (props) => {

    const styles = StyleSheet.create({
        header: {
            fontSize: 32,
            fontWeight: 'bold',
            color: 'black',
            textAlign: getTextAlignFromProps(props.alignHeader),
        }
    });

    return (
        <Text style={styles.header}>{props.text}</Text>
    );
};

export default HeaderStyleTextComponent;
