import { TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "@/routes";
import Ionicons from "@expo/vector-icons/Ionicons";

const back = require("../../../../assets/icons/back-arrow.png");

type props = {
  marginLeft: number;
};

const BackIcon = ({ marginLeft }: props) => {
  const navigation = useNavigation<PropsStack>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Ionicons
        style={{ marginLeft: marginLeft }}
        name="arrow-back"
        size={32}
        color="#15803D"
      />
    </TouchableOpacity>
  );
};

export default BackIcon;
