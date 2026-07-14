import { db } from "./index";

export function createTables() {
  console.log("createTables called");

  db.execSync(`
    CREATE TABLE IF NOT EXISTS customers (
      id TEXT PRIMARY KEY NOT NULL,

      name TEXT NOT NULL,

      mobile TEXT NOT NULL,

      whatsapp TEXT,

      address TEXT,

      note TEXT,

      openingBalance REAL NOT NULL DEFAULT 0,

      balanceType TEXT NOT NULL DEFAULT 'GIVE',

      createdAt TEXT NOT NULL,

      updatedAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS transactions (
      id TEXT PRIMARY KEY NOT NULL,

      customerId TEXT NOT NULL,

      type TEXT NOT NULL,

      amount REAL NOT NULL,

      description TEXT,

      createdAt TEXT NOT NULL,

      FOREIGN KEY(customerId) REFERENCES customers(id)
    );
  `);

  console.log("✅ Customers table created");
}