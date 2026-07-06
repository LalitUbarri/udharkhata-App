import { Screen } from "@/features/components";
import { Header } from "@/features/components/common/Header";
import { Typography } from '../../features/components/common/Typography';
// import Typography  from "@/components/common/Typography";

export default function LoginScreen() {
  return (
    <Screen>

<Header
title="Login"
subtitle="Welcome back"
/>

<Typography variant="h1">
        Login
      </Typography>

      <Typography
        variant="subtitle"
        style={{ marginTop: 8 }}
      >
        Welcome back 👋
      </Typography>

</Screen>
  );
}