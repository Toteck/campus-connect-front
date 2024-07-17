import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Navbar from "@/components/common/Navbar";
import DefaultTitle from "@/components/common/DefaultTitle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "@/routes";

import EventHeader from "@/components/Event/EventHeader";
import EventImage from "@/components/Event/EventImage";
import EventAction from "@/components/Event/EventAction";
import EventDetails from "@/components/Event/EventDetails";

const statusBarHeight = Constants.statusBarHeight + 15;
const cover = require("../../../assets/images/app-icon.png");

type Props = NativeStackScreenProps<PropsNavigationStack, "Event">;

const Event = ({ route }: Props) => {
  const { params } = route;
  console.log({ params });
  return (
    <>
      <ScrollView
        className="w-full bg-background"
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: statusBarHeight }}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 150,
        }}
      >
        <DefaultTitle title={params.event_type} />

        <View className="w-[90%] space-y-8 mt-4">
          <EventHeader publishedData={params.created_at} />
          <EventImage source={cover} />

          <View className="flex-row justify-between mt-8">
            <EventAction
              onPress={() => {
                Alert.alert("Você curtiu o post!");
              }}
            >
              <Ionicons name="heart-outline" size={32} color="#2F855A" />
            </EventAction>
            <EventAction onPress={() => {}}>
              <Ionicons name="share-social-outline" size={32} color="#2F855A" />
            </EventAction>
          </View>
          <EventDetails title={params.title} description={params.description} />
        </View>
      </ScrollView>
      <Navbar />
    </>
  );
};

export default Event;
