import { Text } from "react-native";

import { styles } from "./styles";
import { TypographyProps } from "./types";

export function Typography({
  children,
  variant = "body",
  color,
  center,
  style,
  numberOfLines,
}: TypographyProps) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles[variant],
        color && { color },
        center && { textAlign: "center" },
        style,
      ]}
    >
      {children}
    </Text>
  );
}