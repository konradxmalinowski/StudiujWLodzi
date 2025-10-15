import { Image, StyleSheet, View } from 'react-native';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

import { AnimatedCard } from '@/components/animated-card';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Link } from 'expo-router';
import { useEffect } from 'react';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const BENEFITS = [
  {
    icon: 'banknote.fill',
    title: 'Koszty życia',
    description: 'Przystępniejsze niż w Warszawie — tańsze mieszkania, jedzenie i życie studenckie.',
    lightColor: '#f9f9f9',
    darkColor: '#1c1c1e',
  },
  {
    icon: 'theatermasks.fill',
    title: 'Kultura i wydarzenia',
    description: 'Festiwale filmowe (ŁFF), galerie, koncerty i alternatywne kluby — nigdy nie jest nudno.',
    lightColor: '#f9f9f9',
    darkColor: '#1c1c1e',
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const imageOpacity = useSharedValue(0);

  useEffect(() => {
    imageOpacity.value = withTiming(1, { duration: 800, easing: Easing.inOut(Easing.ease) });
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <AnimatedImage
          source={require('@/assets/images/image.jpg')}
          style={[styles.headerImage, { opacity: imageOpacity }]}
          resizeMode="cover"
        />
      }>
      <ThemedView style={styles.contentContainer}>
        <AnimatedCard delay={0}>
          <ThemedView style={styles.headerRow}>
            <View style={styles.titleContainer}>
              <ThemedText type="title">Witaj</ThemedText>
              <HelloWave />
            </View>
          </ThemedView>
        </AnimatedCard>
        <AnimatedCard delay={100}>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Przewodnik po studiach w Łodzi</ThemedText>
            <ThemedText>
              Odkryj, dlaczego Łódź to idealne miejsce do nauki, życia i rozwoju. Przejdź do przewodnika, aby dowiedzieć
              się więcej.
            </ThemedText>
          </ThemedView>
        </AnimatedCard>

      

        <AnimatedCard delay={300}>
          <Link href="/study" style={styles.link}>
            <ThemedView style={styles.cta} lightColor="#4E56C0" darkColor="#4E56C0">
              <ThemedText style={styles.ctaText}>Otwórz przewodnik </ThemedText>
            </ThemedView>
          </Link>
        </AnimatedCard>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contentContainer: {
    gap: 16,
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
    paddingHorizontal: 2,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  link: {
    marginTop: 8,
  },
  cta: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  ctaText: {
    color: '#fff',
    fontWeight: '700',
  },
  benefitsGrid: {
    gap: 16,
  },
  card: {
    padding: 24,
    borderRadius: 20,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});