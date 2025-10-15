import { AnimatedCard } from '@/components/animated-card';
import { StudyMap } from '@/components/study-map';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CustomSwitch } from '@/components/ui/custom-switch';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { UNIVERSITIES } from '@/constants/universities';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

const TIDBITS = [
  {
    icon: 'figure.walk',
    title: 'Ulica Piotrkowska',
    description:
      'Najdłuższy deptak w Europie z dziesiątkami kawiarni, restauracji i zjawiskowymi muralami.',
  },
  {
    icon: 'bolt.fill',
    title: 'EC1 Łódź',
    description:
      'Dawna elektrownia przekształcona w interaktywne centrum nauki i sztuki – idealne na weekend.',
  },
  {
    icon: 'bag.fill',
    title: 'Manufaktura',
    description:
      'Tętniące życiem centrum handlowo-rozrywkowe w odrestaurowanych fabrykach z XIX wieku.',
  },
  {
    icon: 'theatermasks.fill',
    title: 'Scena artystyczna',
    description:
      'Nowoczesne galerie, Teatr Wielki i kina studyjne z ambitnym repertuarem dla koneserów.',
  },
];

const BENEFITS = [
  {
    icon: 'banknote.fill',
    title: 'Koszty życia',
    description:
      'Przystępniejsze niż w Warszawie — tańsze mieszkania, jedzenie i życie studenckie.',
    lightColor: '#f9f9f9',
    darkColor: '#1c1c1e',
  },
  {
    icon: 'theatermasks.fill',
    title: 'Kultura i wydarzenia',
    description:
      'Festiwale filmowe (ŁFF), galerie, koncerty i alternatywne kluby — nigdy nie jest nudno.',
    lightColor: '#f9f9f9',
    darkColor: '#1c1c1e',
  },
  {
    icon: 'person.3.fill',
    title: 'Społeczność',
    description:
      'Dużo organizacji studenckich, hackathony, inicjatywy społeczne i coworkingi.',
    lightColor: '#f9f9f9',
    darkColor: '#1c1c1e',
  },
  {
    icon: 'briefcase.fill',
    title: 'Droga do pracy',
    description:
      'Bliskość firm technologicznych, szansy na staże i współprace z lokalnym biznesem.',
    lightColor: '#f9f9f9',
    darkColor: '#1c1c1e',
  },
];

