import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TagDemo extends Component {

    static navigationOptions = {
        title: 'Tag'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tag</Text>
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

export default TagDemo;
