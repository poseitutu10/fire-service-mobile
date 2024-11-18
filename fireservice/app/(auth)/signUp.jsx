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
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const signUp = () => {
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signUpFunction = async () => {
    setIsLoading(true);
    try {
      const response = createUserWithEmailAndPassword(
        auth,
        signUp.email,
        signUp.password
      );
      if (response) {
        // alert("Check your email");
        setTimeout(() => {
          router.push("/signIn");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Created successfully");
    }
  };
  return (
    <SafeAreaView className="bg-sky-500 flex-1">
      <ScrollView className="space-y-5 pt-20 px-5">
        <AppName />
        <Text className="text-lg text-white">Sign up to FireAlert</Text>
        <View className="">
          {/* <FormField
            name="username"
            handleChange={(text) =>
              setSignUp((prev) => ({ ...prev, username: text }))
            }
          /> */}
          <FormField
            name="email"
            handleChange={(text) =>
              setSignUp((prev) => ({ ...prev, email: text }))
            }
          />
          <FormField
            name="password"
            handleChange={(text) =>
              setSignUp((prev) => ({ ...prev, password: text }))
            }
          />
          <TouchableOpacity
            className="my-5 bg-red-500 w-full rounded-lg"
            activeOpacity={0.9}
            onPress={() => signUpFunction()}
          >
            {isLoading ? (
              <ActivityIndicator className="py-3" color="white" />
            ) : (
              <Text className="text-center py-3 text-white">Sign in</Text>
            )}
          </TouchableOpacity>
          <Text className="text-white">
            You already have an account?{" "}
            <Link href="/signIn" className="text-red-500">
              Sign In
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;
