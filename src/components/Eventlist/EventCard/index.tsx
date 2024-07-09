import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { EventType } from '..'
import Ionicons from "@expo/vector-icons/Ionicons";

interface DataProps {
    data: EventType
}

const cover = require("../../../../assets/images/app-icon.png");

const EventCard = ({data}: DataProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => {
        Alert.alert("Navegação para o evento!");
      }}
      className="h-[550px] justify-between  mx-7 bg-white rounded-2xl p-3 shadow-card border border-gray-300 "
    >
      <View className=" w-full items-center rounded-md">
        <Image
          source={cover}
          resizeMode="cover"
          className="w-full h-96 rounded-xl"
        />
      </View>

      <TouchableOpacity>
        <Ionicons name="heart-outline" size={32} color="green" />
      </TouchableOpacity>

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
}

export default EventCard