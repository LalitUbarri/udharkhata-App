import { View } from "react-native";

import { styles } from "./styles";
import { ContainerProps } from "./types";

export function Container({
  children,
  maxWidth = 500,
  paddingHorizontal = 16,
  style,
}: ContainerProps) {
  return (
    <View
      style={[
        styles.container,
        {
          maxWidth,
          paddingHorizontal,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}