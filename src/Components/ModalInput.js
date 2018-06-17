import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ModalInputDemo extends Component {

    static navigationOptions = {
        title: 'ModalInput'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ModalInput</Text>
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

export default ModalInputDemo;
