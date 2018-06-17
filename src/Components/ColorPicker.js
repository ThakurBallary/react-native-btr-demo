import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ColorPicker } from 'react-native-btr';

class ColorPickerDemo extends Component {

    static navigationOptions = {
        title: 'ColorPicker'
    }

    state = {
        selectedColor: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Selected Color = {this.state.selectedColor}</Text>
                <View style={styles.wrapper}>
                    <ColorPicker
                        selectedColor={this.state.selectedColor}
                        onSelect={selectedColor => this.setState({ selectedColor })}
                    />
                </View>
                <Text> Scroll Horizontally for more colors </Text>
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
    wrapper: {
        backgroundColor: '#fff', 
        marginVertical: 10
    }
});

export default ColorPickerDemo;
