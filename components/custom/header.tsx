import React from "react";
import { Text } from "../ui/text";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemeToggle } from "../ThemeToggle";
import ProfileMenu from "./profile-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Image } from "react-native-svg";
import { useColorScheme } from "~/lib/useColorScheme";

interface HeaderProps {
  onMenuPress: () => void;
}

const GITHUB_LOGO_LIGHT =
  "https://github.com/maneeshaindrachapa/Neon/blob/main/assets/images/logo-light.png?raw=true";
const GITHUB_LOGO_DARK =
  "https://github.com/maneeshaindrachapa/Neon/blob/main/assets/images/logo-dark.png?raw=true";

const Header: React.FC<HeaderProps> = ({ onMenuPress }) => {
  const { colorScheme } = useColorScheme();

  return (
    <View
      style={styles.container}
      className="flex-row justify-center items-center p-6 mt-10"
    >
      {/* Left Menu Icon */}
      <TouchableOpacity onPress={onMenuPress} className="p-2">
        <Avatar alt="app-icon" className="w-8 h-8 ml-2">
          {
            <AvatarImage
              source={{
                uri:
                  colorScheme === "dark" ? GITHUB_LOGO_LIGHT : GITHUB_LOGO_DARK,
              }}
            />
          }
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
});

export default Header;
