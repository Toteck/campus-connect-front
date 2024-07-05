import { View, Text } from "react-native";
import React from "react";

import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";


const Search = () => {
  return (
    <View className="flex-1 bg-background">
      <Header />
      <Text>Tela de pesquisa</Text>
      <Navbar />
    </View>
  );
};

export default Search;
