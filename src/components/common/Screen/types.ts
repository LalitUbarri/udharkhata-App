import { ReactNode } from "react";

export interface ScreenProps {
  children: ReactNode;

  scrollable?: boolean;

  padding?: boolean;

  backgroundColor?: string;
}