import { randomUUID } from "expo-crypto";
import { useEffect } from "react";

import { customerRepository } from "@/database/repositories/customerRepository";

export default function CustomerRepositoryTest() {
  useEffect(() => {
    customerRepository.add({
      id: randomUUID(),
      name: "Lalit Kumar",
      mobile: "9876543210",
      address: "Delhi",
      note: "First Customer",
      createdAt: new Date().toISOString(),
    });

    console.log(
      customerRepository.getAll()
    );
  }, []);

  return null;
}