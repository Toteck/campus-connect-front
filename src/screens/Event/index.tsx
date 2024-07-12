import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import BackIcon from "@/components/common/Backicon";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const statusBarHeight = Constants.statusBarHeight + 15;
const cover = require("../../../assets/images/app-icon.png");
const Event = () => {
  return (
    <ScrollView
      style={{ paddingTop: statusBarHeight, paddingHorizontal: 20 }}
      contentContainerStyle={{
        justifyContent: "space-between",
        rowGap: 15,
        paddingBottom: 80,
      }}
      className="flex-1 bg-background"
    >
      <BackIcon marginLeft={0} />
      <View className="border border-gray-300 w-full items-center rounded-md ">
        <Image
          source={cover}
          resizeMode="cover"
          className="w-full h-96 rounded-xl"
        />
      </View>

      <View className="flex-row justify-between">
        <TouchableOpacity className="">
          <Ionicons name="heart-outline" size={32} color="green" />
        </TouchableOpacity>
        <TouchableOpacity className="">
          <Ionicons name="share-social-outline" size={32} color="green" />
        </TouchableOpacity>
      </View>

      <View className=" flex-row justify-between items-center ">
        <Text className="text-xl font-heading">
          EDITAL PRPGI Nº 33/2023 - PIBITI ENSINO SUPERIOR
        </Text>
      </View>
      <View className="">
        <Text className="text-lg font-body text-justify">
          Edital contendo as normas e procedimentos para as inscrições, seleção
          e classificação dos candidatos ao Programa de Bolsas de Iniciação em
          Desenvolvimento Tecnológico e Inovação do Ensino Superior (PIBITI
          Ensino Superior), vigência 2023/2024. Edital contendo as normas e
          procedimentos para as inscrições, seleção e classificação dos
          candidatos ao Programa de Bolsas de Iniciação em Desenvolvimento
          Tecnológico e Inovação do Ensino Superior (PIBITI Ensino Superior),
          vigência 2023/2024.
        </Text>
      </View>
      <TouchableOpacity className="flex-row gap-x-2 items-center">
        <Ionicons name="document-outline" size={32} color="green" />
        <Text>Edital PRPGI Nº 33/2023</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Event;
