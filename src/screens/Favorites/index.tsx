import { View, Text } from "react-native";
import React from "react";

import DefaultTitle from "@/components/common/DefaultTitle";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoritesList from "@/components/FavoritesList";

const Favorites = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <DefaultTitle title="Eventos salvos" />
      <FavoritesList />
    </SafeAreaView>
  );
};

export default Favorites;
