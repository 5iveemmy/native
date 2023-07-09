import React from "react";
import { ImageBackground } from "react-native";
import { Text } from "react-native";
import { padding } from "../../utils/helper";
import { SafeAreaView } from "react-native-safe-area-context";
import onboarding from "../../assets/images/onboarding.png";
import { COLORS } from "../../constansts";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "../../constansts/theme";

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={onboarding}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 100,
      }}
    >
      <SafeAreaView
        style={{
          ...padding(0, 40, 0, 40),
        }}
      >
        <Text style={{ color: COLORS["white-01"], fontSize: SIZES.bigFont }}>
          Welcome to aisles
        </Text>
        <Text
          style={{
            color: COLORS["white-01"],
            fontSize: 20,
            ...padding(24, 0, 24, 0),
          }}
        >
          Become a Picker agent, click the button below to continue.
        </Text>
        <Button
          text="Continue"
          handlePress={() => navigation.navigate("SignUp")}
        />
        <Text
          style={{
            color: COLORS.primary,
            fontSize: SIZES.base,
            paddingTop: 30,
            textDecorationLine: "underline",
            textAlign: "center",
          }}
        >
          I have an account
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding;
