import { View, Text, ScrollView, Alert, Image } from "react-native";
import React from "react";
import BackIcon from "@/components/common/Backicon";
import Form from "@/components/Register/Form";
import Constants from "expo-constants";
import DefaultButton from "@/components/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../routes";

const logo = require("../../../assets/images/horizontal-logo.png")

const statusBarHeight = Constants.statusBarHeight + 20;

const Register = () => {
   const navigation = useNavigation<PropsStack>();
  const handleRegister = () => {
   Alert.alert("Registro feito com sucesso");
  }
  return (
    <ScrollView
      style={{ paddingTop: statusBarHeight }}
      className="Container flex-1 bg-background "
    >
      <BackIcon marginLeft={20} />
      <Text className="Title text-xl text-title text-center font-bold my-[15px] mx-0">
        CRIAR UMA CONTA
      </Text>
      <Form />
      <DefaultButton
        buttonText="FAZER REGISTRO"
        primaryButton={true}
        marginVertical={30}
        buttonHandle={() => {
          handleRegister();
          navigation.navigate("Home");
        }}
      />
      <Text className="text-sm text-secondaryText text-center">
        Ao fazer registro aceito{"\n"} os termos de política de privacidade
      </Text>
      <DefaultButton
        buttonText="FAZER LOGIN"
        primaryButton={true}
        marginVertical={40}
        buttonHandle={() => {
          navigation.navigate("Login");
        }}
      />
      <Image
        resizeMode="contain"
        className="w-48 my-0 mx-auto mt-12"
        source={logo}
      />
    </ScrollView>
  );
};

export default Register;
