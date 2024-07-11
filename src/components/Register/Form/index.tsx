import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import DropDownComponent from "@/components/common/DropDownComponent";

const Form = () => {
  const [select, setSelect] = useState("");
  const Data = [
    { value: "Estudante" },
    { value: "Professor" },
    { value: "Pai, Mãe, Responsável legal pelo aluno" },
  ];

  const inputClass = "form-input mb-5 rounded-xl";

  return (
    <View className=" w-full max-w-[90%]">
      <View className="w-full ">
        <Text className="mb-2">Nome</Text>
        <TextInput
          className={inputClass}
          placeholder="Digite seu nome"
          placeholderTextColor={"gray"}
        />
      </View>
      <View className="w-full ">
        <Text className="mb-2">Email</Text>
        <TextInput
          className={inputClass}
          placeholder="Digite seu email"
          placeholderTextColor={"gray"}
        />
      </View>
      <View className="w-full ">
        <Text className="mb-2">Selecione seu perfil</Text>
        <DropDownComponent
          setSelected={setSelect}
          data={Data}
          placeholder="Selecione seu perfil"
        />
      </View>

      <View className="w-full ">
        <Text className="mb-2">Senha</Text>
        <TextInput
          className={inputClass}
          placeholder="Digite sua senha"
          placeholderTextColor={"gray"}
          secureTextEntry
        />
      </View>
      <View className="w-full">
        <Text className="mb-2">Confirme sua senha</Text>
        <TextInput
          className={inputClass}
          placeholder="Digite sua senha novamente"
          placeholderTextColor={"gray"}
          secureTextEntry
        />
      </View>
    </View>
  );
};

export default Form;
