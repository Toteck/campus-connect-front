import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Share,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "@/routes";
import { Event } from "@/entities/Event";
import getDate from "@/utils/getDate";

interface DataProps {
  data: Event;
}

const cover = require("../../../../assets/images/app-icon.png");

const EventCard = ({ data }: DataProps) => {
  const navigation = useNavigation<PropsStack>();

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Confira este evento: ${data.title}\n\n${
          data.description
        }\n\nPublicado em: ${getDate(data.created_at)}`,
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
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => {
        navigation.navigate("Event", {
          ...data,
        });
      }}
      className="h-[550px] justify-between  mx-7 bg-white rounded-2xl p-3 shadow-card border border-gray-300 "
    >
      <View className=" w-full items-center rounded-md">
        {cover ? (
          <Image
            source={cover}
            resizeMode="cover"
            className="w-full h-96 rounded-xl"
          />
        ) : (
          <View className="w-full h-96 rounded-xl">
            <Text className="bg-[#d3d3d3] justify-center items-center">
              {data.event_type.charAt(0).toUpperCase() +
                data.event_type.slice(1)}
            </Text>
          </View>
        )}
      </View>

      <View className="w-full flex-row justify-between items-center">
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Ionicons name="share-social-outline" size={30} color="green" />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between items-center ">
        <Text className="text-xl font-heading">{data.title}</Text>
      </View>
      <View className="">
        <Text className="text-lg font-body" numberOfLines={3}>
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
