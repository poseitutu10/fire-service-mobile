import React from "react";
import { View, Text, Image, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ContactPage = () => {
  const email = "info@gnfs.gov.gh"; // Replace with your organization's email
  const phoneNumber = "0302-772-446 / 0299-340-383 / 192"; // Replace with your organization's phone number

  return (
    <SafeAreaView className="flex-1 bg-sky-500 p-4 justify-center">
      <View className="bg-white rounded-lg shadow-lg p-6">
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWW6lNDUaoV2g8V9uwd4bt_nJtsjRtnz05Yw&s",
          }} // Replace with your image URL
          style={{
            width: "100%",
            height: 100,
            alignSelf: "center",
            marginBottom: 20,
          }} // Adjust size as needed
        />

        <Text className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Contact Us
        </Text>

        <View className="mb-4">
          <Text className="text-lg font-semibold mb-1 text-gray-700">
            Email:
          </Text>
          <Text
            className="text-blue-500 underline"
            onPress={() => Linking.openURL(`mailto:${email}`)}
          >
            {email}
          </Text>
        </View>

        <View>
          <Text className="text-lg font-semibold mb-1 text-gray-700">
            Phone:
          </Text>
          <Text
            className="text-blue-500 underline"
            onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
          >
            {phoneNumber}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactPage;
