import { View, Text } from "react-native";
import React from "react";

const DocsText = ({ header, content }) => {
  return (
    <>
      <Text className="text-white text-xl font-semibold">{header}</Text>

      <Text className="text-white">{content}</Text>
    </>
  );
};

export default DocsText;
