import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BottomSheet } from "react-native-btr";

export default function BottomSheetDemo() {
  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible((visible) => !visible);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggle}>
        <View style={styles.button}>
          <Text>Toggle BottomSheet</Text>
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={styles.card}>
          <Text>Place your custom view inside BottomSheet</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 50,
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});
