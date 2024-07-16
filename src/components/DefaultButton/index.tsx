import { Text, TouchableOpacity } from "react-native";
import React from "react";

type props = {
  buttonText: string;
  marginVertical: number;
  buttonHandle: Function;
  typeButtonColor?: string;
};

const DefaultButton = ({
  buttonText,
  marginVertical,
  buttonHandle,
  typeButtonColor = "primary",
}: props) => {
  let styleClass = "";

  if (typeButtonColor === "primary") {
    styleClass =
      "w-full items-center p-4 justify-center mx-auto rounded-xl bg-primary mb-4";
  } else if (typeButtonColor === "secondary") {
    styleClass =
      "w-full items-center p-4 justify-center mx-auto rounded-xl bg-secondary mb-4";
  } else if (typeButtonColor === "tertiary") {
    styleClass =
      "w-full items-center p-4 justify-center mx-auto rounded-xl border border-green-700 bg-transparent mb-4";
  }
  return (
    <TouchableOpacity
      onPress={() => {
        buttonHandle();
      }}
      activeOpacity={0.85}
      style={{ marginVertical: marginVertical }}
      className={styleClass}
    >
      <Text
        className="font-heading text-lg"
        style={{ color: typeButtonColor === "tertiary" ? "#052E16" : "#fff" }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
