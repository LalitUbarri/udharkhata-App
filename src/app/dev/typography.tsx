import { Screen } from "@/features/components";
import { Typography } from "@/features/components/common/Typography";
import { View } from "react-native";

export default function TypographyDemo() {
  return (
    <Screen>
      <View style={{ gap: 16 }}>
        <Typography variant="display">Display</Typography>

        <Typography variant="h1">Heading 1</Typography>

        <Typography variant="h2">Heading 2</Typography>

        <Typography variant="h3">Heading 3</Typography>

        <Typography variant="title">Title</Typography>

        <Typography variant="subtitle">
          Subtitle text
        </Typography>

        <Typography variant="body">
          This is body text.
        </Typography>

        <Typography variant="caption">
          Caption text
        </Typography>

        <Typography variant="label">
          Label
        </Typography>
      </View>
    </Screen>
  );
}