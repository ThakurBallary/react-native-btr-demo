import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioGroup } from 'react-native-btr';

class RadioGroupDemo extends Component {

    static navigationOptions = {
        title: 'RadioGroup'
    }

    state = {
        radioButtons: [
            {
                label: 'Default',
            },
            {
                label: 'In-Progress',
                checked: true,
                color: '#cb8'
            },
            {
                label: 'Completed',
                color: '#484'
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <RadioGroup 
                        labelStyle={{fontSize: 14}}
                        radioButtons={this.state.radioButtons}
                        onPress={radioButtons => this.setState({radioButtons})}
                        style={{flexDirection: 'row'}}
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
