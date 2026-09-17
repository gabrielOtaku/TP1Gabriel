import { couleurs } from "@/theme/couleurs";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {

  return(
    <Tabs
    screenOptions={{
      headerStyle : {borderBlockColor: couleurs.Primaire},
      headerTintColor: couleurs.Secondaire,
      tabBarStyle: {backgroundColor: couleurs.Secondaire, borderTopWidth:0},
      tabBarActiveTintColor: couleurs.Primaire,
      tabBarInactiveTintColor: couleurs.Inactif

    }}>
    </Tabs>
  );

}
