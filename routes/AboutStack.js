import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const Stack = createStackNavigator();

function AboutStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "tomato",
                    height: 70,
                },
                headerTintColor: "white",
            }}
        >
            <Stack.Screen
                name="About"
                component={About}
                options={{ title: "About Gamezone" }}
            />
        </Stack.Navigator>
    );
}

export default AboutStack;
