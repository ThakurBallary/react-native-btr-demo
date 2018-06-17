import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableHighlight } from 'react-native';
import { Separator } from 'react-native-btr';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const COMPONENTS = [
    { title: 'BottomSheet', icon: 'border-bottom' },
    { title: 'CheckBox', icon: 'checkbox-marked' },
    { title: 'CollapsibleCard', icon: 'border-horizontal'}, 
    { title: 'ColorPicker', icon: 'palette' },
    { title: 'IconPicker', icon: 'select-all' },
    { title: 'ModalInput', icon: 'relative-scale' },
    { title: 'RadioButton', icon: 'radiobox-marked' },
    { title: 'RadioGroup', icon: 'checkbox-blank-circle-outline' },
    { title: 'Separator', icon: 'minus' },
    { title: 'SnackBar', icon: 'cellphone-android' },
    { title: 'Tag', icon: 'tag' }
]

class Home extends Component {

    static navigationOptions = {
        title: 'Components'
    }

    renderItem = ({item}) => 
        <TouchableHighlight onPress={() => this.props.navigation.navigate(item.title)}>
            <View style={styles.itemContainer}>
                <Icon name={item.icon} style={styles.iconLeft} />
                <Text style={styles.title}>{item.title}</Text>
                <Icon name='chevron-right' style={styles.iconRight} />
            </View>
        </TouchableHighlight>

    keyExtractor = (item, index) => item.title + index;

    render() {        
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <FlatList 
                    data={COMPONENTS}
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
    },
    itemContainer: {
        backgroundColor: '#fff', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        padding: 18
    },
    iconLeft: {
        fontSize: 24,
    },
    title: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 2,
    },
    iconRight: {
        color: '#ccc', 
        fontSize: 20
    }
});

export default Home;
