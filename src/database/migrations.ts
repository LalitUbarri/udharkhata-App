import { createTables } from "./schema";

export function runMigrations() {
  console.log("🚀 Running Database Migration...");

  createTables();

  // verifyTables();

  console.log("✅ Database Ready");
}