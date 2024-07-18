import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "@/routes";
import { Event } from "@/entities/Event";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Alert } from "react-native";
interface DataProps {
  data: Event;
}
const logo = require("../../../../assets/images/logo.png");
const FavoriteCard = ({ data }: DataProps) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => {
        navigation.navigate("Event", {
          ...data,
        });
      }}
    >
      {logo ? (
        <Image source={logo} style={styles.image} />
      ) : (
        <View style={styles.imageFallback}>
          <Text style={styles.imageFallbackText}>
            {data.event_type.charAt(0).toUpperCase() + data.event_type.slice(1)}
          </Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => {
          Alert.alert("Você descurtiu o post");
        }}
      >
        <Ionicons className="pl-4" name="heart" size={30} color="green" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    justifyContent: "space-between",
  },
  image: {
    width: "auto",
    height: 150,
    resizeMode: "cover",
  },
  imageFallback: {
    width: "auto",
    height: 150,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
  },
  imageFallbackText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default FavoriteCard;
