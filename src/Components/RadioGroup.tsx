import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { RadioGroup, RadioButtonProps } from "react-native-btr";

const radioButtonsVertical: RadioButtonProps[] = [
  {
    id: "1",
    label: "Default",
  },
  {
    id: "2",
    label: "In-Progress",
    color: "#f84",
  },
  {
    id: "3",
    label: "Completed",
    color: "#484",
  },
];

const radioButtonsHorizontal: RadioButtonProps[] = [
  {
    id: "4",
    label: "In-Progress",
    layout: "column",
  },
  {
    id: "5",
    label: "Completed",
    layout: "column",
  },
];

export default function RadioGroupDemo() {
  const [selectedIdVertical, setSelectedIdVertical] = useState<string>('2');
  const [selectedIdHorizontal, setSelectedIdHorizontal] = useState<string>('');

  const onPressRadioButtonsVertical = (id: string) => {
    setSelectedIdVertical(id);
  }

  const onPressRadioButtonsHorizontal = (id: string) => {
    setSelectedIdHorizontal(id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <RadioGroup
          radioButtons={radioButtonsVertical}
          onPress={onPressRadioButtonsVertical}
          selectedId={selectedIdVertical}
        />
      </View>
      <View style={styles.card}>
        <RadioGroup
          radioButtons={radioButtonsHorizontal}
          onPress={onPressRadioButtonsHorizontal}
          layout="row"
          selectedId={selectedIdHorizontal}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 4,
    margin: 20,
    padding: 20,
    alignItems: 'center',
  },
});
