import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ColorPicker } from "react-native-btr";

export default function ColorPickerDemo() {
  const [selectedColor, setSelectedColor] = useState("");
  function setColor(color: string) {
    setSelectedColor(color);
  }
  return (
    <View style={styles.container}>
      <Text>Selected Color = {selectedColor}</Text>
      <View style={styles.wrapper}>
        <ColorPicker selectedColor={selectedColor} onSelect={setColor} />
      </View>
      <Text> Scroll Horizontally for more colors </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    backgroundColor: "#fff",
    marginVertical: 10,
  },
});
