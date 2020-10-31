import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {getTextAlignFromProps} from '../utils';



const CommonStyleText = (props) => {

    const styles = StyleSheet.create({
        common: {
            fontSize: 18,
            color: 'black',
            textAlign: getTextAlignFromProps(props.alignContent),
        }
    });

    return (
        <Text style={styles.common}>{props.text}</Text>
    )
};

export default CommonStyleText;
