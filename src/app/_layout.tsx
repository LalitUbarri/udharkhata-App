import { runMigrations } from "@/database/migrations";
import { store } from "@/redux";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Provider } from "react-redux";


export default function RootLayout() {

  useEffect(() => {
    runMigrations();
  }, []);
  
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="splash" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  );
}