import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import fireOne from "../../assets/fireOne.jpg";
import { TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";

const HomeLayout = () => {
  const date = new Date().toDateString();

  return (
    <SafeAreaView className="flex-1 bg-sky-500 p-3">
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View>
          <Text className="text-white capitalize text-lg">{date}</Text>
        </View>
        <View className="my-5">
          <Text className="text-white text-3xl">Welcome back to</Text>
          <Text className="text-white text-3xl">FireAlert</Text>
        </View>
        <View className="border border-yellow-500 h-20 rounded-xl justify-center items-center">
          <Text className="text-white text-lg">
            <Text className="text-4xl text-yellow-500">12</Text> Number of fire
            outbreak cases recorded
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="my-5"
        >
          <View className="flex flex-row gap-10">
            <Image
              source={fireOne}
              resizeMode="cover"
              className="w-60 h-40 rounded-xl border border-white"
            />
            <Image
              source={fireOne}
              resizeMode="cover"
              className="w-60 h-40 rounded-xl border border-white"
            />
            <Image
              source={fireOne}
              resizeMode="cover"
              className="w-60 h-40 rounded-xl border border-white"
            />
            <Image
              source={fireOne}
              resizeMode="cover"
              className="w-60 h-40 rounded-xl border border-white"
            />
          </View>
        </ScrollView>

        <View className="flex flex-row justify-between">
          <Text className="text-white text-xl">
            Get to know how to use this app
          </Text>
          <Link href="/docs/docs">
            <Entypo name="chevron-with-circle-right" size={24} color="white" />
          </Link>
        </View>

        {/* Education Section */}
        <View className="mt-5 p-4 bg-white rounded-xl shadow-md">
          <Text className="text-gray-800 text-xl font-semibold mb-2">
            Fire Safety Tips
          </Text>
          <Text className="text-gray-600 mb-2">
            1. Always have a fire extinguisher nearby.
          </Text>
          <Text className="text-gray-600 mb-2">
            2. Create a family escape plan in case of fire.
          </Text>
          <Text className="text-gray-600 mb-2">
            3. Never leave cooking unattended.
          </Text>
          <Text className="text-gray-600 mb-2">
            4. Check smoke alarms monthly.
          </Text>
          <Text className="text-gray-600 mb-2">
            5. Know how to call emergency services.
          </Text>
          <Link href="/docs/docs" className="mt-3">
            <Text className="text-blue-500 underline">Learn more...</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeLayout;
