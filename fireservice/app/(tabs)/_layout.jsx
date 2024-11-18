import { View, Text, Image } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";

import { Tabs, Redirect, Link, router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const TabsLayout = () => {
  const handleLogOut = () => {
    try {
      const response = signOut(FIREBASE_AUTH);
      if (response) {
        router.push("/signIn");
      } else {
        router.push("/home");
      }
      console.log(response);
    } catch (err) {
      console.error(err);
      alert("Error occured");
    }
  };
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home Page",
          tabBarActiveTintColor: "white",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="justify-center items-center">
              <Feather
                name="home"
                size={24}
                color={`${focused ? "#0ea5e9" : "gray"}`}
              />
              <Text
                className={`${focused ? "text-[#0ea5e9]" : "text-gray-500"}`}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="report"
        options={{
          title: "Report Page",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="justify-center items-center">
              <Feather
                name="alert-triangle"
                size={24}
                color={`${focused ? "#0ea5e9" : "gray"}`}
              />
              <Text
                className={`${focused ? "text-[#0ea5e9]" : "text-gray-500"}`}
              >
                Alert
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="docs"
        options={{
          title: "Docs Page",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="justify-center items-center">
              <Ionicons
                name="document-text-outline"
                size={24}
                color={`${focused ? "#0ea5e9" : "gray"}`}
              />
              <Text
                className={`${focused ? "text-[#0ea5e9]" : "text-gray-500"}`}
              >
                Docs
              </Text>
            </View>
          ),
        }}
      /> */}
      <Tabs.Screen
        name="status"
        options={{
          title: "Contact",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="justify-center items-center">
              <FontAwesome6
                name="contact-card"
                size={24}
                color={`${focused ? "#0ea5e9" : "gray"}`}
              />
              <Text
                className={`${focused ? "text-[#0ea5e9]" : "text-gray-500"}`}
              >
                Contact
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile Page",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            // <Link href="/signIn">
            <View className="justify-center items-center">
              <Feather
                name="log-out"
                size={24}
                color={`${focused ? "#0ea5e9" : "gray"}`}
                onPress={handleLogOut}
              />

              <Text
                className={`${focused ? "text-[#0ea5e9]" : "text-gray-500"}`}
              >
                Logout
              </Text>
            </View>
            // </Link>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
