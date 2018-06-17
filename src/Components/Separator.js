import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SeparatorDemo extends Component {

    static navigationOptions = {
        title: 'Separator'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Separator</Text>
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

export default SeparatorDemo;
