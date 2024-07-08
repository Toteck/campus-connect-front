import { View, Text } from "react-native";
import React from "react";
import { SelectList, SelectListProps } from "react-native-dropdown-select-list";
import Ionicons from "@expo/vector-icons/Ionicons";

const Data = [
  {
    value: "Estudante",
  },
  {
    value: "Professor",
  },
  {
    value: "Pais",
  },
];

const DropDownComponent = ({ setSelected, data, placeholder }: SelectListProps) => {
  return (
    <View className="w-5/6 mx-auto rounded-xl">
      <SelectList
        placeholder={placeholder}
        boxStyles={{ backgroundColor: "#fff" }}
        dropdownStyles={{ backgroundColor: "#fff" }}
        data={data}
        setSelected={setSelected}
        inputStyles={{ color: "#15803D" }}
        search={false}
      />
    </View>
  );
};

export default DropDownComponent;