import {
    Colors,
    FontSize,
    FontWeights,
    Radius,
    Spacing,
} from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Spacing.lg,
  },

  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeights.medium,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },

  required: {
    color: Colors.error,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    minHeight: 50,
    backgroundColor: Colors.white,
  },

  input: {
    flex: 1,
    fontSize: FontSize.md,
    color: Colors.text,
    paddingVertical: 12,
  },

  iconLeft: {
    marginRight: 8,
  },

  iconRight: {
    marginLeft: 8,
  },

  error: {
    marginTop: 6,
    fontSize: FontSize.sm,
    color: Colors.error,
  },

  focused: {
    borderColor: Colors.primary,
  },

  disabled: {
    opacity: 0.5,
  },
});