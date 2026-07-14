import { ReactNode } from "react";

export interface HeaderProps {
  title: string;

  subtitle?: string;

  leftComponent?: ReactNode;

  rightComponent?: ReactNode;

  showBackButton?: boolean;

  onBackPress?: () => void;
}