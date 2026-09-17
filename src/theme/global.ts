import { NativeStackNavigationOptions } from 'expo-router';
import { StyleSheet } from 'react-native';
import { couleurs } from "./couleurs";

export const globalStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:couleurs.Background,
    paddingHorizontal: 15
  },

  hearder:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export const styleHeader: NativeStackNavigationOptions ={
  headerShown: true,
  headerShadowVisible: false,
  headerStyle:{
    backgroundColor: couleurs.Background,
  },
  headerTintColor:couleurs.Secondaire,
  headerTitleStyle:{
    fontWeight:'bold',
  }
}