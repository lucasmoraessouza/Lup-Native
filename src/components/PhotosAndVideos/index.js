import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";


export function PhotosAndVideos({ data }) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/example.png')} resizeMode="contain" style={styles.image} />
        </View>
    );
}
