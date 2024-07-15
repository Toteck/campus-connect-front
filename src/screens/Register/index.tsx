import { View, Text, ScrollView, Alert, Image } from "react-native";
import React from "react";
import BackIcon from "@/components/common/Backicon";
import Form from "@/components/Register/Form";
import Constants from "expo-constants";
import DefaultButton from "@/components/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const logo = require("../../../assets/images/horizontal-logo.png");

const statusBarHeight = Constants.statusBarHeight + 20;

const Register = () => {
  const navigation = useNavigation<PropsStack>();
  const handleRegister = () => {
    Alert.alert("Registro feito com sucesso");
  };
  return (
    <ScrollView
      style={{ paddingTop: statusBarHeight, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 80 }}
      className="flex-1 bg-background"
    >
      <View className="self-start max-w-[90%] ">
        <BackIcon marginLeft={20} />
      </View>
      <View className="flex-row items-center justify-center  w-full max-w-[90%] ">
        <Text className="text-xl text-title text-center font-bold my-[15px] mx-0">
          CRIAR UMA CONTA
        </Text>
      </View>
      <Form />
      <View className="w-full max-w-[90%]">
        <DefaultButton
          buttonText="Cadastrar"
          primaryButton={true}
          marginVertical={30}
          buttonHandle={() => {
            handleRegister();
          }}
        />
      </View>
      <Text className="text-sm text-secondaryText text-center">
        Ao fazer registro aceito{"\n"} os termos de política de privacidade
      </Text>
      <View className="w-full max-w-[90%]">
        <DefaultButton
          buttonText="Voltar para tela de login"
          primaryButton={false}
          marginVertical={30}
          buttonHandle={() => {
            navigation.goBack();
          }}
        />
      </View>
      <Image resizeMode="contain" className="w-48 my-0 mx-auto" source={logo} />
    </ScrollView>
  );
};

export default Register;
