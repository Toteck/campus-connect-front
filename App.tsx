import { StatusBar } from "expo-status-bar";
import Routes from "./src/screens/routes";
import "@/styles/global.css";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Loading from "@/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <>
      <StatusBar style="dark" />
      <Routes />
    </>
  );
}
