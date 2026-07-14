import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ContainerProps {
  children: ReactNode;

  maxWidth?: number;

  paddingHorizontal?: number;

  style?: StyleProp<ViewStyle>;
}