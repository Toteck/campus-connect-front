import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import BackIcon from "@/components/common/Backicon";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Navbar from "@/components/common/Navbar";
import DefaultTitle from "@/components/common/DefaultTitle";

const statusBarHeight = Constants.statusBarHeight + 15;
const cover = require("../../../assets/images/app-icon.png");
const Event = () => {
  return (
    <>
      <ScrollView
        style={{
          paddingTop: statusBarHeight,
        }}
        contentContainerStyle={{
          justifyContent: "space-between",
          rowGap: 15,
          paddingBottom: 150,
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 15,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 14,
        }}
        className="flex-1 bg-background"
      >
        <DefaultTitle title="Notícia" />

        <View className="w-[90%] justify-between">
          <Text className="text-slate-400">16/07/2024</Text>
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
        </View>

        <View className=" flex-row justify-between items-center ">
          <Text className="text-2xl text-green-900 font-heading">
            EDITAL PRPGI Nº 33/2023 - PIBITI ENSINO SUPERIOR
          </Text>
        </View>
        <View className="">
          <Text className="text-lg font-body text-justify">
            Edital contendo as normas e procedimentos para as inscrições,
            seleção e classificação dos candidatos ao Programa de Bolsas de
            Iniciação em Desenvolvimento Tecnológico e Inovação do Ensino
            Superior (PIBITI Ensino Superior), vigência 2023/2024. Edital
            contendo as normas e procedimentos para as inscrições, seleção e
            classificação dos candidatos ao Programa de Bolsas de Iniciação em
            Desenvolvimento Tecnológico e Inovação do Ensino Superior (PIBITI
            Ensino Superior), vigência 2023/2024.
          </Text>
        </View>
        <TouchableOpacity className="flex-row gap-x-2 items-center">
          <Ionicons name="document-outline" size={32} color="green" />
          <Text>Edital PRPGI Nº 33/2023</Text>
        </TouchableOpacity>
      </ScrollView>
      <Navbar />
    </>
  );
};

export default Event;
