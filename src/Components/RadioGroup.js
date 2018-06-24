import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioGroup } from 'react-native-btr';

class RadioGroupDemo extends Component {

    static navigationOptions = {
        title: 'RadioGroup'
    }

    state = {
        radioButtonsVertical: [
            {
                label: 'Default',
            },
            {
                label: 'In-Progress',
                checked: true,
                color: '#f84'
            },
            {
                label: 'Completed',
                color: '#484'
            },
        ],
        radioButtonsHorizontal: [
            {
                label: 'In-Progress',
                flexDirection: 'column'
            },
            {
                label: 'Completed',
                flexDirection: 'column'
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <RadioGroup
                        labelStyle={{ fontSize: 14 }}
                        radioButtons={this.state.radioButtonsVertical}
                        onPress={radioButtonsVertical => this.setState({ radioButtonsVertical })}                        
                    />
                </View>
                <View style={styles.card}>
                    <RadioGroup
                        labelStyle={{ fontSize: 14 }}
                        radioButtons={this.state.radioButtonsHorizontal}
                        onPress={radioButtonsHorizontal => this.setState({ radioButtonsHorizontal })}
                        style={{ flexDirection: 'row', alignSelf: 'center' }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 4,
        margin: 20,
        padding: 20
    }
});

export default RadioGroupDemo;