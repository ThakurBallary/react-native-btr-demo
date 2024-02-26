import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import {
  ColorPicker,
  IconPicker,
  ModalInput,
  Separator,
} from "react-native-btr";

export default function ModalInputDemo() {
  const [modalInputVisible, setModalInputVisible] = useState(false);
  const [color, setColor] = useState("");
  const [savedColor, setSavedColor] = useState("");
  const [icon, setIcon] = useState("");
  const [savedIcon, setSavedIcon] = useState("");
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState("");

  function toggle() {
    setModalInputVisible((visible) => !visible);
  }

  function onCancel() {
    setColor(savedColor);
    setIcon(savedIcon);
    setText(savedText);
    toggle();
  }

  function onOk() {
    setSavedColor(color);
    setSavedIcon(icon);
    setSavedText(text);
    toggle();
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          Content inside ModalInput is customizable
        </Text>
        <Text style={styles.text}>Color = {savedColor}</Text>
        <Text style={styles.text}>Icon = {savedIcon}</Text>
        <Text style={styles.text}>Text = {savedText}</Text>
        <Separator />
        <TouchableOpacity onPress={toggle} style={styles.action}>
          <Text>Update Values</Text>
        </TouchableOpacity>
      </View>
      {!!modalInputVisible && (
        <ModalInput onCancel={onCancel} onOk={onOk}>
          <ColorPicker
            selectedColor={color}
            onSelect={(color) => setColor(color)}
          />
          <Separator />
          <IconPicker selectedIcon={icon} onSelect={(icon) => setIcon(icon.name)} />
          <Separator />
          <TextInput
            placeholder="Text"
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
    backgroundColor: "#eee",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 4,
    margin: 16,
  },
  text: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  action: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    marginVertical: 15,
    paddingHorizontal: 10,
  },
});
