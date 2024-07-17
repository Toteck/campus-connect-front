import { View, Image, ImageSourcePropType } from "react-native";
import React from "react";

interface EventImageProps {
  source: ImageSourcePropType;
}

const EventImage = ({ source }: EventImageProps) => {
  return (
    <View className="border border-gray-400 w-full items-center rounded-md bg-green-50">
      <Image
        source={source}
        resizeMode="cover"
        className="w-full h-96 rounded-xl"
      />
    </View>
  );
};

export default EventImage;
