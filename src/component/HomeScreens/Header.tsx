import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View>
      <View className="flex flex-row items-center gap-2">
        <Ionicons name="person-circle" size={46} color="black" />
        <View>
          <Text className="text-[14px]">Welcome</Text>
          <Text className="text-[18px]">User Name</Text>
        </View>
      </View>
    </View>
  );
}
