import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

export interface IconProps {
  name: ComponentProps<typeof Ionicons>["name"];

  size?: number;

  color?: string;
}