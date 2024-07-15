import { ScrollView, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import Navbar from "@/components/common/Navbar";
import Form from "@/components/Profile/Form";
import DefaultTitle from "@/components/common/DefaultTitle";
import DefaultButton from "@/components/DefaultButton";

const statusBarHeight = Constants.statusBarHeight + 15;

const Profile = () => {
  return (
    <>
      <ScrollView
        className="w-full bg-background"
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: statusBarHeight }}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 150,
        }}
      >
        <DefaultTitle title="Meu perfil" />
        <Form />

        <View className="w-[90%]">
          <DefaultButton
            buttonText={"Eventos salvos"}
            marginVertical={10}
            buttonHandle={() => {}}
            typeButtonColor="tertiary"
          />
          <DefaultButton
            buttonText={"Sair da conta"}
            marginVertical={10}
            buttonHandle={() => {}}
          />
        </View>
      </ScrollView>

      <Navbar />
    </>
  );
};

export default Profile;
