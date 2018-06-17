import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RadioGroupDemo extends Component {

    static navigationOptions = {
        title: 'RadioGroup'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>RadioGroup</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RadioGroupDemo;
