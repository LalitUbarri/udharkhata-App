import { db } from "./index";

export class DatabaseService {
  /**
   * Execute multiple SQL statements.
   * Example: CREATE TABLE, ALTER TABLE
   */
  execute(sql: string): void {
    try {
      db.execSync(sql);
    } catch (error) {
      console.error("❌ Database Execute Error:", error);
      throw error;
    }
  }

  /**
   * Insert / Update / Delete query
   */
  run(sql: string, params: (string | number | null)[] = []) {
    try {
      return db.runSync(sql, params);
    } catch (error) {
      console.error("❌ Database Run Error:", error);
      throw error;
    }
  }

  /**
   * Get first row
   */
  getFirst<T = any>(
    sql: string,
    params: (string | number | null)[] = []
  ): T | null {
    try {
      return db.getFirstSync<T>(sql, params);
    } catch (error) {
      console.error("❌ Database GetFirst Error:", error);
      throw error;
    }
  }

  /**
   * Get all rows
   */
  getAll<T = any>(
    sql: string,
    params: (string | number | null)[] = []
  ): T[] {
    try {
      return db.getAllSync<T>(sql, params);
    } catch (error) {
      console.error("❌ Database GetAll Error:", error);
      throw error;
    }
  }

  /**
   * Check if table/data exists
   */
  exists(table: string): boolean {
    try {
      const result = db.getFirstSync<{ count: number }>(
        `SELECT COUNT(*) as count
         FROM sqlite_master
         WHERE type='table'
         AND name=?`,
        [table]
      );

      return (result?.count ?? 0) > 0;
    } catch (error) {
      console.error("❌ Database Exists Error:", error);
      return false;
    }
  }

  /**
   * Transaction
   */
  transaction(callback: () => void) {
    try {
      db.withTransactionSync(() => {
        callback();
      });
    } catch (error) {
      console.error("❌ Transaction Error:", error);
      throw error;
    }
  }
}

export const database = new DatabaseService();