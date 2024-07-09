import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import DropDownComponent from "@/components/common/DropDownComponent";
import DefaultButton from "@/components/DefaultButton";

const Search = () => {
  const [searchValue, setSearchValue] = useState("")
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
  console.log(searchValue)
  return (
    <View className="flex-1 bg-background w-full items-center">
      <Header />
      <View className="w-full h-2/5 justify-evenly items-center">
        <View className="flex-row w-5/6 justify-between items-center bg-white border p-2.5 rounded-xl">
          <TextInput className="w-5/6" placeholder="Busque por um evento" onChangeText={(value) => setSearchValue(value)} />
          <Ionicons name="search" size={20} color="#15803D" />
        </View>
        <View className="w-full justify-between">
          <Text className="mx-10 mb-2.5 text-lg">Tipo de evento</Text>
          <DropDownComponent
            placeholder="Escolha o tipo de evento"
            setSelected={setSelect}
            data={eventType}
          />
        </View>
        <View className="w-full justify-between">
          <Text className="mx-10 mb-2.5 text-lg">Publico destinado</Text>
          <DropDownComponent
            placeholder="Escolha um tipo de público"
            setSelected={setSelect}
            data={publicType}
          />
        </View>
        <View className="w-full">
          <DefaultButton
            buttonText={"Aplicar filtro"}
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
