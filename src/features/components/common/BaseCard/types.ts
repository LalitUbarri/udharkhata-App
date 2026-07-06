import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface BaseCardProps {
  children: ReactNode;

  header?: ReactNode;

  footer?: ReactNode;

  onPress?: () => void;

  style?: StyleProp<ViewStyle>;
}