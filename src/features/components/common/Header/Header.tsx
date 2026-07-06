import { Icon } from "@/features/components/common/Icon";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";
import { HeaderProps } from "./types";

export function Header({
  title,
  subtitle,
  leftComponent,
  rightComponent,
  showBackButton = false,
  onBackPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {showBackButton && (
          <Pressable
            onPress={onBackPress}
            style={{ marginRight: 12 }}
          >
            <Icon
              name="arrow-back"
              size={24}
              color="#111827"
            />
          </Pressable>
        )}

        {leftComponent}

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>

          {subtitle ? (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      {rightComponent ? (
        <View style={styles.actionContainer}>
          {rightComponent}
        </View>
      ) : null}
    </View>
  );
}