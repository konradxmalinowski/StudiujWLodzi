import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { UNIVERSITIES } from '@/constants/universities';

export default function ModalScreen() {
  const params = useLocalSearchParams();
  const universityName = params.university as string;
  const university = UNIVERSITIES.find((u) => u.title === universityName);
  const fields = university?.fields || [];

  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <ThemedText type="title">{universityName}</ThemedText>
          <ThemedText style={styles.subtitle}>Przykładowe kierunki studiów</ThemedText>
        </View>
        {fields.length > 0 ? (
          <View style={styles.listContainer}>
            {fields.map((field) => (
              <ThemedView key={field.name} style={styles.fieldCard} lightColor="#fff" darkColor="#1c1c1e">
                <ThemedText type="defaultSemiBold">{field.name}</ThemedText>
                <ThemedText style={{ opacity: 0.8 }}>{field.description}</ThemedText>
              </ThemedView>
            ))}
          </View>
        ) : (
          <ThemedText>Brak danych dla tej uczelni.</ThemedText>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
    paddingBottom: 40,
  },
  header: {
    gap: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
  listContainer: {
    gap: 12,
  },
  fieldCard: {
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
});