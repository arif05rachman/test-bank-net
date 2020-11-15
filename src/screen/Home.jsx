import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import DashboardScreen from "./Dashboard";
import TransactionScreen from "./Transaction";
import QrScreen from "./Qr";
import NotificationScreen from "./Notification";
import ProfileScreen from "./Profile";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

export default ({ navigation, route }) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Dashboard") {
              return (
                <Ionicons
                  name="ios-home"
                  size={size}
                  color={focused ? color : "gray"}
                />
              );
            } else if (route.name === "Profil") {
              return (
                <Ionicons
                  name="ios-person"
                  size={size}
                  color={focused ? color : "gray"}
                />
              );
            } else if (route.name === "QR") {
              return (
                <Ionicons
                  name="ios-qr-scanner"
                  size={size}
                  color={focused ? color : "gray"}
                />
              );
            } else if (route.name === "Notification") {
              return (
                <Ionicons
                  name="ios-chatboxes"
                  size={size}
                  color={focused ? color : "gray"}
                />
              );
            } else if (route.name === "Administration") {
              return (
                <Ionicons
                  name="ios-book"
                  size={size}
                  color={focused ? color : "gray"}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Administration" component={TransactionScreen} />
        <Tab.Screen name="QR" component={QrScreen} />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ tabBarBadge: 2}}
        />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};