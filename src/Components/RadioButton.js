import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RadioButtonDemo extends Component {
    
    static navigationOptions = {
        title: 'RadioButton'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>RadioButton</Text>
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

export default RadioButtonDemo;
