import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constansts";
import { padding } from "../utils/helper";
import { SvgXml } from "react-native-svg";

const xml = `
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.40991 19.9201L15.9299 13.4001C16.6999 12.6301 16.6999 11.3701 15.9299 10.6001L9.40991 4.08008" stroke="#FEFEFE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const Button = ({ handlePress, text, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        ...padding(12, 24, 12, 24),
        borderRadius: 12,
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontWeight: 600,
          fontSize: 20,
          color: COLORS["white-01"],
          textAlign: "center",
        }}
      >
        {text}
      </Text>
      <SvgXml xml={xml} />
    </TouchableOpacity>
  );
};

export default Button;
