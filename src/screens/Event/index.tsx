import { View, ScrollView, Alert, Share } from "react-native";
import React from "react";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Navbar from "@/components/common/Navbar";
import DefaultTitle from "@/components/common/DefaultTitle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "@/routes";

import EventHeader from "@/components/Event/EventHeader";

import EventAction from "@/components/Event/EventAction";
import EventDetails from "@/components/Event/EventDetails";
import getDate from "@/utils/getDate";
import EventImage from "@/components/Event/EventImage";

const statusBarHeight = Constants.statusBarHeight + 15;
const cover = require("../../../assets/images/app-icon.png");

type Props = NativeStackScreenProps<PropsNavigationStack, "Event">;

const Event = ({ route }: Props) => {
  const { params } = route;

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Confira este evento: ${params.title}\n\n${
          params.description
        }\n\nPublicado em: ${getDate(params.created_at)}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Compartilhado com sucesso");
        } else {
          console.log("Conteúdo compartilhado");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Compartilhamento cancelado");
      }
    } catch (error) {
      Alert.alert("Erro ao compartilhar", error.message);
    }
  };
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
        <DefaultTitle
          title={
            params.event_type.charAt(0).toUpperCase() +
            params.event_type.slice(1)
          }
        />

        <View className="w-[90%] space-y-8 mt-4">
          <EventHeader publishedData={params.created_at} />
          <EventImage source={cover} />

          <View className="flex-row justify-between mt-8">
            <EventAction
              onPress={() => {
                Alert.alert("Você curtiu o post!");
              }}
            >
              <Ionicons name="heart-outline" size={32} color="#2F855A" />
            </EventAction>
            <EventAction onPress={handleShare}>
              <Ionicons name="share-social-outline" size={32} color="#2F855A" />
            </EventAction>
          </View>
          <EventDetails title={params.title} description={params.description} />
        </View>
      </ScrollView>
      <Navbar />
    </>
  );
};

export default Event;
