import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class IconPickerDemo extends Component {
    
    static navigationOptions = {
        title: 'IconPicker'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>IconPicker</Text>
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

export default IconPickerDemo;
