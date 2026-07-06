import { Ionicons } from "@expo/vector-icons";

import { IconProps } from "./types";

export function Icon({
  name,
  size = 24,
  color = "#111827",
}: IconProps) {
  return (
    <Ionicons
      name={name}
      size={size}
      color={color}
    />
  );
}