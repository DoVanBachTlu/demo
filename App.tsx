import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routers } from "./src/navigation/router";
import {
  localStorageModule,
  localStorageName,
} from "./src/modules/AsyncStorage";
import { useEffect, useState } from "react";
const Stack = createStackNavigator();

export default function App(): React.ReactNode {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const getStatusLogin = async () => {
      try {
        const statusLogin = await localStorageModule.getItem(
          localStorageName.saveStatusLogined
        );
        console.log("setItem=>statusLogin->>", statusLogin);

        setLoginStatus(statusLogin);
      } catch (error) {
        console.log("getLoginStatus--error", error);
      }
    };
    getStatusLogin();
  }, []);
  console.log("app--loginStatus", loginStatus);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={loginStatus ? Routers.home.name : Routers.login.name}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={Routers.login.name}
          component={Routers.login.component}
        />
        <Stack.Screen
          name={Routers.home.name}
          component={Routers.home.commponent}
        />
        <Stack.Screen
          name={Routers.approve.name}
          component={Routers.approve.component}
        />
        <Stack.Screen
          name={Routers.approveDetail.name}
          component={Routers.approveDetail.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
