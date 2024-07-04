import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
      className={`w-full min-h-[40px] items-center justify-center mx-auto rounded ${
        primaryButton ? "bg-primaryButton" : "bg-secondaryButton"
      }`}
    >
      <Text className="font-heading" style={{ color: "#fff" }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
