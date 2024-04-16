import { View, Text, TextInput } from "react-native";
import React from "react";
import { Feather, Ionicons, Fontisto } from "@expo/vector-icons";
import TextPrimary from "../Texts/TextPrimary";

export default function Header() {
  return (
    <View className="p-3 pt-10">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-1">
          <Ionicons name="person-circle" size={46} color="white" />
          <View>
            <Text className="font-bold text-blue-500">Ho Anh Tuan</Text>
            <Text className="font-normal text-blue-500">User Name</Text>
          </View>
        </View>
        <Fontisto name="bell" size={28} color="white" />
      </View>
      <View className="relative flex flex-row items-center justify-start mt-4 mb-1">
        <TextInput
          placeholder="Tìm kiếm"
          className="absolute p-1 pl-8 bg-white border border-white text-gray-900 text-lg rounded-xl w-full h-9"
        />
        <View className="pl-2">
          <Feather name="search" size={20} color="black" />
        </View>
      </View>
    </View>
  );
}
