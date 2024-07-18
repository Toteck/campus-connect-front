import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DefaultTitle from "@/components/common/DefaultTitle";

const Favorites = () => {
  return (
    <SafeAreaView>
      <DefaultTitle title="Eventos salvos" />
    </SafeAreaView>
  );
};

export default Favorites;
