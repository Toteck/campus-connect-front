import { View, Text } from "react-native";
import React from "react";
import getDate from "@/utils/getDate";

interface EventHeaderProps {
  publishedData: string;
}

const EventHeader = ({ publishedData }: EventHeaderProps) => {
  return (
    <Text className="text-gray-700 mb-2">
      Publicado em: {getDate(publishedData)}
    </Text>
  );
};

export default EventHeader;
