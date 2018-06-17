import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SnackBar } from 'react-native-btr';

class SnackBarDemo extends Component {

    static navigationOptions = {
        title: 'SnackBar'
    }

    onPress = () => alert('UNDO Pressed');

    render() {
        return (
            <View style={styles.container}>
                <SnackBar text='SnackBar Dude' onPress={this.onPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default SnackBarDemo;