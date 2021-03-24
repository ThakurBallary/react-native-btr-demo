import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { ColorPicker, ModalInput, Separator, Tag } from "react-native-btr";

export default function TagDemo() {
  let [tags, setTags] = useState([
    { name: "tag", color: "#f44", active: false },
    { name: "production", color: "#484", active: false },
  ]);

  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  const removeTag = (index: number) => {
    tags.splice(index, 1);
    setTags([...tags]);
  };

  const toggleTag = (index: number) => {
    const tag = tags[index];
    tag.active = !tag.active;
    setTags([...tags]);
  };

  const toggle = () => setVisible((visible) => !visible);

  const onCancel = () => {
    setColor("");
    setText("");
    toggle();
  };

  const onOk = () => {
    tags = [...tags, { name: text, color, active: false }];
    setTags(tags);
    onCancel();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, margin: 20 }}>Create</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {tags.map((tag, index) => (
          <View key={tag.name + index} style={{ margin: 2 }}>
            <Tag
              name={tag.name}
              style={{
                backgroundColor: tag.color,
                color: "#fff",
                borderRadius: 50,
              }}
              iconRight="cancel"
              onPress={() => removeTag(index)}
            />
          </View>
        ))}
        <View style={{ margin: 2 }}>
          <Tag
            name="add tag"
            iconLeft="add-circle"
            style={{
              backgroundColor: "#0008",
              color: "#fff",
              borderRadius: 50,
            }}
            onPress={toggle}
          />
        </View>
      </View>
      <Text style={{ fontSize: 20, margin: 20 }}>Toggle</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {tags.map((tag, index) => {
          const backgroundColor = tag.active ? tag.color : "#0000";
          const color = tag.active ? "#fff" : tag.color;
          return (
            <View key={tag.name + index} style={{ margin: 2 }}>
              <Tag
                name={tag.name}
                style={{
                  backgroundColor,
                  color,
                  borderWidth: 1,
                  borderRadius: 50,
                }}
                onPress={() => toggleTag(index)}
              />
            </View>
          );
        })}
      </View>
      <Text style={{ fontSize: 20, margin: 20 }}>Read</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {tags
          .filter((tag) => tag.active)
          .map((tag, index) => (
            <View key={tag.name + index} style={{ margin: 2 }}>
              <Tag
                name={tag.name}
                style={{
                  backgroundColor: tag.color,
                  color: "#fff",
                  borderRadius: 50,
                }}
                onPress={() => {}}
              />
            </View>
          ))}
      </View>
      {visible && (
        <ModalInput onCancel={onCancel} onOk={onOk}>
          <ColorPicker
            selectedColor={color}
            onSelect={(color) => setColor(color)}
          />
          <Separator />
          <TextInput
            autoFocus={true}
            placeholder="Tag"
            multiline={true}
            value={text}
            onChangeText={(text) => setText(text)}
            underlineColorAndroid="#0000"
            style={styles.textInput}
          />
        </ModalInput>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    marginVertical: 15,
    paddingHorizontal: 10,
  },
});
