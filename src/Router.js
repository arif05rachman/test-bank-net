import React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "./screen/Login";
import HomeScreen from "./screen/Home";

const Stack = createStackNavigator();

export default function Router({ navigation }) {
  // const nav = useNavigation()
  const handleLogout = () => {
    // withNavigation()
    console.log(navigation);
    // nav.navigate("Login");
    // navigation.navigate("Login");
  };
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          initialParams
          component={LoginScreen}
          options={{
            title: "Please Login",
            headerStyle: {
              backgroundColor: "#e6530d",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Bank Net",
            headerStyle: {
              backgroundColor: "#e6530d",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "left",
            },
            headerLeft: null,
            headerRight: () => (
              <View>
                <Ionicons
                  onPress={handleLogout}
                  name="ios-log-out"
                  size={24}
                  style={styles.logoutBtn}
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: {
    backgroundColor: "#e6530d",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginRight: 10,
  },
});
