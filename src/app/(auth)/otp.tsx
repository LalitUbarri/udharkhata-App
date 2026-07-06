import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function OtpScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 28, marginBottom: 20 }}>
        OTP Screen
      </Text>

      <Button
        title="Go To Dashboard"
        onPress={() => router.replace("/")}
      />
    </View>
  );
}