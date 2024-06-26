import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}
    >
      <View
        className={`w-20 h-20 p-3 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-100" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00BCC9] text-base font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
