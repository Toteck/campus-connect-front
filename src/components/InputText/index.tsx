import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TextInputProps,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";

interface InputProps extends TextInputProps {
  label: string;
  value: string;
  abled: boolean;
  handleInput: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const InputText = ({
  label,
  value,
  handleInput,
  abled,
  placeholder,
  ...props
}: InputProps) => {
  const style = abled
    ? "form-input mb-10 rounded-xl"
    : "form-input bg-green-800 mb-10 rounded-xl";
  const { secureTextEntry } = props;
  return (
    <View className="w-full">
      <Text className="mb-2 font-semibold text-lg">{label}</Text>
      <View>
        <TextInput
          className={style}
          style={{ color: abled ? "#15803D" : "#fff" }}
          placeholder={placeholder}
          placeholderTextColor={"#aaa"}
          value={value}
          showSoftInputOnFocus={abled}
          onChangeText={handleInput}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default InputText;
