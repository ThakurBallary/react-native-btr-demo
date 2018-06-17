import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ColorPickerDemo extends Component {

    static navigationOptions = {
        title: 'ColorPicker'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ColorPicker</Text>
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

export default ColorPickerDemo;
