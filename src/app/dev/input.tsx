import { useState } from "react";

import {
    BaseInput,
    Container,
    Screen,
} from "@/components";

import { Icon } from "@/components/common/Icon";

export default function InputDemo() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen scrollable>
      <Container>

        <BaseInput
          label="Full Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          required
          leftIcon={<Icon name="person-outline" />}
        />

        <BaseInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          password
        />

        <BaseInput
          label="Email"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          error="Invalid email address"
          leftIcon={<Icon name="mail-outline" />}
        />

        <BaseInput
  label="Disabled"
  placeholder="Can't edit"
  editable={false}
/>

<BaseInput
  label="Search"
  placeholder="Search customer..."
  leftIcon={<Icon name="search" />}
/>

<BaseInput
  label="Phone"
  keyboardType="phone-pad"
/>

      </Container>
    </Screen>
  );
}