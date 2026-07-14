import {
  FontSize,
  FontWeights,
  Radius,
  Spacing
} from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    borderRadius: Radius.md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  text: {
    fontSize: FontSize.md,
    fontWeight: FontWeights.semiBold,
  },

  small: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },

  medium: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },

  large: {
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xl,
  },

  fullWidth: {
    width: "100%",
  },

  iconLeft: {
    marginRight: 8,
  },

  iconRight: {
    marginLeft: 8,
  },
});