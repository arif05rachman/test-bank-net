import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Lorem ipsum dolor, sit amet consectetur....",
    date: "2020-11-11",
    read: true,
  },
  {
    id: "2",
    title: "Lorem ipsum dolor, sit amet consectetur....",
    date: "2020-11-12",
    read: true,
  },
  {
    id: "3",
    title: "Lorem ipsum dolor, sit amet consectetur....",
    date: "2020-11-13",
    read: true,
  },
  {
    id: "4",
    title: "Lorem ipsum dolor, sit amet consectetur....",
    date: "2020-11-14",
    read: false,
  },
  {
    id: "5",
    title: "Lorem ipsum dolor, sit amet consectetur....",
    date: "2020-11-14",
    read: false,
  },
];

const Item = ({ title, date, read }) => (
  <View style={styles.item}>
    <Text style={read?styles.title:styles.titleBold}>{title}</Text>
    <Text style={styles.date}>{date}</Text>
  </View>
);

export default () => {
  const renderItem = ({ item }) => (
    <>
      <Item title={item.title} date={item.date} read={item.read} />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    backgroundColor: "#bfbdc1",
    padding: 5,
    marginVertical: 1,
    // marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
  },
  titleBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 10,
  },
});
