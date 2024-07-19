import {
  View,
  ViewProps,
  Text,
  TextProps,
  TextInputProps,
  TextInput,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export const SearchInput = ({ onChangeText }: TextInputProps) => {
  return (
    <View className="flex-row w-full justify-between items-center bg-white p-2.5 pr-10 rounded-xl border">
      <TextInput
        className="w-full text-base"
        placeholder="Busque por um evento"
        onChangeText={onChangeText}
      />
      <Ionicons name="search" size={20} color="#15803D" />
    </View>
  );
};

export const NoResult = ({ children }: TextProps) => {
  return (
    <Text className="text-xl font-bold text-center mt-[60%] text-white">
      {children}
    </Text>
  );
};
