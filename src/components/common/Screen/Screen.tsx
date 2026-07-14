import {
    ScrollView,
    StatusBar,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { ScreenProps } from "./types";

export function Screen({
  children,
  scrollable = false,
  padding = true,
  backgroundColor = "#FFFFFF",
}: ScreenProps) {
  const content = scrollable ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.content,
        padding && {
          paddingHorizontal: 16,
          paddingVertical: 16,
        },
      ]}
    >
      {children}
    </ScrollView>
  ) : (
    <View
      style={[
        styles.container,
        padding && {
          paddingHorizontal: 16,
          paddingVertical: 16,
        },
      ]}
    >
      {children}
    </View>
  );

  return (
    <SafeAreaView
      style={[
        styles.flex,
        {
          backgroundColor,
        },
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={backgroundColor}
      />

      {content}
    </SafeAreaView>
  );
}