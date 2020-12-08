import React from "react";
import { Image, StyleSheet } from "react-native";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <Image
      source={require("../../../assets/logo.png")}
      style={[
        styles.logo,
        width ? { width: width } : null,
        height ? { height: height } : null,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  logo: { width: 300, height: 300 },
});

export default Logo;
