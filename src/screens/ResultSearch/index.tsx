import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DefaultTitle from "@/components/common/DefaultTitle";

const ResultSearch = () => {
  return (
    <SafeAreaView>
      <DefaultTitle title="Resultados da busca" />
    </SafeAreaView>
  );
};

export default ResultSearch;
