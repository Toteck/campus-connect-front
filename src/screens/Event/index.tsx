import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import BackIcon from "@/components/common/Backicon";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Navbar from "@/components/common/Navbar";
import DefaultTitle from "@/components/common/DefaultTitle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "@/routes";
import getDate from "@/utils/getDate";

const statusBarHeight = Constants.statusBarHeight + 15;
const cover = require("../../../assets/images/app-icon.png");

type Props = NativeStackScreenProps<PropsNavigationStack, "Event">;

const Event = ({ route }: Props) => {
  const { params } = route;
  console.log({ params });
  return (
    <>
      <ScrollView
        className="w-full bg-background"
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: statusBarHeight }}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 150,
        }}
      >
        <DefaultTitle title={params.event_type} />

        <View className="w-[90%] space-y-8 mt-4">
          <Text className="text-gray-700 mb-2">
            Publicado em: {getDate(params.created_at)}
          </Text>
          <View className="border border-gray-400 w-full items-center rounded-md bg-green-50">
            <Image
              source={cover}
              resizeMode="cover"
              className="w-full h-96 rounded-xl"
            />
          </View>
          <View className="flex-row justify-between mt-6">
            <TouchableOpacity className="">
              <Ionicons name="heart-outline" size={32} color="#2F855A" />
            </TouchableOpacity>
            <TouchableOpacity className="">
              <Ionicons name="share-social-outline" size={32} color="#2F855A" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center mt-8">
            <Text className="text-2xl text-green-900 font-heading">
              {params.title}
            </Text>
          </View>
          <View className="mt-6">
            <Text className="text-lg font-body text-justify text-gray-800">
              {params.description}
            </Text>
          </View>
          {/* {params.anexos &&
            params.anexos.map((anexo, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row gap-x-2 items-center mt-8"
              >
                <Ionicons name="document-outline" size={32} color="#2F855A" />
                <Text className="text-green-700">{anexo}</Text>
              </TouchableOpacity>
            ))} */}
        </View>
      </ScrollView>
      <Navbar />
    </>
  );
};

export default Event;
