import { View, Text, TextInput } from "react-native";
import React from "react";

interface InputProps {
  label: string;
  value: string;
  handleInput: () => void;
}

const InputText = ({ label, value, handleInput }: InputProps) => {
  return (
    <View className="w-full ">
      <Text className="mb-2">{label}</Text>
      <TextInput
        className="form-input mb-10 rounded-xl"
        placeholder="Email"
        placeholderTextColor={"gray"}
        value={value}
        onChangeText={handleInput}
      />
    </View>
  );
};

export default InputText;
