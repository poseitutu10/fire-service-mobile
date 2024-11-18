import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppName from "../../components/AppName";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const signIn = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signInFunction = async () => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        signInForm.email,
        signInForm.password
      );
      if (response) {
        router.push("/home");
      }
    } catch (err) {
      console.log("Account doesn't exist");
      alert("Account doesn't exist");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-sky-500 flex-1">
      <ScrollView className="space-y-5 pt-20 px-5">
        <AppName />
        <Text className="text-lg text-white">Log in to FireAlert</Text>
        <View className="">
          <FormField
            name="email"
            value={signInForm.email}
            handleChange={(text) =>
              setSignInForm((prev) => {
                return {
                  ...prev,
                  email: text,
                };
              })
            }
          />
          <FormField
            name="password"
            value={signInForm.password}
            handleChange={(text) => {
              setSignInForm((prev) => {
                return {
                  ...prev,
                  password: text,
                };
              });
            }}
          />
          <TouchableOpacity
            className="my-5 bg-red-500 w-full rounded-lg"
            activeOpacity={0.9}
            onPress={() => signInFunction()}
          >
            {isLoading ? (
              <ActivityIndicator className="py-3" color="white" />
            ) : (
              <Text className="text-center py-3 text-white">Sign in</Text>
            )}
          </TouchableOpacity>
          <Text className="text-white">
            Don't have an account?{" "}
            <Link href="/signUp" className="text-red-500">
              Sign Up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
