import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routers } from "./src/navigation/router";
import {
  localStorageModule,
  localStorageName,
} from "./src/modules/AsyncStorage";
import { useEffect, useState } from "react";
import store from "./src/container/ConfigStore";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function App(): React.ReactNode {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Routers.login.name}
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
    </Provider>
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
