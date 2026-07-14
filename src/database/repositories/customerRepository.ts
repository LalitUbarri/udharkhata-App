import { database } from "../service";
import { Customer } from "../types";
import { BaseRepository } from "./BaseRepository";

class CustomerRepository extends BaseRepository<Customer> {
  constructor() {
    super("customers");
  }

  /**
   * Add Customer
   */
  add(customer: Customer) {
  return database.run(
    `
    INSERT INTO customers (
      id,
      name,
      mobile,
      whatsapp,
      address,
      note,
      openingBalance,
      balanceType,
      createdAt,
      updatedAt
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      customer.id,
      customer.name,
      customer.mobile,
      customer.whatsapp ?? "",
      customer.address ?? "",
      customer.note ?? "",
      customer.openingBalance,
      customer.balanceType,
      customer.createdAt,
      customer.updatedAt,
    ]
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
      whatsapp = ?,
      address = ?,
      note = ?,
      openingBalance = ?,
      balanceType = ?,
      updatedAt = ?
    WHERE id = ?
    `,
    [
      customer.name,
      customer.mobile,
      customer.whatsapp ?? "",
      customer.address ?? "",
      customer.note ?? "",
      customer.openingBalance,
      customer.balanceType,
      new Date().toISOString(), // 👈 Automatically update timestamp
      customer.id,
    ]
  );
}

  /**
   * Search Customer
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
}

export const customerRepository = new CustomerRepository();