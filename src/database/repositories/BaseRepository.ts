import { database } from "../service";

export abstract class BaseRepository<T> {
  constructor(protected tableName: string) {}

  /**
   * Get all records
   */
  getAll(): T[] {
    return database.getAll<T>(
      `SELECT * FROM ${this.tableName}`
    );
  }

  /**
   * Get record by id
   */
  getById(id: string): T | null {
    return database.getFirst<T>(
      `SELECT * FROM ${this.tableName} WHERE id = ?`,
      [id]
    );
  }

  /**
   * Delete record
   */
  delete(id: string) {
    return database.run(
      `DELETE FROM ${this.tableName} WHERE id = ?`,
      [id]
    );
  }

  /**
   * Count records
   */
  count(): number {
    const result = database.getFirst<{ total: number }>(
      `SELECT COUNT(*) as total FROM ${this.tableName}`
    );

    return result?.total ?? 0;
  }

  /**
   * Check record exists
   */
  exists(id: string): boolean {
    const result = database.getFirst<{ total: number }>(
      `SELECT COUNT(*) as total FROM ${this.tableName} WHERE id = ?`,
      [id]
    );

    return (result?.total ?? 0) > 0;
  }

  /**
 * Find single record by any column
 */
findBy(column: string, value: string | number): T | null {
  return database.getFirst<T>(
    `SELECT * FROM ${this.tableName} WHERE ${column} = ?`,
    [value]
  );
}

/**
 * Find multiple records by any column
 */
findAllBy(column: string, value: string | number): T[] {
  return database.getAll<T>(
    `SELECT * FROM ${this.tableName} WHERE ${column} = ?`,
    [value]
  );
}

}