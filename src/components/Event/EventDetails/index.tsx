import { View, Text } from "react-native";
import React from "react";

interface EventDetailsProps {
  title: string;
  description: string;
}

const EventDetails = ({ title, description }: EventDetailsProps) => {
  return (
    <>
      <View className="flex-row justify-between items-center mt-8">
        <Text className="text-2xl text-green-900 font-heading">{title}</Text>
      </View>
      <View className="mt-6">
        <Text className="text-lg font-body text-justify text-gray-800">
          {description}
        </Text>
      </View>
    </>
  );
};

export default EventDetails;
