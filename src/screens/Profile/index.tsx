import { ScrollView, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import Navbar from "@/components/common/Navbar";
import Form from "@/components/Profile/Form";
import DefaultTitle from "@/components/common/DefaultTitle";
import DefaultButton from "@/components/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "@/routes";

const statusBarHeight = Constants.statusBarHeight + 15;

const Profile = () => {
  const navigation = useNavigation<PropsStack>();
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
            buttonHandle={() => {
              navigation.navigate("Favorites");
            }}
            typeButtonColor="tertiary"
          />
          <DefaultButton
            buttonText={"Sair da conta"}
            marginVertical={10}
            buttonHandle={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </ScrollView>

      <Navbar />
    </>
  );
};

export default Profile;
