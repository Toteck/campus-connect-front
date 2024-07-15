import { View, Text, ScrollView } from "react-native";
import React from "react";
import Constants from "expo-constants";
import BackIcon from "@/components/common/Backicon";
import Navbar from "@/components/common/Navbar";
import InputText from "@/components/InputText";
import DropDownComponent from "@/components/common/DropDownComponent";
import DefaultButton from "@/components/DefaultButton";

const statusBarHeight = Constants.statusBarHeight + 15;

const Profile = () => {
  return (
    <View className="flex-1 bg-background items-center">
      <View
        className="flex-row w-full mb-10 "
        style={{ paddingTop: statusBarHeight, paddingHorizontal: 20 }}
      >
        <BackIcon marginLeft={0} />
        <Text className="text-2xl font-semibold ml-32 text-green-900">
          Meu Perfil
        </Text>
      </View>
      <ScrollView
        className="w-[90%]"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 80,
        }}
      >
        <InputText
          label={"Nome"}
          value={"Mateus"}
          handleInput={() => {}}
          abled={false}
        />
        <InputText
          label={"Email"}
          value={"mateusweslley14@gmail.com"}
          handleInput={() => {}}
          abled={false}
        />
        <InputText
          label={"Senha"}
          value={"********"}
          handleInput={() => {}}
          abled={false}
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
          <Text className="mb-2 font-semibold text-lg">
            Selecione uma turma
          </Text>
          <DropDownComponent
            placeholder="Escolha uma turma"
            setSelected={() => {}}
            data={[]}
            enabled={false}
          />
        </View>
        <DefaultButton
          buttonText={"Editar meu perfil"}
          primaryButton={false}
          marginVertical={10}
          buttonHandle={() => {}}
        />
        <DefaultButton
          buttonText={"Eventos salvos"}
          primaryButton={false}
          marginVertical={10}
          buttonHandle={() => {}}
        />
        <DefaultButton
          buttonText={"Sair da conta"}
          primaryButton={false}
          marginVertical={10}
          buttonHandle={() => {}}
        />
      </ScrollView>

      <Navbar />
    </View>
  );
};

export default Profile;
