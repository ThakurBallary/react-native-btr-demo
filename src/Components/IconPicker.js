import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconPicker } from 'react-native-btr';

class IconPickerDemo extends Component {
    
    static navigationOptions = {
        title: 'IconPicker'
    }

    state = {
        selectedIcon: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Selected Icon = {this.state.selectedIcon}</Text>
                <View style={styles.wrapper}>
                    <IconPicker
                        selectedIcon={this.state.selectedIcon}
                        onSelect={selectedIcon => this.setState({ selectedIcon })}
                    />
                </View>
                <Text> Scroll Horizontally for more Icons </Text>
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

export default IconPickerDemo;
