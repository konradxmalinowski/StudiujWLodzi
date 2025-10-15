import React, { useEffect } from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

import { ThemedView } from './themed-view';

const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);

export function AnimatedCard({ children, delay = 0, style }: { children: React.ReactNode; delay?: number, style?: ViewStyle }) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: 400 }));
    translateY.value = withDelay(delay, withTiming(0, { duration: 400 }));
  }, [opacity, translateY, delay]);

  return (
    <AnimatedThemedView
      style={[
        styles.animatedCardContainer,
        {
          opacity,
          transform: [{ translateY }],
        },
        style,
      ]}>
      {children}
    </AnimatedThemedView>
  );
}

const styles = StyleSheet.create({
  animatedCardContainer : {
    padding: 16,
    borderRadius: 8,
  }
});