import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight + 20;

const logo = require("../../../../assets/images/horizontal-logo.png");
const search = require("../../../../assets/icons/search-minor.png");
const Header = () => {
  return (
    <View
      className="flex-col w-full h-24 pt-0 pb-5 justify-between items-center mb-16"
      style={{ paddingTop: statusBarHeight }}
    >
      <Image
        source={logo}
        className="w-[250px] mr-2 "
        style={{ resizeMode: "contain" }}
      />
    </View>
  );
};

export default Header;
