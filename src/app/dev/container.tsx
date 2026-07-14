import { Screen } from "@/components";
import { Container } from "@/components/common/Container";
import { Typography } from "@/components/common/Typography";

export default function ContainerDemo() {
  return (
    <Screen>
      <Container>
        <Typography variant="h1">
          Container Demo
        </Typography>

        <Typography
          variant="body"
          style={{ marginTop: 12 }}
        >
          This content is inside a reusable Container.
        </Typography>
      </Container>
    </Screen>
  );
}