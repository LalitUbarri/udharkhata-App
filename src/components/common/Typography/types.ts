import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { TYPOGRAPHY_VARIANTS } from "./constants";

export type TypographyVariant =
  (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];

export interface TypographyProps {
  children: ReactNode;

  variant?: TypographyVariant;

  color?: string;

  center?: boolean;

  numberOfLines?: number;

  style?: StyleProp<TextStyle>;
}