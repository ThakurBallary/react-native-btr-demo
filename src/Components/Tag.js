import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ColorPicker, ModalInput, Separator, Tag } from 'react-native-btr';

class TagDemo extends Component {

    static navigationOptions = {
        title: 'Tag'
    }

    state = {
        tags: [
            { name: 'tag', color: '#f44', active: false },
            { name: 'production', color: '#484', active: false },
        ],
        modalInputVisible: false,
        color: '',
        text: '',
    }

    removeTag = index => {
        const tags = this.state.tags;
        tags.splice(index, 1);
        this.setState({ tags });
    };

    toggleTag = index => {
        const tags = this.state.tags;
        const tag = tags[index];
        tag.active = !tag.active;
        this.setState({ tags });
    };

    toggle = () => this.setState({ modalInputVisible: !this.state.modalInputVisible });

    onCancel = () => {
        this.setState({
            color: '',
            text: '',
        });
        this.toggle();
    };

    onOk = () => {
        let { color, text, tags } = this.state;
        tags = [...tags, { name: text, color, active: false }]
        this.setState({ tags, color: '', text: '' });
        this.toggle();
    };

    render() {
        const { modalInputVisible, color, icon, text } = this.state;
        return (
            <View style={styles.container}>
                {/* Create */}
                <Text style={{ fontSize: 20, margin: 20 }}>Create</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.state.tags.map((tag, index) => (
                        <View key={tag.name + index} style={{ margin: 2 }}>
                            <Tag
                                name={tag.name}
                                style={{ backgroundColor: tag.color, color: '#fff', borderRadius: 50 }}
                                iconRight="cancel"
                                onPress={() => this.removeTag(index)}
                            />
                        </View>
                    ))}
                    <View style={{ margin: 2 }}>
                        <Tag
                            name="add tag"
                            iconLeft="add-circle"
                            style={{ backgroundColor: "#0008", color: '#fff', borderRadius: 50 }}
                            onPress={this.toggle}
                        />
                    </View>
                </View>
                {/* Toggle */}
                <Text style={{ fontSize: 20, margin: 20 }}>Toggle</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.state.tags.map((tag, index) => {
                        const backgroundColor = tag.active ? tag.color : '#0000';
                        const color = tag.active ? '#fff' : tag.color;
                        return (
                            <View key={tag.name + index} style={{ margin: 2 }}>
                                <Tag
                                    name={tag.name}
                                    style={{ backgroundColor, color, borderWidth: 1, borderRadius: 50 }}
                                    onPress={() => this.toggleTag(index)}
                                />
                            </View>
                        );
                    })}
                </View>
                {/* Read */}
                <Text style={{ fontSize: 20, margin: 20 }}>Read</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.state.tags.filter(tag => tag.active).map((tag, index) => (
                        <View key={tag.name + index} style={{ margin: 2 }}>
                            <Tag
                                name={tag.name}
                                style={{ backgroundColor: tag.color, color: '#fff', borderRadius: 50 }}
                                onPress={() => { }}
                            />
                        </View>
                    ))}
                </View>
                {modalInputVisible &&
                    <ModalInput onCancel={this.onCancel} onOk={this.onOk}>
                        <ColorPicker
                            selectedColor={color}
                            onSelect={color => this.setState({ color })}
                        />
                        <Separator />
                        <TextInput
                            autoFocus={true}
                            placeholder="Tag"
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
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        marginVertical: 15,
        paddingHorizontal: 10,
    },
});

export default TagDemo;
