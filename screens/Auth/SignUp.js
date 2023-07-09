import React from "react";
import { Text } from "react-native";
import { padding } from "../../utils/helper";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView
      style={{
        ...padding(30, 36, 0, 36),
      }}
    >
      <Text> Sign up</Text>
    </SafeAreaView>
  );
};

export default SignUp;
