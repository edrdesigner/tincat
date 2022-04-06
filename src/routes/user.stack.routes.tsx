import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserTabRoutes } from "./user.tab.routes";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name="UserTabRoutes" component={UserTabRoutes} />
      </Group>
    </Navigator>
  );
}
