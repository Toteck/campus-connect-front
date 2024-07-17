import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ListRenderItem,
} from "react-native";
import React from "react";
import BackIcon from "@/components/common/Backicon";
import Constants from "expo-constants";
import EventCard from "@/components/MyEvents/EventsCard";
import Navbar from "@/components/common/Navbar";
import { Event } from "@/entities/Event";

const statusBarHeight = Constants.statusBarHeight + 15;
const cover = require("../../../assets/images/app-icon.png");

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

const MyEvents = () => {
  const Item = ({ data }: { data: Event }) => <EventCard data={data} />;
  const renderItem: ListRenderItem<Event> = ({ item }) => <Item data={item} />;
  const ItemSeparator = () => (
    <View style={{ height: 16 }} /> // Espaço entre os itens
  );
  return (
    <View className="flex-1 bg-background items-center">
      <View
        className="flex-row items-center w-full mb-10"
        style={{ paddingTop: statusBarHeight, paddingHorizontal: 20 }}
      >
        <BackIcon marginLeft={0} />
        <Text className="text-2xl font-semibold ml-28 text-green-900">
          Meus eventos
        </Text>
      </View>
      <FlatList
        data={Data}
        keyExtractor={(item: Event) => item.id}
        renderItem={renderItem}
        className="w-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          alignItems: "center",
        }}
        ItemSeparatorComponent={ItemSeparator}
      />
      <Navbar />
    </View>
  );
};

export default MyEvents;
