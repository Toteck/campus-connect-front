import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ListRenderItem,
  FlatList,
  Alert,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const cover = require("../../../assets/images/app-icon.png");
interface EventType {
  id: string;
  title: string;
  description: string;
}

const Data = [
  {
    id: "1",
    title: "EDITAL PRPGI Nº 33/2023 - PIBITI ENSINO SUPERIOR",
    slug: "edital-prpgi-no-332023-pibiti-ensino-superior",
    description:
      "Edital contendo as normas e procedimentos para as inscrições, seleção e classificação dos candidatos ao Programa de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação do Ensino Superior (PIBITI Ensino Superior), vigência 2023/2024.",
    event_type: "edital",
    public_type: "student",
    curso_id: null,
    turma_id: null,
    user_id: 1,
    created_at: "2024-06-25T10:23:50.222-03:00",
    updated_at: "2024-06-25T10:23:50.223-03:00",
  },
  {
    id: "2",
    title: "Reunião de Pais e Mestres - Junho 2023",
    slug: "reuniao-de-pais-e-mestres-junho-2023",
    description:
      "Convocação para a reunião de pais e mestres que será realizada no dia 15 de junho de 2023, às 19h, no auditório principal.",
    event_type: "reunião",
    public_type: "parent",
    curso_id: null,
    turma_id: null,
    user_id: 1,
    created_at: "2024-06-25T10:23:50.238-03:00",
    updated_at: "2024-06-25T10:23:50.238-03:00",
  },
  {
    id: "3",
    title: "Aviso Importante sobre a Biblioteca",
    slug: "aviso-importante-sobre-a-biblioteca",
    description:
      "Informamos que a biblioteca estará fechada para manutenção nos dias 20 e 21 de junho de 2023.",
    event_type: "aviso",
    public_type: "general",
    curso_id: null,
    turma_id: null,
    user_id: 1,
    created_at: "2024-06-25T10:23:50.252-03:00",
    updated_at: "2024-06-25T10:23:50.252-03:00",
  },
  {
    id: "4",
    title: "Notícia: Nova Pesquisa Publicada",
    slug: "noticia-nova-pesquisa-publicada",
    description:
      "O professor Dr. João Silva publicou uma nova pesquisa sobre Inteligência Artificial na revista Science.",
    event_type: "notícia",
    public_type: "professor",
    curso_id: null,
    turma_id: null,
    user_id: 1,
    created_at: "2024-06-25T10:23:50.264-03:00",
    updated_at: "2024-06-25T10:23:50.264-03:00",
  },
  {
    id: "5",
    title: "Evento Cultural - Festa Junina",
    slug: "evento-cultural-festa-junina",
    description:
      "Participe da nossa tradicional Festa Junina, que será realizada no dia 24 de junho de 2023, com muitas brincadeiras e comidas típicas.",
    event_type: "evento",
    public_type: "general",
    curso_id: null,
    turma_id: null,
    user_id: 1,
    created_at: "2024-06-25T10:23:50.274-03:00",
    updated_at: "2024-06-25T10:23:50.274-03:00",
  },
];

const Eventlist = () => {
  const Item = ({ data }: { data: EventType }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => {
        Alert.alert("Navegação para o evento!");
      }}
      className="h-[550px] justify-between  mx-7 bg-white rounded-2xl p-3 shadow-card border border-gray-300 "
    >
      <View className=" w-full items-center rounded-md">
        <Image
          source={cover}
          resizeMode="cover"
          className="w-full h-96 rounded-xl"
        />
      </View>

      <TouchableOpacity>
        <Ionicons name="heart-outline" size={32} color="green" />
      </TouchableOpacity>

      <View className="flex-row justify-between items-center ">
        <Text className="text-xl font-heading">{data.title}</Text>
      </View>
      <View className="">
        <Text className="text-lg font-body" numberOfLines={3}>
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem: ListRenderItem<EventType> = ({ item }) => (
    <Item data={item} />
  );

  const ItemSeparator = () => (
    <View style={{ height: 16 }} /> // Espaço entre os itens
  );

  return (
    <FlatList
      data={Data}
      keyExtractor={(item: EventType) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 80,
      }}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default Eventlist;
