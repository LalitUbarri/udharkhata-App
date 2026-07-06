import { Alert } from "react-native";

import {
    BaseButton,
    BaseCard,
    Container,
    Screen
} from "@/features/components";
import { Typography } from "@/features/components/common/Typography";
export default function CardDemo() {
  return (
    <Screen scrollable>
      <Container>

        <BaseCard
          header={
            <Typography variant="h3">
              Rahul Sharma
            </Typography>
          }
          footer={
            <BaseButton
              title="View Details"
              onPress={() => Alert.alert("Details")}
            />
          }
        >
          <Typography variant="body">
            Mobile : 9876543210
          </Typography>

          <Typography
            variant="body"
            style={{ marginTop: 8 }}
          >
            Balance : ₹15,500
          </Typography>
        </BaseCard>

      </Container>
    </Screen>
  );
}