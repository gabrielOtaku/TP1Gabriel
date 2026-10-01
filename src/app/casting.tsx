import { couleurs } from '@/theme/couleurs';
import { globalStyles } from '@/theme/global';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

interface TextInputAvecIconeProps extends TextInputProps {
  icone: keyof typeof MaterialCommunityIcons.glyphMap;
  styleConteneur?: StyleProp<ViewStyle>;
}

export default function Index() {
  const [nom, setNom] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [film, setFilm] = useState<string>('');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.hearder}></Text>
        <Image source={require('@/assets/images/trooper2.jpg')} style={styles.img} />
        <Text style={styles.txt}>Etes-vous interesse a faire parti du prochain film</Text>
      </View>

      <View style={styles.FomInput}>
        <FontAwesome5 name="android" size={24} color={couleurs.Secondaire} />
        <TextInput
          style={styles.FormTxtInput}
          placeholder="Nom Complet"
          placeholderTextColor={couleurs.Inactif}
          keyboardType="email-address"
          autoCapitalize="none"
          value={nom}
          onChangeText={setNom}
        />
      </View>

      <View style={styles.FomInput}>
        <FontAwesome5 name="apple" size={24} color={couleurs.Secondaire} />
        <TextInput
          style={styles.FormTxtInput}
          placeholder="Age"
          placeholderTextColor={couleurs.Inactif}
          keyboardType='number-pad'
          autoCapitalize="none"
          value={age}
          onChangeText={setAge}
        />
      </View>

      <View style={styles.FomInput}>
        <MaterialCommunityIcons name="movie-open" size={24} color={couleurs.Secondaire} />
        <TextInput
          style={styles.FormTxtInput}
          placeholder="Personnage prefere"
          placeholderTextColor={couleurs.Inactif}
          keyboardType="email-address"
          autoCapitalize="none"
          value={film}
          onChangeText={setFilm}
        />
      </View>

      <Text style={styles.FormTxtInput}>
        Veuillez notez que nous sommes pas responsables <br />
        des accidents survenues lors des <br /> tournages
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 500,
    height: 400,
    borderRadius: 30,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    resizeMode: 'center',
    fontSize: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FomInput:{
    backgroundColor : couleurs.Primaire
  },
  FormTxtInput:{
    borderColor: couleurs.Background,
    color : couleurs.Secondaire
  }


});
