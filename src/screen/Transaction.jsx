import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <TouchableOpacity style={styles.menu}>
          <Ionicons name="ios-key" size={60} style={styles.icon} />
          <Text style={{ textAlign: "center", marginTop: -5 }}>Change Pin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Ionicons name="ios-lock" size={60} style={styles.icon} />
          <Text style={{ textAlign: "center", marginTop: -5 }}>Config Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Ionicons name="ios-card" size={60} style={styles.icon} />
          <Text style={{ textAlign: "center", marginTop: -5 }}>Block Acount</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
  },
  containerWelcome: {
    marginHorizontal: 30,
    marginVertical: 30,
  },
  welcome: {
    fontStyle: "normal",
    color: "#fff",
    fontSize: 15,
  },
  name: {
    fontSize: 20,
    color: "#fff",
  },
  saldo: {
    fontSize: 18,
    color: "#fff",
  },
  containerMenu: {
    flex: 1,
    borderTopWidth: 2,
    borderRadius: 10,
    borderColor: "#fff",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    // alignItems: "center"
    alignContent: "flex-start",
  },
  menu: {
    textAlign: "center",
    justifyContent: "center",
    // margin: 1,
    // padding: 1,
    backgroundColor: "#fff",
    // color: "#000",
    marginBottom: 10,
    borderRadius: 25,
    width: 100,
    height: 100,
  },
  icon: {
    textAlign: "center",
    color: "#e6530d",
  },
});
