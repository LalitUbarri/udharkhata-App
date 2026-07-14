import {
    Colors,
    Radius,
    Shadows,
    Spacing,
} from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,

    borderRadius: Radius.lg,

    padding: Spacing.lg,

    marginBottom: Spacing.md,

    ...Shadows.md,
  },

  header: {
    marginBottom: Spacing.md,
  },

  footer: {
    marginTop: Spacing.md,
  },
});