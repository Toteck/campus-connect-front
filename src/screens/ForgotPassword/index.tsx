import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import DefaultTitle from "@/components/common/DefaultTitle";
import Constants from "expo-constants";
import InputText from "@/components/InputText";
import DefaultButton from "@/components/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "@/routes";
const statusBarHeight = Constants.statusBarHeight;
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSendEmail = () => {
    Alert.alert("Enviando email para recuperação de senha");
  };
  const navigation = useNavigation<PropsStack>();
  return (
    <View
      style={{ paddingTop: statusBarHeight }}
      className="flex-1 bg-background items-center"
    >
      <DefaultTitle title={"Esqueci minha senha"} />
      <View className="w-[90%] h-[40%] justify-between items-center my-10">
        <Text className="text-center text-xl font-semibold">
          Digite seu email e enviaremos um link para que você possa redefinir
          sua senha
        </Text>
        <InputText
          label={"Email"}
          value={email}
          abled={true}
          handleInput={setEmail}
          placeholder={"Digite seu email"}
        />
        <DefaultButton
          buttonText={"Enviar link"}
          marginVertical={0}
          buttonHandle={handleSendEmail}
        />
        <DefaultButton
          buttonText={"Voltar"}
          marginVertical={0}
          buttonHandle={() => {
            navigation.goBack();
          }}
          typeButtonColor="tertiary"
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
