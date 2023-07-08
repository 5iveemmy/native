import React from "react";
import { ImageBackground } from "react-native";
import { Text } from "react-native";
import { padding } from "../../utils/helper";
import { SafeAreaView } from "react-native-safe-area-context";
import onboarding from "../../assets/images/onboarding.png";

const Onboarding = () => {
  return (
    <ImageBackground
      source={onboarding}
      resizeMode="cover"
      style={{ background: "no-repeat" }}
    >
      <SafeAreaView style={{ ...padding(0, 40, 0, 40) }}>
        <Text>Welcome uoooo aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
        <Text>Welcome to aisles</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding;
