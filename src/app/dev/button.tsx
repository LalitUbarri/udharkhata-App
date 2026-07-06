import {
    BaseButton,
    Container,
    Screen,
} from "@/features/components";
import { Icon } from "@/features/components/common/Icon";
import { Alert } from "react-native";

export default function ButtonDemo() {
  return (
    <Screen>
      <Container>

        <BaseButton
          title="Primary Button"
          onPress={() => Alert.alert("Primary")}
        />

        <BaseButton
          title="Outline Button"
          variant="outline"
          onPress={() => Alert.alert("Outline")}
        />

        <BaseButton
          title="Secondary Button"
          variant="secondary"
          onPress={() => Alert.alert("Secondary")}
        />

        <BaseButton
          title="Loading"
          loading
          onPress={() => {}}
        />

        <BaseButton
          title="With Left Icon"
          leftIcon={<Icon name="add" color="#FFFFFF" />}
          onPress={() => Alert.alert("Left Icon")}
        />

        <BaseButton
          title="With Right Icon"
          rightIcon={<Icon name="arrow-forward" color="#FFFFFF" />}
          onPress={() => Alert.alert("Right Icon")}
        />

      </Container>
    </Screen>
  );
}