import { Colors, FontSize } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  display: {
    fontSize: 36,
    fontWeight: "700",
    color: Colors.text,
  },

  h1: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.text,
  },

  h2: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text,
  },

  h3: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text,
  },

  title: {
    fontSize: FontSize.lg,
    fontWeight: "600",
    color: Colors.text,
  },

  subtitle: {
    fontSize: FontSize.md,
    color: Colors.subText,
  },

  body: {
    fontSize: FontSize.md,
    color: Colors.text,
  },

  caption: {
    fontSize: FontSize.sm,
    color: Colors.subText,
  },

  label: {
    fontSize: FontSize.sm,
    fontWeight: "500",
    color: Colors.text,
  },
});