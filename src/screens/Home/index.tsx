import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";

const Home = () => {
  return (
    <View className="flex-1 bg-background h-full">
      <Header />
      <Navbar />
    </View>
  );
};

export default Home;
