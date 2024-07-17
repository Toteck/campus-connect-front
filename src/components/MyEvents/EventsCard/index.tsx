import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Event } from "@/entities/Event";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "@/routes";

const cover = require("../../../../assets/images/app-icon.png");

interface DataProps {
  data: Event;
}

const EventCard = ({ data }: DataProps) => {
  const navigation = useNavigation<PropsStack>();
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      className="card w-[90%] min-h-fit bg-white rounded-2xl p-1 shadow-black shadow flex-row box-border border border-slate-300"
      onPress={() => {
        navigation.navigate("Event", {
          ...data,
        });
      }}
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

const styles = StyleSheet.create({
  card: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
});

export default EventCard;
