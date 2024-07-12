import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { EventType } from "@/components/Eventlist";

const cover = require("../../../../assets/images/app-icon.png");

interface DataProps {
  data: EventType;
}

const EventCard = ({ data }: DataProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className="card w-[90%] min-h-fit bg-white rounded-2xl flex-row box-border border border-slate-300"
    >
      <Image
        className="bg-slate-400 w-[40%] h-full object-cover rounded-tl-2xl rounded-bl-2xl"
        source={cover}
      />
      <View className="p-4 flex-1 flex justify-start">
        <Text className="text-lg font-bold mb-2">{data.title}</Text>
        <Text numberOfLines={3} className="text-justify mb-2">
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
