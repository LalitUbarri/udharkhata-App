import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>💰</Text>
      <Text style={styles.title}>Udhar Khata Pro</Text>
      <Text style={styles.subtitle}>Version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A7EA4",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 72,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    marginTop: 15,
  },
  subtitle: {
    color: "#fff",
    marginTop: 8,
  },
});