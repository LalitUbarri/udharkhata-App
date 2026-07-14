import * as Crypto from "expo-crypto";
import { useEffect } from "react";
import { Text, View } from "react-native";

import { store } from "@/redux";
import {
    addCustomer,
    deleteCustomer,
    selectCustomer,
    setSearchKeyword,
    updateCustomer,
} from "@/redux/slices/customerSlice";

export default function ReduxCustomerTest() {
  useEffect(() => {
    console.clear();

    console.log("========== Customer Redux Test ==========");

    const customer = {
      id: Crypto.randomUUID(),
      name: "Lalit Kumar",
      mobile: "9876543210",
      whatsapp: "9876543210",
      address: "Delhi",
      note: "Redux Test",
      openingBalance: 500,
      balanceType: "GIVE" as const,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Add
    store.dispatch(addCustomer(customer));
    console.log("After Add");
    console.log(store.getState().customers.customers);

    // Update
    store.dispatch(
      updateCustomer({
        ...customer,
        address: "Noida",
      })
    );

    console.log("After Update");
    console.log(store.getState().customers.customers);

    // Select
    store.dispatch(selectCustomer(customer));

    console.log("Selected Customer");
    console.log(store.getState().customers.selectedCustomer);

    // Search Keyword
    store.dispatch(setSearchKeyword("Lalit"));

    console.log("Search Keyword");
    console.log(store.getState().customers.searchKeyword);

    // Delete
    store.dispatch(deleteCustomer(customer.id));

    console.log("After Delete");
    console.log(store.getState().customers.customers);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Redux Customer Test</Text>
    </View>
  );
}