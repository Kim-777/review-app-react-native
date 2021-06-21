import React from "react";
// import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from '../shared/Header';

const Stack = createStackNavigator();

function AboutStack({ navigation }) {
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
                name="About"
                component={About}
                options={{ headerTitle: () => <Header navigation={navigation} title="어바웃 페이지" /> }}
            />
        </Stack.Navigator>
    );
}

export default AboutStack;
