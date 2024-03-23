import React, { useEffect, useState } from "react";
import { View, Text, Button, Image } from "react-native";

import Logo from "../../../assets/logo.png";
import styles from "./style";
import Divider from "../Divider";
import { DISC_ASSETS_BASE_URL } from "../../constants/disc";
import BuyButton from "../BuyButton";
import { AlbumModel } from "./props";
import { handleNextItem, handlePreviousItem, loadDiscData } from "./actions";

export default function CardView() {
  const [discData, setDiscData] = useState<AlbumModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadDiscData(1, setDiscData);
      console.log("DiscData", discData);
    })();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderDiscDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.discBrand}>Queen</Text>
      <Text style={styles.discName}>{discData?.albumName}</Text>
    </View>
  );

  const renderDiscImage = () => {
    // Garantir que discData e discData.id estejam definidos antes de tentar renderizar a imagem
    if (discData && discData.id) {
      const imageUrl = `${DISC_ASSETS_BASE_URL}${discData.id}.png`;
  
      return (
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
      );
    }
  
    // Retorne null ou alguma imagem padrão se discData for nulo ou discData.id não estiver definido
    return null;
  };
  

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#D1A954"}
        onPress={() => handlePreviousItem(discData, setDiscData)}
      />
      <Text style={styles.priceLabel}> {discData?.releaseYear}</Text>
      <Button
        title=">"
        color={"#D1A954"}
        onPress={() => handleNextItem(discData, setDiscData)}
      />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      {renderDiscDetails()}
      {renderDiscImage()}

      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}