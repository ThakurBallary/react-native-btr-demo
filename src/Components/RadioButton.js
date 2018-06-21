import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-btr';

class RadioButtonDemo extends Component {
    
    static navigationOptions = {
        title: 'RadioButton'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold', margin: 20}}>
                    For functionality check 
                    <Text style={{fontSize: 20}}>"RadioGroup"</Text>
                </Text>
                <View style={styles.card}>
                    <View style={styles.row}><RadioButton /><Text style={styles.label}>Default</Text></View>
                    <View style={styles.row}><RadioButton checked={true} /><Text style={styles.label}>checked</Text></View>
                </View>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <RadioButton 
                            checked={true}
                            color='#484'
                            size={14}
                        />
                        <Text style={styles.label}>color & size</Text>
                    </View>
                    <View style={styles.row}>
                        <RadioButton 
                            checked={true}
                            color='#484'
                            disabled={true}
                            flexDirection='column'
                            size={14}
                        />
                        <Text style={styles.label}>disabled</Text>
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
        margin: 20
    },
    card : {
        backgroundColor: '#fff', 
        margin: 10, 
        padding: 10, 
        borderRadius: 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    label: {
        marginHorizontal: 20
    }
});

export default RadioButtonDemo;
