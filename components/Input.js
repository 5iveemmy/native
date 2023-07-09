import React from "react";
import { Text, TextInput, View } from "react-native";
import { COLORS } from "../constansts";
import { padding } from "../utils/helper";

const Input = ({ label, value, onChangeText, ...props }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          paddingBottom: 10,
          fontSize: 13,
          color: COLORS.primary,
          fontWeight: 700,
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          height: 60,
          borderWidth: 1,
          ...padding(12, 24),
          borderRadius: 12,
          borderColor: COLORS["grey-light-01"],
        }}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
    </View>
  );
};

export default Input;
