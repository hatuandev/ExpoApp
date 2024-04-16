import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import TextPrimary from "../Texts/TextPrimary";

export default function Header() {
  const [value, setValue] = React.useState("");

  return (
    <View>
      <View className="flex flex-row items-center gap-2">
        <Ionicons name="person-circle" size={46} color="black" />
        <View>
          <Text>User Name</Text>
          <Text>User Name</Text>
        </View>
      </View>
      <View>
        <TextPrimary />
      </View>
    </View>
  );
}
