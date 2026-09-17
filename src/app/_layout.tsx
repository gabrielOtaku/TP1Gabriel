import { couleurs } from '@/theme/couleurs';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: couleurs.Primaire,
          borderBottomColor: couleurs.Primaire,
        },
        headerTintColor: couleurs.Secondaire,
        tabBarStyle: {
          backgroundColor: couleurs.Primaire,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: couleurs.Secondaire,
        tabBarInactiveTintColor: couleurs.Inactif,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Films',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="movie" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="casting"
        options={{
          title: 'Casting',
          headerTitle: 'Tous les personnages',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="group" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favoris"
        options={{
          title: 'Favoris',
          tabBarIcon: ({ color, size }) => <AntDesign name="star" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
