import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { RadioGroup, RadioButtonProps } from "react-native-btr";

export default function RadioGroupDemo() {
  const [radioButtonsVertical, setRadioButtonsVertical] = useState<
    RadioButtonProps[]
  >([
    {
      id: "1",
      label: "Default",
    },
    {
      id: "2",
      label: "In-Progress",
      selected: true,
      color: "#f84",
    },
    {
      id: "3",
      label: "Completed",
      color: "#484",
    },
  ]);
  const [radioButtonsHorizontal, setRadioButtonsHorizontal] = useState<
    RadioButtonProps[]
  >([
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
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <RadioGroup
          radioButtons={radioButtonsVertical}
          onPress={(radioButtonsVertical: RadioButtonProps[]) =>
            setRadioButtonsVertical(radioButtonsVertical)
          }
        />
      </View>
      <View style={styles.card}>
        <RadioGroup
          radioButtons={radioButtonsHorizontal}
          onPress={(radioButtonsHorizontal: RadioButtonProps[]) =>
            setRadioButtonsHorizontal(radioButtonsHorizontal)
          }
          layout="row"
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
  },
});
