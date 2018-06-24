import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Separator } from 'react-native-btr';

class SeparatorDemo extends Component {

    static navigationOptions = {
        title: 'Separator'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.text}>
                        <Text>Header</Text>
                    </View>
                    <Separator size={2} color='#484' />
                    <View style={styles.body}>
                        <Text>Body</Text>
                    </View>
                    <Separator />
                    <View style={styles.text}>
                        <Text>Footer</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff', 
        margin: 16,
        padding: 16
    },
    body: {
        height: 64,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginVertical: 8
    }
});

export default SeparatorDemo;
