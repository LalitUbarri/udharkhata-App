import { customerSchema } from "@/features/customers/validation/customerSchema";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function CustomerValidationTest() {
  useEffect(() => {
    async function test() {
      try {
        const result = await customerSchema.validate({
          name: "Lalit Kumar",
          mobile: "9876543210",
          whatsapp: "9876543210",
          address: "Delhi",
          note: "Test Customer",
          openingBalance: 500,
          balanceType: "GIVE",
        });

        console.log("✅ Validation Passed");
        console.log(result);
      } catch (error) {
        console.log("❌ Validation Failed");
        console.log(error);
      }
    }

    test();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Customer Validation Test</Text>
    </View>
  );
}