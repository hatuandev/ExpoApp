import { Text } from "react-native";
import React from "react";

type TextProps = {
  weight?: "regular" | "bold";
};

const TextPrimary: React.FC<TextProps> = ({ ...props }) => {
  return (
    <Text className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
      Hồ Anh Tuấn
    </Text>
  );
};

export default TextPrimary;
