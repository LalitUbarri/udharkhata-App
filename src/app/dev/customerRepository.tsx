import * as Crypto from "expo-crypto";
import { useEffect } from "react";
import { Text, View } from "react-native";

import { customerRepository } from "@/database/repositories/customerRepository";
import { database } from "@/database/service";
import { Customer } from "@/database/types";

export default function CustomerRepositoryTest() {
  useEffect(() => {
    console.clear();

    console.log("===== CustomerRepository Test =====");

    database.run("DELETE FROM customers");

    const customer :Customer = {
    id: Crypto.randomUUID(),
    name: "Lalit Kumar",
    mobile: "9876543210",
    whatsapp: "9876543210",
    address: "Delhi",
    note: "Testing",
    openingBalance: 500,
    balanceType: "GIVE",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    };

    // Add
    customerRepository.add(customer);

    console.log("Added");

    // Get All
    console.log(customerRepository.getAll());

    // Search
    console.log(customerRepository.search("Lalit"));

    // Update
    customerRepository.update({
      ...customer,
      address: "Noida",
    });

    console.log(customerRepository.getById(customer.id));

    // Delete
    customerRepository.delete(customer.id);

    console.log("After Delete");

    console.log(customerRepository.count());

  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Customer Repository Test</Text>
    </View>
  );
}