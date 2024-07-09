import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "@/screens/Home";
import Login from "@/screens/Login";
import Register from "@/screens/Register";
import Search from "../screens/Search";
import Event from "@/screens/Event";

//const Stack = createNativeStackNavigator();

type PropsNavigationStack = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Search: undefined;
  Event: undefined;
};

const Stack = createNativeStackNavigator<PropsNavigationStack>();

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Event" component={Event} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
