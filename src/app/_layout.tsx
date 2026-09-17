import { couleurs } from '@/theme/couleurs';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { borderBlockColor: couleurs.Primaire },
        headerTintColor: couleurs.Secondaire,
        tabBarStyle: {
          backgroundColor: couleurs.Secondaire,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: couleurs.Primaire,
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
        name="index"
        options={{
          title: 'Casting',
          tabBarIcon: ({ color, size }) => <AntDesign name="team" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Favoris',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="star" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
