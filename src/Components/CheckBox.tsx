import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CheckBox, Separator } from "react-native-btr";

export default function CheckBoxDemo() {
  const [data, setData] = useState([
    { title: "Default" },
    { title: "Colored", checked: true, color: "#08f" },
    { title: "Disabled", checked: true, disabled: true },
  ]);

  function toggle(index: number) {
    const item = data[index];
    item.checked = !item.checked;
    setData([...data]);
  }

  const renderItem = ({ item, index }: any) => (
    <View style={styles.row}>
      <CheckBox
        checked={item.checked}
        color={item.color}
        disabled={item.disabled}
        onPress={() => toggle(index)}
      />
      <Text style={styles.label}>{item.title}</Text>
    </View>
  );

  const keyExtractor = (item: any, index: number) => item.title + index;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 16,
  },
  label: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
