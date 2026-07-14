import { Screen } from "@/components/common/Screen";
import { Typography } from "@/components/common/Typography";

export default function ScreenDemo() {
  return (
    <Screen>
      <Typography variant="h1">
        Screen Component
      </Typography>

      <Typography
        variant="body"
        style={{ marginTop: 12 }}
      >
        This is a reusable Screen component.
      </Typography>
    </Screen>
  );
}