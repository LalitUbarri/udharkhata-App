import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { Colors } from "@/theme";
import { styles } from "./styles";
import { BaseButtonProps } from "./types";

export function BaseButton({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
}: BaseButtonProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case "secondary":
        return Colors.secondary;

      case "outline":
        return "transparent";

      default:
        return Colors.primary;
    }
  };

  const getTextColor = () => {
    return variant === "outline"
      ? Colors.primary
      : Colors.white;
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        styles[size],
        fullWidth && styles.fullWidth,
        {
          backgroundColor: getBackgroundColor(),
          borderWidth: variant === "outline" ? 1 : 0,
          borderColor: Colors.primary,
          opacity: disabled ? 0.5 : pressed ? 0.8 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <>
          {leftIcon && (
            <View style={styles.iconLeft}>
              {leftIcon}
            </View>
          )}

          <Text
            style={[
              styles.text,
              { color: getTextColor() },
            ]}
          >
            {title}
          </Text>

          {rightIcon && (
            <View style={styles.iconRight}>
              {rightIcon}
            </View>
          )}
        </>
      )}
    </Pressable>
  );
}