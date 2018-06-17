import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomSheet } from 'react-native-btr';

class BottomSheetDemo extends Component {

    static navigationOptions = {
        title: 'BottomSheet'
    }

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    toggle = () => this.setState({ visible: !this.state.visible });

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggle}>
                    <View style={styles.button}>
                        <Text>Toggle BottomSheet</Text>
                    </View>
                </TouchableOpacity>
                <BottomSheet
                    visible={this.state.visible}
                    onBackButtonPress={this.toggle}
                    onBackdropPress={this.toggle}>
                    <View style={styles.card}>
                        <Text>Place your custom view inside BottomSheet</Text>
                    </View>
                </BottomSheet>
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
    button: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 50,
        padding: 16
    },
    card: {
        backgroundColor: '#fff',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BottomSheetDemo;
