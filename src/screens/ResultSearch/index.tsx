import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DefaultTitle from "@/components/common/DefaultTitle";
import Eventlist from "@/components/Eventlist";
import Navbar from "@/components/common/Navbar";
import { NoResult } from "../Search/style";
import Loading from "@/components/Loading";

const ResultSearch = () => {
  const [data, setData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView>
        <DefaultTitle title="Resultados da busca" />
      </SafeAreaView>
      {!loading ? (
        data.length <= 0 ? (
          <NoResult>
            Sua pesquisa não trouxe nenhum{"\n"}evento, tente novamente mais
            tarde!
          </NoResult>
        ) : (
          <Eventlist />
        )
      ) : (
        <Loading />
      )}

      <Navbar />
    </View>
  );
};

export default ResultSearch;
