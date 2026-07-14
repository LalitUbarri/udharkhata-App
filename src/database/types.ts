export interface Customer {
  id: string;
  name: string;
  mobile: string;
  whatsapp: string;
  openingBalance: number;
  balanceType: "GIVE" | "TAKE";
  updatedAt: string;
  address?: string;
  note?: string;
  createdAt: string;
}

export interface Transaction {
  id: string;

  customerId: string;

  type: "UDHAR" | "PAYMENT";

  amount: number;

  description?: string;

  createdAt: string;
}