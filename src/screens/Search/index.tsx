import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import DropDownComponent from "@/components/common/DropDownComponent";
import DefaultButton from "@/components/DefaultButton";
import { SearchInput } from "./style";

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
    <View className="flex-1 bg-background w-full items-center container">
      <Header />
      <View className="w-[90%] gap-y-10">
        <SearchInput onChangeText={setSearchValue} />

        <DropDownComponent
          setSelected={setSelect}
          data={eventType}
          placeholder="Selecione o tipo de evento"
          label="Selecione o tipo de evento"
        />

        <DropDownComponent
          placeholder="Escolha um tipo de público"
          setSelected={setSelect}
          data={publicType}
          label="Selecione seu perfil"
        />

        <View className="w-full">
          <DefaultButton
            buttonText={"Buscar evento"}
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
