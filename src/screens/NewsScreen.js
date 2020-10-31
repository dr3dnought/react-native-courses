import React from 'react';
import { View, StyleSheet } from 'react-native'
import HeaderStyleTextComponent from '../components/HeaderStyleTextComponent';
import CommonStyleText from '../components/CommonStyleTextComponent';
import {getAlignContentFromProps} from '../utils';

const NewsScreen = (props) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignContent: getAlignContentFromProps(props)
        },
    });

    return (
        <View style={styles.container}>
            <HeaderStyleTextComponent
                text={props.title}
                alignHeader={props.alignHeader} />
            <CommonStyleText
                text={props.content}
                alignContentText={props.alignContent} />
        </View>
    )
};

export default NewsScreen;
