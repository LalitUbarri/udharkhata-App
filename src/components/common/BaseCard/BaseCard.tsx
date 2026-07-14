import {
    Pressable,
    View,
} from "react-native";

import { styles } from "./styles";
import { BaseCardProps } from "./types";

export function BaseCard({
  children,
  header,
  footer,
  onPress,
  style,
}: BaseCardProps) {

  const Content = (
    <>
      {header && (
        <View style={styles.header}>
          {header}
        </View>
      )}

      {children}

      {footer && (
        <View style={styles.footer}>
          {footer}
        </View>
      )}
    </>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.card,
          style,
          {
            opacity: pressed ? 0.8 : 1,
          },
        ]}
      >
        {Content}
      </Pressable>
    );
  }

  return (
    <View style={[styles.card, style]}>
      {Content}
    </View>
  );
}