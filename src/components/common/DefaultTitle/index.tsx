import { View, Text } from "react-native";
import React from "react";
import BackIcon from "../Backicon";

interface DefaultTitleProps {
  title: string;
}

const EmptyView = () => {
  return <View style={{ width: 40, height: 40 }} className=""></View>;
};

const DefaultTitle = ({ title }: DefaultTitleProps) => {
  return (
    <View className="w-[90%] flex-row items-center justify-between my-0 mx-5">
      <BackIcon marginLeft={0} />
      <Text className="text-2xl font-semibold text-green-900">{title}</Text>
      <EmptyView />
    </View>
  );
};

export default DefaultTitle;
