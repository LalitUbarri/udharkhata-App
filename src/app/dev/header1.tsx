import { Alert, Pressable, Text } from "react-native";

import {
    Container,
    Header,
    Screen,
} from "@/features/components";
import { Typography } from '@/features/components/common/Typography';

export default function HeaderDemo() {
  return (
    <Screen>
      <Container>
        <Header
          title="Customers"
          subtitle="25 Customers"
          showBackButton
          onBackPress={() => Alert.alert("Back")}
          rightComponent={
            <Pressable
              onPress={() => Alert.alert("Add")}
            >
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "700",
                }}
              >
                +
              </Text>
            </Pressable>
          }
        />

        <Typography variant="body">
          Header Component Working 🚀
        </Typography>
      </Container>
    </Screen>
  );
}