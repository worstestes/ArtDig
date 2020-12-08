import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { appDispatch, AppState } from "..";
import Logo from "../Shell/components/Logo";
import Carousel from "./components/Carousel";
import { ArtItem } from "./state";
const { width: screenWidth } = Dimensions.get("window");

const Channel: React.FC = () => {
  const { items } = useSelector((state: AppState) => state.channel);

  const [selectedImage, selectImage] = React.useState<ArtItem | null>(null);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navBar}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => alert("hello")}
            style={{ position: "absolute", left: 15, top: 22.5 }}
          >
            <Image
              source={require("../../assets/menu.png")}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          <Logo width={50} height={50} />
          <Text style={styles.navBarTitle}>Dig This! Art Bazaar</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Carousel
          items={items}
          selectImage={selectImage}
          selectedImage={selectedImage}
          addArtToFavorites={(art: ArtItem) =>
            appDispatch({ type: "Channel.addArt", item: art })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth,
  },
  navBar: {
    alignContent: "center",
    backgroundColor: "rgba(0,0,0,.4)",
    height: 80,
    justifyContent: "center",
    paddingTop: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },

  navBarTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Channel;
