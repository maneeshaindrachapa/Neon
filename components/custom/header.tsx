import React from "react";
import { Text } from "../ui/text";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemeToggle } from "../ThemeToggle";
import ProfileMenu from "./profile-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Image } from "react-native-svg";

interface HeaderProps {
  onMenuPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuPress }) => {
  return (
    <View
      style={styles.container}
      className="flex-row justify-center items-center p-6 mt-10"
    >
      {/* Left Menu Icon */}
      <TouchableOpacity onPress={onMenuPress} className="p-2">
        <Avatar alt="app-icon" className="w-8 h-8 ml-2">
          <AvatarImage
            source={{ uri: require("../../assets/images/logo-light.png") }}
          />
          <AvatarFallback>
            <Text>ZN</Text>
          </AvatarFallback>
        </Avatar>
      </TouchableOpacity>

      {/* Right Side Controls */}
      <View className="flex-row items-center ml-auto">
        {/* Theme Toggle Switch */}
        <ThemeToggle />
        <ProfileMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  menuButton: {
    padding: 8,
  },
  rightControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginLeft: 10,
  },
});

export default Header;
