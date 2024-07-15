import { View, Text } from "react-native";
import React from "react";
import { SelectList, SelectListProps } from "react-native-dropdown-select-list";
import Ionicons from "@expo/vector-icons/Ionicons";
import { string } from "yup";

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

interface DropDownComponentProps extends SelectListProps {
  enabled?: boolean;
}

const DropDownComponent = ({
  setSelected,
  data,
  placeholder,
  enabled = true,
}: DropDownComponentProps) => {
  const boxStyles = enabled
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "#166534" };
  const dropdownStyles = enabled
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "#166534" };
  const inputStyles = enabled
    ? { color: "#15803D", fontSize: 16 }
    : { color: "#fff", fontSize: 16 };
  const dataset = enabled ? data : [];
  return (
    <View className="w-full smx-auto rounded-xl mb-10">
      <SelectList
        placeholder={placeholder}
        boxStyles={boxStyles}
        dropdownStyles={dropdownStyles}
        data={dataset}
        setSelected={enabled ? setSelected : () => {}}
        inputStyles={inputStyles}
        search={false}
      />
    </View>
  );
};

export default DropDownComponent;
