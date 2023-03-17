import React, { useState } from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { ModalDeletePhoto } from "../ModalDeletePhoto";
import { ModalInfoEvent } from '../../components/ModalInfoEvent'

export function PhotosAndVideos({ data }) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {setIsVisible(true)}} >
                    <Image source={{ uri: data.url }} resizeMode="cover" style={styles.image} />
                </TouchableOpacity>
            </View>

            <ModalDeletePhoto setIsVisible={setIsVisible} isVisible={isVisible} />
        </>
    );
}