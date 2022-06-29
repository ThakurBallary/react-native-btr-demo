import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconPicker, Icon } from "react-native-btr";

export default function IconPickerDemo() {
  const [selectedIcon, setSelectedIcon] = useState();

  function setIcon(icon: Icon) {
    setSelectedIcon(icon);
  }

  return (
    <View style={styles.container}>
      <Text>Selected Icon = {selectedIcon?.type}: {selectedIcon?.name}</Text>
      <View style={styles.wrapper}>
        <IconPicker selectedIcon={selectedIcon} onSelect={setIcon} />
      </View>
      <Text> Scroll Horizontally for more Icons </Text>
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
