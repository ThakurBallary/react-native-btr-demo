import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CollapsibleCard } from "react-native-btr";

export default function CollapsibleCardDemo() {
  return (
    <View style={styles.container}>
      <CollapsibleCard visibleByDefault={true} title="List">
        {["Item 1", "Item 2"].map((item, index) => (
          <View key={item + index} style={{ padding: 16 }}>
            <Text>{item}</Text>
          </View>
        ))}
      </CollapsibleCard>
      <CollapsibleCard visibleByDefault={true} title="Card">
        <View style={styles.content}>
          <Text>Content of CollapsibleCard</Text>
        </View>
      </CollapsibleCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
