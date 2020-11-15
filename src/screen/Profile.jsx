import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default ({ navigation, route }) => {
  const [rek, setRek] = useState("1234567890");
  const handleChange = (e) => {
    setRek(e)
  }
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 16, color: "#fff" }}>
          Change Account
        </Text>
        <Picker
          style={{ color: "#fff" }}
          selectedValue={rek}
          style={{ height: 50, width: 200 }}
          onValueChange={handleChange}
        >
          <Picker.Item
            style={{ color: "#fff" }}
            label="1234567890"
            value="1234567890"
          />
          <Picker.Item
            style={{ color: "#fff" }}
            label="0987654321"
            value="0987654321"
          />
        </Picker>
      </View>
      <View>
        <Ionicons name="ios-card" size={300} color="#fff" />
        <Text style={{backgroundColor: "#fff", color: "#000", paddingHorizontal: 10, paddingVertical: 5, fontSize: 18, borderRadius: 10}}>{ rek }</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#003f5c",
    alignItems: "center",
    // justifyContent: "center",
  },
});
