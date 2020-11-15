import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/Router"
export default function App(){
  return (
    <NavigationContainer>
      <Router></Router>
    </NavigationContainer>
  );
}
