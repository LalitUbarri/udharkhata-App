import { Alert } from "react-native";

import {
    BaseButton,
    Container,
    Screen,
} from "@/features/components";

import {
    login,
    logout,
} from "@/redux/slices/authSlice";

import {
    useAppDispatch,
    useAppSelector,
} from "@/redux";

import { Typography } from "@/features/components/common/Typography";

export default function ReduxDemo() {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(
    (state) => state.auth.isLoggedIn
  );


  
//   useEffect(()=>{
// console.log(isLoggedIn1);
//   },[isLoggedIn])

  return (
    <Screen>
      <Container>

        <Typography variant="h2">
          Redux Test
        </Typography>

        <Typography
          variant="body"
          style={{ marginVertical: 20 }}
        >
          Status : {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}
        </Typography>

        <BaseButton
          title="Login"
          onPress={() => {
            dispatch(login("dummy-token"));
            Alert.alert("Login Success");
          }}
        />

        <BaseButton
          title="Logout"
          variant="outline"
          style={{ marginTop: 16 }}
          onPress={() => {
            dispatch(logout());
            Alert.alert("Logout Success");
          }}
        />

      </Container>
    </Screen>
  );
}