import { database } from "../service";
import { Customer } from "../types";

class CustomerRepository {
  /**
   * Add Customer
   */
  add(customer: Customer) {
    return database.run(
      `
      INSERT INTO customers
      (
        id,
        name,
        mobile,
        address,
        note,
        createdAt
      )
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [
        customer.id,
        customer.name,
        customer.mobile,
        customer.address ?? "",
        customer.note ?? "",
        customer.createdAt,
      ]
    );
  }

  /**
   * Get All Customers
   */
  getAll(): Customer[] {
    return database.getAll<Customer>(
      `
      SELECT *
      FROM customers
      ORDER BY createdAt DESC
      `
    );
  }

  /**
   * Get Customer By Id
   */
  getById(id: string): Customer | null {
    return database.getFirst<Customer>(
      `
      SELECT *
      FROM customers
      WHERE id = ?
      `,
      [id]
    );
  }

  /**
   * Update Customer
   */
  update(customer: Customer) {
    return database.run(
      `
      UPDATE customers
      SET
        name = ?,
        mobile = ?,
        address = ?,
        note = ?
      WHERE id = ?
      `,
      [
        customer.name,
        customer.mobile,
        customer.address ?? "",
        customer.note ?? "",
        customer.id,
      ]
    );
  }

  /**
   * Delete Customer
   */
  delete(id: string) {
    return database.run(
      `
      DELETE FROM customers
      WHERE id = ?
      `,
      [id]
    );
  }

  /**
   * Search Customers
   */
  search(keyword: string): Customer[] {
    return database.getAll<Customer>(
      `
      SELECT *
      FROM customers
      WHERE
        name LIKE ?
        OR mobile LIKE ?
      ORDER BY createdAt DESC
      `,
      [`%${keyword}%`, `%${keyword}%`]
    );
  }

  /**
   * Total Customers
   */
  count(): number {
    const result = database.getFirst<{ total: number }>(
      `
      SELECT COUNT(*) as total
      FROM customers
      `
    );

    return result?.total ?? 0;
  }
}

export const customerRepository = new CustomerRepository();