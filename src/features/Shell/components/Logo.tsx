import React from "react";
import { Image, StyleSheet } from "react-native";

const logo = require("../../../assets/logo.png");

const Logo: React.FC = () => {
  return <Image source={logo} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: { width: 300, height: 300 },
});

export default Logo;
