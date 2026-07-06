import { useEffect } from "react";
import { Text, View } from "react-native";

import { testRepository } from "@/database/repositories/TestRepository";
import { database } from "@/database/service";

export default function BaseRepositoryTest() {
  useEffect(() => {
    console.clear();

    console.log("========== BaseRepository Test ==========");

    // Clean Table
    database.run("DELETE FROM customers");

    // Insert Dummy Data
    database.run(
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
        "1",
        "Lalit Kumar",
        "9999999999",
        "Delhi",
        "Testing",
        new Date().toISOString(),
      ]
    );

    console.log("All Customers");
    console.log(testRepository.getAll());

    console.log("Customer Count");
    console.log(testRepository.count());

    console.log("Exists");
    console.log(testRepository.exists("1"));

    console.log("Get By Id");
    console.log(testRepository.getById("1"));

    console.log("Find By Mobile");
    console.log(
      testRepository.findBy("mobile", "9999999999")
    );

    console.log("Find All By Address");
    console.log(
      testRepository.findAllBy("address", "Delhi")
    );

    testRepository.delete("1");

    console.log("Count After Delete");
    console.log(testRepository.count());

  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Base Repository Test</Text>
    </View>
  );
}