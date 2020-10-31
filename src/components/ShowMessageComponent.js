import React from 'react';
import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        color: 'blue',
    }
});

const ShowMessageButton = (props) => {
    const showMessage = (message) => {
        alert(message, 'Сообщение');
    };

    return (
        <Button
            style={styles.button}
            title={props.label}
            onPress={() => {showMessage(props.message)}}
        />
    );
};

export default ShowMessageButton;
