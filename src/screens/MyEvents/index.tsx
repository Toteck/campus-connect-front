import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import BackIcon from "@/components/common/Backicon";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const statusBarHeight = Constants.statusBarHeight + 15;
const cover = require("../../../assets/images/app-icon.png");
const MyEvents = () => {
  return (
    <View>
      <View style={{ paddingTop: statusBarHeight, paddingHorizontal: 20 }}>
        <BackIcon marginLeft={0} />
        <Text>Meus eventos</Text>
      </View>
      {/* <FlatList /> */}
    </View>
  );
};

export default MyEvents;
