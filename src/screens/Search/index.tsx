import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import DropDownComponent from "@/components/common/DropDownComponent";
import DefaultButton from "@/components/DefaultButton";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [select, setSelect] = useState("");

  const eventType = [
    { value: "Notícia" },
    { value: "Aviso" },
    { value: "Reunião" },
  ];
  const publicType = [
    { value: "Professor" },
    { value: "Estudante" },
    { value: "Pais" },
  ];

  return (
    <View className="flex-1 bg-background w-full items-center">
      <Header />
      <View className="w-full max-w-[90%] h-1/2 gap-y-10 items-center">
        <View className="flex-row w-full justify-between items-center bg-white p-2.5 pr-10 rounded-xl border">
          <TextInput
            className="w-full text-base"
            placeholder="Busque por um evento"
            onChangeText={(value) => setSearchValue(value)}
          />
          <Ionicons name="search" size={20} color="#15803D" />
        </View>
        <View className="w-full">
          <Text className="mb-2">Selecione seu perfil</Text>
          <DropDownComponent
            setSelected={setSelect}
            data={eventType}
            placeholder="Selecione o tipo de evento"
          />
        </View>
        <View className="w-full justify-between">
          <Text className="mb-2">Selecione seu perfil</Text>
          <DropDownComponent
            placeholder="Escolha um tipo de público"
            setSelected={setSelect}
            data={publicType}
          />
        </View>
        <View className="w-full">
          <DefaultButton
            buttonText={"Buscar evento"}
            primaryButton={true}
            marginVertical={0}
            buttonHandle={() => {
              Alert.alert("Filtro aplicado a pesquisa");
            }}
          />
        </View>
      </View>

      <Navbar />
    </View>
  );
};

export default Search;
