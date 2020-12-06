import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo: React.FC = () => {
  return (
    <Image source={require("../../../assets/logo.png")} style={styles.logo} />
  );
};

const styles = StyleSheet.create({
  logo: { width: 300, height: 300 },
});

export default Logo;
