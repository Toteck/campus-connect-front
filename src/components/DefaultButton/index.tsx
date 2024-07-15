import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import React from "react";

type props = {
  buttonText: string;
  primaryButton: boolean;
  marginVertical: number;
  buttonHandle: Function;
};

const DefaultButton = ({
  buttonText,
  primaryButton,
  marginVertical,
  buttonHandle,
}: props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        buttonHandle();
      }}
      activeOpacity={0.85}
      style={{ marginVertical: marginVertical }}
      className={`w-full items-center p-4 justify-center mx-auto rounded-xl ${
        primaryButton ? "bg-primary" : "bg-secondary"
      }`}
    >
      <Text className="font-heading text-lg" style={{ color: "#fff" }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
