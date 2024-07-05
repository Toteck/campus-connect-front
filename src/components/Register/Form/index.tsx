import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import DropDownComponent from "@/components/common/DropDownComponent";

const Form = () => {

  const [select, setSelect] = useState("");
  const Data = [{ value: "Escolha um perfil", disabled: true }];

  const inputContainer =
    "w-[90%] h-12 border-solid border border-borderColor bg-background rounded my-0 mx-auto mt-5";
  const input = "flex-1 text-xl text-primaryText pl-2.5";
  return (
    <>
      <View className={inputContainer}>
        <TextInput
          placeholder="Nome e Sobrenome"
          className={input}
          style={{ color: "#15803D" }}
          placeholderTextColor="#c0c0c1"
        />
      </View>
      <View className={inputContainer}>
        <TextInput
          placeholder="Email"
          className={input}
          style={{ color: "#15803D" }}
          placeholderTextColor="#c0c0c1"
        />
      </View>
      <DropDownComponent setSelected={setSelect} data={Data} />

      <View className={inputContainer}>
        <TextInput
          placeholder="Senha"
          className={input}
          style={{ color: "#15803D" }}
          placeholderTextColor="#c0c0c1"
          secureTextEntry
        />
      </View>
      <View className={inputContainer}>
        <TextInput
          placeholder="Confirmação de senha"
          className={input}
          style={{ color: "#15803D" }}
          placeholderTextColor="#c0c0c1"
          secureTextEntry
        />
      </View>
    </>
  );
};

export default Form;
