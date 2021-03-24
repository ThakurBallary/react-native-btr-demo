import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { Separator } from "react-native-btr";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

type Component = {
  title: string;
  icon: string;
};

const COMPONENTS = [
  { title: "BottomSheet", icon: "border-bottom" },
  { title: "CheckBox", icon: "checkbox-marked" },
  { title: "CollapsibleCard", icon: "border-horizontal" },
  { title: "ColorPicker", icon: "palette" },
  { title: "IconPicker", icon: "select-all" },
  { title: "ModalInput", icon: "relative-scale" },
  { title: "RadioGroup", icon: "checkbox-blank-circle-outline" },
  { title: "Separator", icon: "minus" },
  { title: "Tag", icon: "tag" },
];

const Home = ({ navigation }: any) => {
  const renderItem = ({ item }: { item: Component }) => (
    <TouchableHighlight onPress={() => navigation.navigate(item.title)}>
      <View style={styles.itemContainer}>
        <Icon name={item.icon} style={styles.iconLeft} />
        <Text style={styles.title}>{item.title}</Text>
        <Icon name="chevron-right" style={styles.iconRight} />
      </View>
    </TouchableHighlight>
  );

  const keyExtractor = (item: Component) => item.title;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={COMPONENTS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    padding: 18,
  },
  iconLeft: {
    fontSize: 24,
  },
  title: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 2,
  },
  iconRight: {
    color: "#ccc",
    fontSize: 20,
  },
});

Home.navigationOptions = {
  title: "Components",
};

export default Home;
