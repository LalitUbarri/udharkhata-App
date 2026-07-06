import { database } from "./service";

export function createTables() {
  database.execute(`
    CREATE TABLE IF NOT EXISTS customers (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      mobile TEXT NOT NULL,
      address TEXT,
      note TEXT,
      createdAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS transactions (
      id TEXT PRIMARY KEY NOT NULL,
      customerId TEXT NOT NULL,
      type TEXT NOT NULL,
      amount REAL NOT NULL,
      description TEXT,
      createdAt TEXT NOT NULL
    );
  `);

  console.log("✅ Tables Created");
}

export function verifyTables() {
  const tables = database.getAll<{ name: string }>(`
    SELECT name
    FROM sqlite_master
    WHERE type='table'
    ORDER BY name;
  `);

  console.log("📦 Database Tables:", tables);
}