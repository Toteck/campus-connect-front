import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import DefaultTitle from "@/components/common/DefaultTitle";
import InputText from "@/components/InputText";
import DefaultButton from "@/components/DefaultButton";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "@/routes";
const statusBarHeight = Constants.statusBarHeight;
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleResetPassword = () => {
    Alert.alert("Senha resetada com sucesso!");
  };
  const navigation = useNavigation<PropsStack>();
  return (
    <View
      style={{ paddingTop: statusBarHeight }}
      className="flex-1 bg-background items-center"
    >
      <DefaultTitle title={"Resetar senha"} />
      <View className="w-[90%] h-auto justify-between items-center my-10">
        <Text className="text-center text-xl font-semibold mb-5">
          Digite sua nova senha nos campos abaixo!
        </Text>

        <InputText
          label={"Senha"}
          value={password}
          abled={true}
          handleInput={setPassword}
          placeholder={"Digite sua nova senha"}
          secureTextEntry
        />
        <InputText
          label={"Confirme sua nova senha"}
          value={confirmPassword}
          abled={true}
          handleInput={setConfirmPassword}
          placeholder={"Digite novamente sua nova senha"}
          secureTextEntry
        />
        <DefaultButton
          buttonText={"Resetar senha"}
          marginVertical={0}
          buttonHandle={handleResetPassword}
        />
        <DefaultButton
          buttonText={"Login"}
          marginVertical={0}
          buttonHandle={() => {
            navigation.navigate("Login");
          }}
          typeButtonColor="tertiary"
        />
      </View>
    </View>
  );
};

export default ResetPassword;
