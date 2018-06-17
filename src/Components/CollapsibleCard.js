import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CollapsibleCard extends Component {

    static navigationOptions = {
        title: 'CollapsibleCard'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>CollapsibleCard</Text>
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

export default CollapsibleCard;
