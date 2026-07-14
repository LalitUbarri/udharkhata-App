import { ReactNode } from "react";
import {
    KeyboardTypeOptions,
    TextInputProps,
} from "react-native";

export interface BaseInputProps
  extends Omit<TextInputProps, "style"> {
  label?: string;

  error?: string;

  required?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  password?: boolean;

  keyboardType?: KeyboardTypeOptions;
}