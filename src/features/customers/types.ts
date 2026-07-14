export type BalanceType = "GIVE" | "TAKE";

export interface Customer {
  id: string;
  name: string;
  mobile: string;
  whatsapp?: string;
  address?: string;
  note?: string;
  openingBalance: number;
  balanceType: BalanceType;
  createdAt: string;
  updatedAt: string;
}