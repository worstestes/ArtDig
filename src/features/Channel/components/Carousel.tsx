import React from "react";
import { Dimensions, ScrollView, StyleSheet, View, Text } from "react-native";
import { ArtItem } from "../state";

interface CarouselProps {
  items: ArtItem[];
  selectImage: (item: ArtItem | null) => void;
  selectedImage: ArtItem | null;
  addArtToFavorites: (item: ArtItem) => void;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const imageWidth = screenWidth / 1.25;
const imageHeight = screenHeight / 1.5;
import ImageModal from "react-native-image-modal";
import Footer from "./Footer";

const Carousel: React.FC<CarouselProps> = ({
  items,
  selectImage,
  addArtToFavorites,
}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainerStyle}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {items.map((item) => {
        return (
          <View style={styles.imageContainer} key={item.id}>
            <ImageModal
              resizeMode="cover"
              imageBackgroundColor="white"
              style={styles.image}
              source={{
                uri: item.imageLink,
              }}
              onClose={() => selectImage(null)}
              onTap={() => selectImage(item)}
              renderFooter={() => (
                <Footer addArtToFavorites={addArtToFavorites} item={item} />
              )}
            />
            <Text
              style={[
                styles.titleText,
                item.title.length > 18 ? { fontSize: 12 } : null,
              ]}
            >
              {item.title}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    height: "80%",
    marginRight: 15,
    width: imageWidth,
  },

  image: {
    borderRadius: 2,
    height: imageHeight,
    marginBottom: 10,
    width: imageWidth,
  },
  scrollViewContainerStyle: {
    alignContent: "center",
    alignItems: "center",
    height: 600,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
    width: "90%",
  },
});

export default Carousel;
