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

const DropDownComponent = ({ setSelected }: SelectListProps) => {
  return (
    <View className="w-[90%] my-2.5 mx-auto">
      <SelectList
        placeholder="Selecione seu perfil"
        data={Data}
        boxStyles={{borderRadius: 5}}
        setSelected={setSelected}
        inputStyles={{ color: "#15803D" }}
        search={false}
      />
    </View>
  );
};

export default DropDownComponent;