import { View, Image } from "react-native";
import React from "react";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight + 20;

const logo = require("../../../assets/images/logo.png");

const Login = () => {
  return (
    <View
      style={{ paddingTop: statusBarHeight }}
      className="flex-1 bg-background"
    >
      <Image
        resizeMode="contain"
        source={logo}
        className="w-56 h-56 my-0 mx-auto"
      />
    </View>
  );
};

export default Login;
