import { Alert, Button, Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ThemedText } from "./ThemedText";

export const AnimatedButton = () => {
  const shiftAmount = useSharedValue(-100);
  const logoShiftUpStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: shiftAmount.value }],
  }));

  if (shiftAmount.value !== -0) {
    shiftAmount.value = withTiming(0, { duration: 450 });
  }

  return (
    <Animated.View style={[logoShiftUpStyle, { padding: 8, gap: 16 }]}>
      <Pressable
        onPress={() => Alert.alert("Im clicked")}
        style={{
          backgroundColor: "blue",
          borderRadius: 8,
          padding: 8,
        }}
      >
        <ThemedText type="subtitle" style={{ textAlign: "center" }}>
          Press Me I'm a Pressable!
        </ThemedText>
      </Pressable>
      <Button
        title="Press me I'm a default button"
        onPress={() => Alert.alert("Im clicked")}
      />
    </Animated.View>
  );
};
