import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ColorPicker, IconPicker, ModalInput, Separator } from 'react-native-btr';

class ModalInputDemo extends Component {

    static navigationOptions = {
        title: 'ModalInput'
    }

    state = {
        modalInputVisible: false,
        color: '',
        savedColor: '',
        icon: '',
        savedIcon: '',
        text: '',
        savedText: '',
    };

    toggle = () => this.setState({ modalInputVisible: !this.state.modalInputVisible });

    onCancel = () => {
        const { savedColor, savedIcon, savedText } = this.state;
        this.setState({
            color: savedColor,
            icon: savedIcon,
            text: savedText,
        });
        this.toggle();
    };

    onOk = () => {
        const { color, icon, text } = this.state;
        this.setState({
            savedColor: color,
            savedIcon: icon,
            savedText: text,
        });
        this.toggle();
    };

    render() {
        const { modalInputVisible, color, icon, text, savedColor, savedIcon, savedText } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.text}>Content inside ModalInput is customizable</Text>
                    <Text style={styles.text}>Color = {savedColor}</Text>
                    <Text style={styles.text}>Icon = {savedIcon}</Text>
                    <Text style={styles.text}>Text = {savedText}</Text>
                    <Separator />
                    <TouchableOpacity onPress={this.toggle} style={styles.action}>
                        <Text>Update Values</Text>
                    </TouchableOpacity>
                </View>
                {modalInputVisible &&
                    <ModalInput onCancel={this.onCancel} onOk={this.onOk}>
                        <ColorPicker
                            selectedColor={color}
                            onSelect={color => this.setState({ color })}
                        />
                        <Separator />
                        <IconPicker
                            selectedIcon={icon}
                            onSelect={icon => this.setState({ icon })}
                        />
                        <Separator />
                        <TextInput
                            placeholder="Text"
                            multiline={true}
                            value={text}
                            onChangeText={text => this.setState({ text })}
                            underlineColorAndroid="#0000"
                            style={styles.textInput}
                        />
                    </ModalInput>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    card: {
        backgroundColor: '#fff', 
        borderRadius: 4, 
        margin: 16
    },
    text: {
        paddingHorizontal: 16, 
        paddingVertical: 8
    },
    action: {
        height: 56, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        marginVertical: 15,
        paddingHorizontal: 10,
    },
});

export default ModalInputDemo;