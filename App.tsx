import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  NunitoSans_700Bold,
  NunitoSans_400Regular,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_700Bold,
    NunitoSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Routes />
    </ThemeProvider>
  );
}