export default function StudyScreen() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const [showPublic, setShowPublic] = useState(true);
  const [showArtistic, setShowArtistic] = useState(true);

  const filteredUniversities = UNIVERSITIES.filter((uni) => {
    if (showPublic && uni.type === 'publiczna') {
      return true;
    }
    if (showArtistic && uni.type === 'artystyczna') {
      return true;
    }
    return false;
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <AnimatedCard style={styles.cardContainer}>
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle" style={styles.appleTitle}>
              Dlaczego Łódź?
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Łódź, miasto o bogatej historii przemysłowej, przekształciło się w tętniące życiem centrum akademickie i
              kulturowe. To tutaj historia spotyka się z nowoczesnością, a postindustrialne przestrzenie zyskują nowe
              życie jako centra sztuki, nauki i biznesu. Studiowanie w Łodzi to nie tylko nauka, ale także możliwość
              bycia częścią tej dynamicznej transformacji.
            </ThemedText>
          </ThemedView>
        </AnimatedCard>

        <AnimatedCard delay={100} style={styles.cardContainer}>
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle" style={styles.appleTitle}>
              Życie studenckie
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Łódź oferuje idealne warunki do życia studenckiego. Przystępne koszty utrzymania, bogata oferta kulturalna
              oraz liczne organizacje studenckie sprawiają, że każdy znajdzie tu coś dla siebie.
            </ThemedText>
            <View style={styles.grid}>
              {BENEFITS.map((card) => (
                <ThemedView
                  key={card.title}
                  style={styles.card}
                  lightColor={card.lightColor}
                  darkColor={card.darkColor}>
                  <View style={styles.cardHeader}>
                    <IconSymbol name={card.icon as any} size={28} color={tintColor} />
                    <ThemedText type="subtitle">{card.title}</ThemedText>
                  </View>
                  <ThemedText style={styles.cardText}>{card.description}</ThemedText>
                </ThemedView>
              ))}
            </View>
          </ThemedView>
        </AnimatedCard>

        <AnimatedCard delay={200} style={styles.cardContainer}>
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle" style={styles.appleTitle}>
              Główne uczelnie w Łodzi
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Łódź to jeden z najważniejszych ośrodków akademickich w kraju, goszczący 19 uczelni i ponad 75 tysięcy
              studentów.
            </ThemedText>
            <View style={styles.filterContainer}>
              <View style={styles.switchContainer}>
                <ThemedText>Publiczne</ThemedText>
                <CustomSwitch value={showPublic} onValueChange={setShowPublic} />
              </View>
              <View style={styles.switchContainer}>
                <ThemedText>Artystyczne</ThemedText>
                <CustomSwitch value={showArtistic} onValueChange={setShowArtistic} />
              </View>
            </View>
            <View style={styles.universityList}>
              {filteredUniversities.map((uni) => (
                <Link key={uni.title} href={{ pathname: '/modal', params: { university: uni.title } }}>
                  <ThemedView style={styles.universityCard} lightColor="#f9f9f9" darkColor="#1c1c1e">
                    <View style={styles.universityInfo}>
                      <ThemedText type="defaultSemiBold">{uni.title}</ThemedText>
                      <ThemedText style={{ opacity: 0.8 }}>{uni.content}</ThemedText>
                    </View>
                    <IconSymbol name="chevron.right" size={24} color={tintColor} />
                  </ThemedView>
                </Link>
              ))}
            </View>
          </ThemedView>
        </AnimatedCard>

        <AnimatedCard delay={300} style={styles.cardContainer}>
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle" style={styles.appleTitle}>
              Kampusy w sercu miasta
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Główne kampusy Uniwersytetu Łódzkiego i Politechniki Łódzkiej znajdują się w centrum miasta, co ułatwia
              dostęp do wszystkich atrakcji.
            </ThemedText>
            <View style={{ paddingTop: 8 }}>
              <StudyMap />
            </View>
          </ThemedView>
        </AnimatedCard>

        <AnimatedCard delay={400} style={styles.cardContainer}>
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle" style={styles.appleTitle}>
              Odkryj miasto
            </ThemedText>
            <View style={styles.grid}>
              {TIDBITS.map((tidbit) => (
                <ThemedView key={tidbit.title} style={styles.card} lightColor="#f9f9f9" darkColor="#1c1c1e">
                  <View style={styles.cardHeader}>
                    <IconSymbol name={tidbit.icon as any} size={24} color={tintColor} />
                    <ThemedText type="defaultSemiBold">{tidbit.title}</ThemedText>
                  </View>
                  <ThemedText style={styles.cardText}>{tidbit.description}</ThemedText>
                </ThemedView>
              ))}
            </View>
          </ThemedView>
        </AnimatedCard>

        <AnimatedCard delay={500} style={styles.cardContainer}>
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle" style={styles.appleTitle}>
              Twoja przyszłość w Łodzi
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Studiowanie w Łodzi to inwestycja w przyszłość. Miasto oferuje szerokie możliwości rozwoju zawodowego, a
              bliskość firm technologicznych i startupów stwarza idealne warunki do rozpoczęcia kariery.
            </ThemedText>
          </ThemedView>
        </AnimatedCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 24,
  },
  cardContainer: {
    marginBottom: 20,
  },
  section: {
    gap: 16,
    padding: 4,
  },
  paragraph: {
    lineHeight: 22,
    paddingTop: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
    paddingTop: 8,
  },
  card: {
    padding: 20,
    borderRadius: 20,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    flex: 1,
    minWidth: 280,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 4,
  },
  cardText: {
    opacity: 0.85,
    lineHeight: 20,
  },
  appleTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
    paddingBottom: 4,
  },
  universityList: {
    gap: 16,
    paddingTop: 8,
  },
  universityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  universityInfo: {
    flex: 1,
    gap: 4,
    paddingRight: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
