import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

import { useThemeColor } from '@/hooks/use-theme-color';

const SWITCH_WIDTH = 50;
const SWITCH_HEIGHT = 30;
const THUMB_SIZE = 26;

export function CustomSwitch({ value, onValueChange }: { value: boolean; onValueChange: (value: boolean) => void }) {
  const trackColor = useThemeColor({ light: '#E9E9EA', dark: '#39393D' }, 'background');
  const thumbColor = useThemeColor({ light: '#FFFFFF', dark: '#1C1C1E' }, 'thumb');
  const activeTrackColor = useThemeColor({}, 'tint');

  const translateX = useSharedValue(value ? SWITCH_WIDTH - THUMB_SIZE - 4 : 4);

  const animatedThumbStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const animatedTrackStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: value ? activeTrackColor : trackColor,
    };
  });

  const handlePress = () => {
    translateX.value = withTiming(value ? 4 : SWITCH_WIDTH - THUMB_SIZE - 4);
    onValueChange(!value);
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.track, animatedTrackStyle]}>
        <Animated.View style={[styles.thumb, { backgroundColor: thumbColor }, animatedThumbStyle]} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: SWITCH_WIDTH,
    height: SWITCH_HEIGHT,
    borderRadius: 15,
    justifyContent: 'center',
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
