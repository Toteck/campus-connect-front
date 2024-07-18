import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "@/screens/Home";
import Login from "@/screens/Login";
import Register from "@/screens/Register";
import Search from "../screens/Search";
import EventScreen from "@/screens/Event";
import MyEvents from "@/screens/MyEvents";
import Profile from "@/screens/Profile";
import ForgotPassword from "@/screens/ForgotPassword";
import ResetPassword from "@/screens/ResetPassword";
import Favorites from "@/screens/Favorites";
import { Event } from "@/entities/Event";

export type PropsNavigationStack = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Search: undefined;
  Event: Event;
  MyEvents: undefined;
  Profile: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Favorites: undefined;
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
        <Stack.Screen name="Event" component={EventScreen} />
        <Stack.Screen name="MyEvents" component={MyEvents} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
