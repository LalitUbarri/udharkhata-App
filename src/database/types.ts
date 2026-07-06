export interface Customer {
  id: string;

  name: string;

  mobile: string;

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