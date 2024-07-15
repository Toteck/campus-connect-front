import { View, Text } from "react-native";
import React from "react";
import Constants from "expo-constants";
import BackIcon from "@/components/common/Backicon";
import Navbar from "@/components/common/Navbar";

const statusBarHeight = Constants.statusBarHeight + 15;

const Profile = () => {
  return (
    <View className="flex-1 bg-background items-center">
      <View
        className="flex-row w-full mb-10 border border-red-500"
        style={{ paddingTop: statusBarHeight, paddingHorizontal: 20 }}
      >
        <BackIcon marginLeft={0} />
        <Text className="border border-red-500 text-4xl font-semibold ml-28 text-green-900">
          Meu Perfil
        </Text>
      </View>
      <Navbar />
    </View>
  );
};

export default Profile;
