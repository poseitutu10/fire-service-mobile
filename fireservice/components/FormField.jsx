import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const FormField = ({ name, handleChange, value }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <View className="space-y-1 mb-5">
      <Text className="text-white capitalize">{name}</Text>
      <View className="bg-white w-full h-[40px] rounded-lg flex-row px-3 items-center">
        <TextInput
          className="flex-1 text-gray-500 text-sm lowercase"
          placeholder={`Enter your ${name}`}
          placeholderTextColor="gray"
          value={value}
          onChangeText={handleChange}
          keyboardType="email-address"
          secureTextEntry={`${
            name === "password" && !isShowPassword ? true : false
          }`}
        />
        {name === "password" &&
          (isShowPassword === true ? (
            <AntDesign
              name="eye"
              size={22}
              color="black"
              className="pr-4"
              onPress={() => setIsShowPassword((prev) => !prev)}
            />
          ) : (
            <FontAwesome6
              name="eye-low-vision"
              size={18}
              color="black"
              className="pr-4"
              onPress={() => setIsShowPassword((prev) => !prev)}
            />
          ))}
      </View>
    </View>
  );
};

export default FormField;
