import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createStackNavigator();

function homeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "tomato",
                    height: 60,
                },
                headerTintColor: "white",
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "영화 리뷰" }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ title: "영화 디테일 테이지" }}
            />
        </Stack.Navigator>
    );
}

export default homeStack;
