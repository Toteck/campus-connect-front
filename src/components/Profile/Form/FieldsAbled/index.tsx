import { View, Text } from "react-native";
import React from "react";
import InputText from "@/components/InputText";
import DefaultButton from "@/components/DefaultButton";
import DropDownComponent from "@/components/common/DropDownComponent";

const FieldsAbled = () => {
  return (
    <View>
      <InputText
        label={"Nome"}
        value={"Mateus"}
        handleInput={() => {}}
        abled={true}
        placeholder={"Nome"}
      />
      <InputText
        label={"Email"}
        value={"mateusweslley14@gmail.com"}
        handleInput={() => {}}
        abled={true}
        placeholder={"Email"}
      />
      <InputText
        label={"Senha"}
        value={"********"}
        handleInput={() => {}}
        abled={true}
        placeholder={"Senha"}
      />
      <InputText
        label={"Nova senha"}
        value={""}
        handleInput={() => {}}
        abled={true}
        placeholder={"Digite a nova senha"}
      />
      <InputText
        label={"Confirme sua nova senha"}
        value={"********"}
        handleInput={() => {}}
        abled={true}
        placeholder={"Confirme a nova senha"}
      />
      <InputText
        label={"Perfil"}
        value={"Aluno"}
        abled={false}
        handleInput={() => {}}
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
          enabled={true}
        />
      </View>
      <View className="w-full justify-between">
        <Text className="mb-2 font-semibold text-lg">Selecione um curso</Text>
        <DropDownComponent
          placeholder="Escolha um curso"
          setSelected={() => {}}
          data={[]}
          enabled={true}
        />
      </View>
      <View className="w-full justify-between">
        <Text className="mb-2 font-semibold text-lg">Selecione uma turma</Text>
        <DropDownComponent
          placeholder="Escolha uma turma"
          setSelected={() => {}}
          data={[]}
          enabled={true}
        />
      </View>
    </View>
  );
};

export default FieldsAbled;
