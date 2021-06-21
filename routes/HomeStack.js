import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from '../shared/Header';

const Stack = createStackNavigator();

function homeStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "rgb(194, 250, 255)",
                    height: 80,
                },
                headerTintColor: "white",
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: () => <Header navigation={navigation} title="영화 기록앱"/> }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ title: "영화 디테일 페이지" }}
            />
        </Stack.Navigator>
    );
}

export default homeStack;
