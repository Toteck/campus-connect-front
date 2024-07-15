import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

interface InputProps {
  label: string;
  value: string;
  abled: boolean;
  handleInput: () => void;
  placeholder: string;
}

const InputText = ({
  label,
  value,
  handleInput,
  abled,
  placeholder,
}: InputProps) => {
  const style = abled
    ? "form-input mb-10 rounded-xl"
    : "form-input bg-green-800 mb-10 rounded-xl";
  return (
    <View className="w-full">
      <Text className="mb-2 font-semibold text-lg">{label}</Text>
      <View>
        <TextInput
          className={style}
          style={{ color: abled ? "gray" : "white" }}
          placeholder={placeholder}
          placeholderTextColor={"gray"}
          value={value}
          showSoftInputOnFocus={abled}
          onChangeText={handleInput}
        />
      </View>
    </View>
  );
};

export default InputText;
