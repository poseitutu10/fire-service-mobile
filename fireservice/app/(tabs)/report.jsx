import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytes } from "firebase/storage";
import { createClient } from "@supabase/supabase-js";
import { FIREBASE_STORAGE } from "../../FirebaseConfig";

// Initialize Supabase client
const SUPABASE_URL = "https://cltswumauqstgmfkpmva.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdHN3dW1hdXFzdGdtZmtwbXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4ODg4NjEsImV4cCI6MjA0NDQ2NDg2MX0.D76oJj5-BWim762rBABjZai7WDhwabeDzX7WB2-V7nY"; // Replace with your Supabase anon key
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Report = () => {
  const [url, setUrl] = useState("");
  const [contact, setContact] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const uploadPic = async () => {
    if (!imageUri) {
      Alert.alert("No image selected!");
      return null;
    }

    const response = await fetch(imageUri);
    const blob = await response.blob();
    const fileName = imageUri.split("/").pop();
    const storageRef = ref(FIREBASE_STORAGE, `images/${fileName}`);

    try {
      await uploadBytes(storageRef, blob);

      // Get the public URL of the uploaded image
      const imageUrl = `https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT_ID.appspot.com/o/images%2F${fileName}?alt=media`; // Adjust accordingly
      return imageUrl;
    } catch (error) {
      Alert.alert("Upload failed: ", error.message);
      return null;
    }
  };

  const handleSubmit = async () => {
    const imageUrl = await uploadPic(); // Upload image and get URL
    console.log("Uploaded Image URL:", imageUrl); // Log the image URL for debugging

    if (imageUrl) {
      const { error } = await supabase
        .from("Alert")
        .insert([{ url, contact, image: imageUrl }]);

      if (error) {
        Alert.alert("Error submitting report", error.message);
      } else {
        // Send email
        try {
          const response = await fetch("http://172.16.6.173:5050", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url,
              contact,
              imageUrl, // Make sure this is the correct URL
            }),
          });

          if (response.ok) {
            Alert.alert("Report submitted and email sent successfully!");
          } else {
            const errorResponse = await response.text();
            Alert.alert("Error sending email: " + errorResponse);
          }

          setUrl("");
          setContact("");
          setImageUri(null);
        } catch (error) {
          console.log("Network request failed: ", error);
        }
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-sky-500 justify-center">
      <View className="m-3">
        <Text className="text-white text-xl font-semibold">
          Get in touch with our fire service team
        </Text>
        <View className="py-5 justify-center">
          <Text className="mb-2 font-bold text-white">URL:</Text>
          <TextInput
            className="h-10 border border-gray-300 mb-4 p-2 rounded"
            value={url}
            onChangeText={setUrl}
            placeholder="Enter URL"
          />

          <Text className="mb-2 font-bold text-white">Contact Number:</Text>
          <TextInput
            className="h-10 border border-gray-300 mb-4 p-2 rounded"
            value={contact}
            onChangeText={setContact}
            placeholder="Enter Contact Number"
            keyboardType="phone-pad"
          />
          <View className="text-white border border-white my-5 flex items-center">
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
              className="text-white"
            />
            {imageUri && (
              <Image
                source={{ uri: imageUri }}
                style={{ width: 100, height: 100 }}
                className="rounded-3xl"
              />
            )}
          </View>
          <TouchableOpacity
            className="bg-red-500 text-white py-2 px-4 rounded"
            onPress={handleSubmit}
          >
            <Text className="text-center text-white">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Report;
