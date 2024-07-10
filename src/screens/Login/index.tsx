import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import DefaultButton from "@/components/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const statusBarHeight = Constants.statusBarHeight;

const logo = require("../../../assets/images/logo.png");

const Login = () => {
  const navigation = useNavigation<PropsStack>();

  const handleLogin = () => {
    Alert.alert("Botão de login");
    navigation.navigate("Home");
  };

  return (
    <ScrollView
      style={{ paddingTop: statusBarHeight, paddingBottom: 40 }}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 80 }}
      className="flex-1 bg-background"
    >
      <Image
        resizeMode="contain"
        source={logo}
        className="w-56 h-56 my-0 mx-auto"
      />
      <View className=" w-full max-w-[90%] justify-around items-center">
        <Text className="mb-10 font-subtitle text-xl text-center">
          Faça login para não perder nenhum evento no campus IFMA Timon/MA
        </Text>

        <View className="w-full ">
          <Text className="mb-2">Email</Text>
          <TextInput
            className="form-input mb-10 rounded-xl"
            placeholder="Email"
            placeholderTextColor={"gray"}
            keyboardType="email-address"
            
          />
        </View>
        <View className="w-full ">
          <Text className="mb-2">Senha</Text>
          <TextInput
            className="form-input rounded-xl"
            placeholder="Senha"
            placeholderTextColor={"gray"}
            secureTextEntry={true}
          />
        </View>

        <DefaultButton
          buttonText="Fazer login"
          primaryButton={true}
          marginVertical={30}
          buttonHandle={() => {
            handleLogin();
          }}
        />
        <View className="">
          <Text
            onPress={() => {
              Alert.alert("Vai para tela de esqueceu senha!");
            }}
            className="text-lg font-subtitle mb-4"
          >
            Esqueceu sua senha? Clique aqui!
          </Text>
        </View>
        <View className="w-full flex justify-center items-center">
          <Text className="text-lg font-subtitle mb-4">
            Ainda não tem conta?
          </Text>
          <DefaultButton
            buttonText="Criar uma conta"
            primaryButton={false}
            marginVertical={0}
            buttonHandle={() => {
              navigation.navigate("Register");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
