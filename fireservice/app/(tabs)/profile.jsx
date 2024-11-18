import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileLayout = () => {
  return (
    <SafeAreaView className="flex-1 bg-sky-500">
      <View className="m-3">
        <Text className="text-white text-xl">Log out</Text>
        {/* <AppName /> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfileLayout;
