import { View, Text } from "react-native";
import React, { useState } from "react";
import FieldsDisabled from "./FieldsDisabled";
import FieldsAbled from "./FieldsAbled";
import DefaultButton from "@/components/DefaultButton";

const Form = () => {
  const [editable, setEditable] = useState(false);
  const handleToggleEditable = () => {
    setEditable(!editable);
  };
  return (
    <View className="w-[90%] my-5 mx-0">
      {!editable ? <FieldsDisabled /> : <FieldsAbled />}
      <DefaultButton
        buttonText={`${!editable ? "Editar" : "Salvar"} meu perfil`}
        marginVertical={10}
        buttonHandle={handleToggleEditable}
        typeButtonColor="secondary"
      />
    </View>
  );
};

export default Form;
