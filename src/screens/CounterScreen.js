import React, {useEffect, useState} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    text: {
        fontSize: 32,
        textAlign: 'center',
    }
});

const CounterScreen = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <Button
                title={'+'}
                onPress={() => increment()} />
            <Button
                title={'-'}
                onPress={() => decrement()} />
        </View>
    );
};

export default CounterScreen;
