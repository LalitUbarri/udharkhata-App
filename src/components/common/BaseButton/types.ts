import { ReactNode } from "react";
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "./constants";

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export type ButtonSize =
  (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export interface BaseButtonProps {
  title: string;

  onPress: (event: GestureResponderEvent) => void;

  variant?: ButtonVariant;

  size?: ButtonSize;

  loading?: boolean;

  disabled?: boolean;

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
}