import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

const logo = require("../../../../assets/images/horizontal-logo.png");
const search = require("../../../../assets/icons/search-minor.png");
const Header = () => {
  return (
    <View
      className="flex-col w-full h-24 pt-0 pb-5 justify-between items-center"
      style={{ paddingTop: statusBarHeight }}
    >
      <Image
        source={logo}
        className="w-[250px] mr-2 "
        style={{ resizeMode: "contain" }}
      />

      <View
        className="flex-row w-4/5 h-12 
      bg-white rounded
      justify-end items-center mr-2 mt-2
      border-2 border-solid "
      >
        <TextInput
          placeholder="Pesquisar por evento"
          placeholderTextColor={"#052E16"}
          style={{ fontSize: 16 }}
          className="flex-1 py-0.5 text-description px-2.5 w-4/5 h-full"
        />
        <Image source={search} className="w-6 mr-2.5" resizeMode="contain" />
      </View>
    </View>
  );
};

export default Header;
