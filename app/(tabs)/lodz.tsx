
import { AnimatedCard } from '@/components/animated-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Image } from 'react-native';

const SECTIONS = [
  {
    title: 'Wielka Historia Włókiennictwa',
    icon: 'scissors',
    content: 'Łódź, licząca 660 tys. mieszkańców, jest dawną stolicą polskiego przemysłu włókienniczego. Dziś jest symbolem udanej transformacji.',
  },
  {
    title: 'UNESCO Miasto Filmu',
    icon: 'film.fill',
    content: 'Znana na świecie dzięki prestiżowej Szkole Filmowej, która wykształciła laureatów Oscara, takich jak Roman Polański i Andrzej Wajda.',
  },
  {
    title: 'Unikalna Architektura',
    icon: 'building.2.fill',
    content: 'Miasto zachwyca architekturą, która harmonijnie łączy surową, przemysłową historię z nowoczesnymi, awangardowymi projektami.',
  },
  {
    title: 'Akademickie Serce Polski',
    icon: 'graduationcap.fill',
    content: 'Łódź to jeden z najważniejszych ośrodków akademickich w kraju, oferujący szeroki wachlarz możliwości edukacyjnych.',
  },
  {
    title: '19 Uczelni Wyższych',
    icon: 'building.columns.fill',
    content: 'Miasto gości aż 19 cenionych instytucji akademickich. To gwarantuje szeroki wybór specjalizacji.',
  },
  {
    title: 'Ponad 75 Tys. Studentów',
    icon: 'person.3.fill',
    content: 'Łódź tętni życiem studenckim, przyciągając ponad 75 tysięcy osób, w tym 5 tysięcy studentów zagranicznych.',
  },
  {
    title: 'Uniwersytet Łódzki',
    icon: 'book.fill',
    content: '32 tys. studentów na 104 kierunkach, z programami wymiany w 28 krajach Europy, zapewniającymi globalne doświadczenie.',
  },
  {
    title: 'Politechnika Łódzka',
    icon: 'wrench.and.screwdriver.fill',
    content: 'Lider innowacji i techniki, którego absolwenci są wysoko cenieni przez pracodawców zarówno w Polsce, jak i na rynkach międzynarodowych.',
  },
  {
    title: 'Medycyna i Sztuka na Światowym Poziomie',
    icon: 'cross.case.fill',
    content: 'Uniwersytet Medyczny wyróżnia się nowoczesnymi laboratoriami i jako jedyna w Polsce prowadzi kształcenie lekarzy wojskowych. Akademie Artystyczne stanowią centra kreatywności, aktywnie angażujące się w międzynarodowe projekty.',
  },
  {
    title: 'Praca i Rozwój Kariery: Łódź jako Biznesowy Hub',
    icon: 'briefcase.fill',
    content: 'Ponad 100 centrów SSC i dynamiczny rozwój sektorów IT, logistyki oraz obsługi klienta (BPO/IT) czynią Łódź atrakcyjnym rynkiem pracy.',
  },
  {
    title: 'Kampusy i Życie Studenckie w Sercu Miasta',
    icon: 'mappin.and.ellipse',
    content: 'Dwa główne, zwarte kampusy Uniwersytetu Łódzkiego i Politechniki znajdują się w niewielkiej odległości od nowoczesnego dworca Łódź Fabryczna.',
  },
  {
    title: 'Manufaktura – Serce Rozrywki i Rekreacji',
    icon: 'cart.fill',
    content: 'Dawne fabryki Izraela Poznańskiego zostały przekształcone w tętniące życiem centrum handlowo-kulturalne, oferujące zakupy, rozrywkę i gastronomię.',
  },
  {
    title: 'Międzynarodowa Atmosfera i Wymiana Doświadczeń',
    icon: 'globe.europe.africa.fill',
    content: 'Ponad 5 tysięcy studentów zagranicznych tworzy dynamiczne, otwarte środowisko. Program Erasmus+ umożliwia studiowanie w ponad 28 krajach europejskich.',
  },
];

export default function LodzScreen() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.gallery}>
          <Image source={require('@/assets/images/lodz1.jpg')} style={styles.image} />
          <Image source={require('@/assets/images/lodz2.jpg')} style={styles.image} />
        </View>
        {SECTIONS.map((section, index) => (
          <AnimatedCard key={index} delay={index * 100}>
            <ThemedView style={styles.card} lightColor="#f9f9f9" darkColor="#1c1c1e">
              <View style={styles.cardHeader}>
                <IconSymbol name={section.icon as any} size={28} color={tintColor} />
                <ThemedText type="subtitle">{section.title}</ThemedText>
              </View>
              <ThemedText style={styles.cardText}>{section.content}</ThemedText>
            </ThemedView>
          </AnimatedCard>
        ))}
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
  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
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
});
