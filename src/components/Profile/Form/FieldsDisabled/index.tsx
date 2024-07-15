import { View, Text } from "react-native";
import React from "react";
import DefaultButton from "@/components/DefaultButton";
import DropDownComponent from "@/components/common/DropDownComponent";
import InputText from "@/components/InputText";

const FieldsDisabled = () => {
  return (
    <View className="w-full">
      <InputText
        label={"Nome"}
        value={"Mateus"}
        handleInput={() => {}}
        abled={false}
        placeholder={""}
      />
      <InputText
        label={"Email"}
        value={"mateusweslley14@gmail.com"}
        handleInput={() => {}}
        abled={false}
        placeholder={""}
      />
      <InputText
        label={"Senha"}
        value={"********"}
        handleInput={() => {}}
        abled={false}
        placeholder={""}
      />
      <View className="w-full justify-between">
        <Text className="mb-2 font-semibold text-lg">
          Selecione uma modalidade
        </Text>
        <DropDownComponent
          placeholder="Escolha uma modalidade"
          setSelected={() => {}}
          data={[]}
          enabled={false}
        />
      </View>
      <View className="w-full justify-between">
        <Text className="mb-2 font-semibold text-lg">Selecione um curso</Text>
        <DropDownComponent
          placeholder="Escolha um curso"
          setSelected={() => {}}
          data={[]}
          enabled={false}
        />
      </View>
      <View className="w-full justify-between">
        <Text className="mb-2 font-semibold text-lg">Selecione uma turma</Text>
        <DropDownComponent
          placeholder="Escolha uma turma"
          setSelected={() => {}}
          data={[]}
          enabled={false}
        />
      </View>
    </View>
  );
};

export default FieldsDisabled;
