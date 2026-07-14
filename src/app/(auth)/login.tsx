import { Screen } from "@/components";
import { Header } from "@/components/common/Header";
import { Typography } from '../../components/common/Typography';
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