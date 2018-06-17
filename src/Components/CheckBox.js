import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CheckBox, Separator } from 'react-native-btr';

class CheckBoxDemo extends Component {

    static navigationOptions = {
        title: 'CheckBox'
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: 'Default' },
                { title: 'Colored', checked: true, color: '#08f' },
                { title: 'Disabled', checked: true, disabled: true }
            ]
        }
    }

    toggle = index => {
        const data = [...this.state.data];
        const item = data[index];        
        item.checked = !item.checked;
        this.setState({ data });
    }

    renderItem = ({item, index}) => 
        <View style={styles.row}>
            <CheckBox 
                checked={item.checked} 
                color={item.color}
                disabled={item.disabled}
                onPress={()=>this.toggle(index)} 
            />
            <Text style={styles.label}>{item.title}</Text>
        </View>

    keyExtractor = (item, index) => item.title + index;

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.data}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    ItemSeparatorComponent={() => <Separator/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 16
    },
    label: {
        flex: 1,
        paddingHorizontal: 16
    }
});

export default CheckBoxDemo;
