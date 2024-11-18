import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import fireSample from "../assets/fireservice.jpg";
import { router } from "expo-router";
import AppName from "../components/AppName";
const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-sky-500">
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 2,
          alignContent: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
        showsHorizontalScrollIndicator="false"
      >
        <View className="justify-center items-center gap-5 ">
          <AppName />
          <Image
            source={fireSample}
            resizeMode="cover"
            className="w-80 h-40 rounded-xl border border-white"
          />
          <Text className="text-xs text-white">
            Are you looking forward for an amazing experience with a fire
            service personel? You are at the right spot of making things easier
            for you for quick and easy access to contact any fire service
            personel anytime fire outbreak occurs. Sign in to continue
          </Text>
        </View>
        <TouchableOpacity
          className="my-5 bg-red-500 w-full rounded-lg"
          activeOpacity={0.9}
          onPress={() => router.push("/signIn")}
        >
          <Text className="text-center py-3 text-white">
            Sign in with an email
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </SafeAreaView>
  );
};

export default Index;
