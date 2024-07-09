import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "@/routes";
import Ionicons from "@expo/vector-icons/Ionicons";

const Navbar = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <View className="w-full h-20 bg-navigationBar border-r-red-600  absolute bottom-0 flex-row justify-between items-center py-0 px-8">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="home" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <Ionicons name="search" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="star" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="person" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
