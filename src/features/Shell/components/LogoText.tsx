import React from "react";
import { StyleSheet, Text } from "react-native";

interface LogoTextProps {
  children: string;
}

const LogoText: React.FC<LogoTextProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#4F4F4F",
    fontSize: 15,
  },
});

export default LogoText;
