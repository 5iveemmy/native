import { padding } from "../../utils/helper";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { COLORS } from "../../constansts";
import { SIZES } from "../../constansts/theme";
import Input from "../../components/Input";
import Button from "../../components/Button";
import PhoneInput from "react-native-phone-number-input";
import { useRef, useState } from "react";

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.0001 19.9201L8.48009 13.4001C7.71009 12.6301 7.71009 11.3701 8.48009 10.6001L15.0001 4.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const SignUp = () => {
  const [text, onChangeText] = useState("");
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);
  return (
    <SafeAreaView
      style={{
        ...padding(30, 36, 0, 36),
      }}
    >
      <SvgXml xml={xml} onPress={() => navigation.goBack()} />

      <Text
        style={{
          paddingTop: 36,
          fontSize: SIZES.bigFont,
          fontWeight: 700,
          width: 300,
        }}
      >
        Setting up your Aisles Account
      </Text>
      <Text
        style={{
          paddingTop: 24,
          paddingBottom: 36,
          fontSize: SIZES.base,
          color: COLORS["grey-light-05"],
        }}
      >
        Enter Personal Details
      </Text>

      <View style={{ gap: 24 }}>
        <Input
          label="Personal Details"
          placeholder="Enter your first name"
          onChangeText={onChangeText}
          value={text}
        />
        <Input
          label="Last Name"
          placeholder="Enter your Last name"
          onChangeText={onChangeText}
          value={text}
        />
        <View>
          <Text
            style={{
              paddingBottom: 10,
              fontSize: 13,
              color: COLORS.primary,
              fontWeight: 700,
            }}
          >
            Phone number
          </Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="second"
            onChangeText={(text) => {
              setValue(text);
            }}
            containerStyle={{
              backgroundColor: "transparent",
              borderColor: COLORS["grey-light-01"],
              borderWidth: 1,
              width: "100%",
              borderRadius: 12,
            }}
            textContainerStyle={{ backgroundColor: "transparent" }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            autoFocus
          />
        </View>
        <Input
          label="E-mail Address"
          placeholder="Enter your email address"
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      <Button text="proceed" marginTop={36} />
    </SafeAreaView>
  );
};

export default SignUp;
