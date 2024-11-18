import React from "react";
import { View, Text, ScrollView } from "react-native";

const DocsPage = () => {
  return (
    <ScrollView className="flex-1 p-4 bg-sky-500 py-10" header>
      <View className="text-white">
        <Text className="text-2xl font-bold mb-4">Documentation</Text>

        <Text className="text-xl font-semibold mb-2">1. Introduction</Text>
        <Text className="mb-4">
          Welcome to our FireAlert. This app is a comprehenesive mobile
          application where a user can get in touch with the fire service
          personnel
        </Text>

        <Text className="text-xl font-semibold mb-2">2. Guides</Text>
        <Text className="mb-2">
          {" "}
          Alert Page: Share the link to your live location from Google map
        </Text>
        <Text className="mb-2">-Enter your contact number</Text>
        <Text className="mb-2">
          -Upload the picture of fire outbreak incident occuring
        </Text>
        <Text className="mb-2">
          -Submit the form to send a mail to the fire service personnel's mail
        </Text>

        <Text className="text-xl font-semibold mb-2">3. Contact</Text>
        <Text className="mb-4">
          If you don't feel confortable filling this form at Alert, on the
          Contact Page, take the contact number of fire service and get in touc
          with them
        </Text>
        <Text className="text-xl font-semibold mb-2">3. Logout</Text>
        <Text className="mb-4">Exit from our page</Text>
      </View>
    </ScrollView>
  );
};

export default DocsPage;
