import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ArtItem } from "../state";

interface FooterProps {
  item: ArtItem;
  addArtToFavorites: (item: ArtItem) => void;
  isFavorite: boolean;
}

const Footer: React.FC<FooterProps> = ({
  item,
  addArtToFavorites,
  isFavorite,
}) => {
  const [footerVisible, setFooterVisibility] = React.useState<boolean>(false);

  if (!footerVisible) {
    return (
      <TouchableOpacity
        style={styles.footerExpandButton}
        onPress={() => setFooterVisibility(true)}
      >
        <Text style={styles.footerExpandText}>?</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerCloseButton}
          onPress={() => setFooterVisibility(false)}
        >
          <Text style={styles.footerCloseText}>x</Text>
        </TouchableOpacity>
        <Text style={[styles.footerText]}>
          <Text style={[styles.footerText, { fontWeight: "600" }]}>
            Title:{" "}
          </Text>
          {item.title}
        </Text>
        <Text style={[styles.footerText]}>
          <Text style={[styles.footerText, { fontWeight: "600" }]}>
            Medium:{" "}
          </Text>
          {item.medium}
        </Text>
        <Text style={[styles.footerText]}>
          <Text style={[styles.footerText, { fontWeight: "600" }]}>Date: </Text>
          {item.date}
        </Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => addArtToFavorites(item)}
        >
          <Text>{isFavorite ? "I dig it!" : "Dig it?"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  favoriteButton: { backgroundColor: "white", padding: 7, borderRadius: 5 },
  footer: {
    alignItems: "flex-start",
    backgroundColor: "rgba(0, 0, 0, .4)",
    height: 200,
    justifyContent: "center",
    padding: 8,
    width: "100%",
  },
  footerCloseButton: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.4)",
    borderRadius: 12.5,
    height: 25,
    justifyContent: "center",
    width: 25,
    position: "absolute",
    top: 5,
    right: 5,
  },
  footerCloseText: {
    fontSize: 18,
    fontWeight: "500",
    paddingRight: 1,
    paddingBottom: 2.5,
    color: "white",
  },
  footerExpandText: { fontSize: 22, paddingLeft: 1, color: "white" },
  footerExpandButton: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)",
    borderRadius: 15,
    height: 30,
    justifyContent: "center",
    marginBottom: 5,
    marginLeft: 5,
    width: 30,
  },
  footerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 15,
  },
  text: {
    color: "#4F4F4F",
    fontSize: 15,
  },
});

export default Footer;
