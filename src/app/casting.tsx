import { couleurs } from '@/theme/couleurs';
import { globalStyles } from '@/theme/global';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Casting() {
  const [nom, setNom] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [film, setFilm] = useState<string>('');
  const [compterPress, setCompteurPress] = useState<number>(0);

  const gererPressAlien = () => {
    const monClickAlert = compterPress + 1;
    setCompteurPress(monClickAlert);

    if (monClickAlert === 6) {
      Alert.alert('Alert', 'Mode secret activé !');
    } else if (monClickAlert > 6) {
      if (nom !== '' && age !== '' && film !== '') {
        Alert.alert(
          'Alert',
          `Vos cordonnées personnelles ont été envoyés à la direction :\nNom: ${nom}\nÂge: ${age},\nPersonnage préféré: ${film}!`,
        );
      }
    }
  };

  const reinitialiserCompteur = () => {
    setCompteurPress(0);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView style={globalStyles.container}>
        <Image source={require('@/assets/images/trooper2.jpg')} style={styles.img} />

        <Text style={styles.txt}>Êtes-vous intéressé à faire parti du prochain film ?</Text>

        <View style={styles.FomInput}>
          <MaterialCommunityIcons name="android" size={24} color={couleurs.Secondaire} />
          <TextInput
            style={styles.FormTxtInput}
            placeholder="Nom complet"
            placeholderTextColor={couleurs.Inactif}
            autoCapitalize="words"
            value={nom}
            onChangeText={setNom}
          />
        </View>

        <View style={styles.FomInput}>
          <MaterialCommunityIcons name="apple" size={24} color={couleurs.Secondaire} />
          <TextInput
            style={styles.FormTxtInput}
            placeholder="Âge"
            placeholderTextColor={couleurs.Inactif}
            keyboardType="number-pad"
            value={age}
            onChangeText={setAge}
          />
        </View>

        <View style={styles.FomInput}>
          <MaterialCommunityIcons name="movie-open" size={24} color={couleurs.Secondaire} />
          <TextInput
            style={styles.FormTxtInput}
            placeholder="Personnage préféré"
            placeholderTextColor={couleurs.Inactif}
            autoCapitalize="words"
            value={film}
            onChangeText={setFilm}
          />
        </View>

        <Text style={styles.avertissement}>
          Veuillez noter que nous ne sommes pas responsables{'\n'}des accidents survenus lors des{'\n'}tournages.
        </Text>

        <View style={styles.IconForm}>
          <TouchableOpacity onPress={reinitialiserCompteur}>
            <MaterialCommunityIcons name="alert" size={28} color={couleurs.warning} />
          </TouchableOpacity>
          <MaterialCommunityIcons name="access-point-network" size={28} color={couleurs.Inactif} />
          <MaterialCommunityIcons name="abugida-devanagari" size={28} color={couleurs.Secondaire} />
          <MaterialCommunityIcons name="alien" size={28} color="red" />
          <MaterialCommunityIcons name="alert" size={28} color={couleurs.Inactif} />
          <MaterialCommunityIcons name="star" size={28} color={couleurs.Inactif} />
          <TouchableOpacity onPress={gererPressAlien}>
            <MaterialCommunityIcons name="alien-outline" size={28} color={couleurs.Secondaire} />
          </TouchableOpacity>
          <MaterialCommunityIcons name="alien" size={28} color={couleurs.Inactif} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  txt: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: 'bold',
  },
  FomInput: {
    backgroundColor: couleurs.Primaire,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  FormTxtInput: {
    flex: 1,
    color: couleurs.Secondaire,
    marginLeft: 15,
    fontSize: 16,
  },
  avertissement: {
    color: couleurs.Secondaire,
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 20,
    opacity: 0.7,
  },
  IconForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 40,
  },
});
