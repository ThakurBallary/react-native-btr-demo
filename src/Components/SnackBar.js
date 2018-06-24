import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SnackBar } from 'react-native-btr';

class SnackBarDemo extends Component {

    static navigationOptions = {
        title: 'SnackBar'
    }

    state = {
        visible: false
    }

    onPress = () => this.setState({visible: !this.state.visible});

    render() {
        return (
            <View style={styles.container}>
                <SnackBar text='Will close only onPress of action' duration={0} actionText='NEXT' onPress={this.onPress} />
                { this.state.visible && <SnackBar text='Will close in 5 seconds' onPress={()=>alert('5 seconds SnackBar')} /> }
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