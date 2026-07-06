import { Colors, FontSize, FontWeights, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Spacing.lg,
  },

  leftSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeights.bold,
    color: Colors.text,
  },

  subtitle: {
    marginTop: 4,
    fontSize: FontSize.sm,
    color: Colors.subText,
  },

  actionContainer: {
    marginLeft: Spacing.md,
  },
});