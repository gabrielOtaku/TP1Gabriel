import { globalStyles } from '@/theme/global';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.hearder}>Tous les films</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
