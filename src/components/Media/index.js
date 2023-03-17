import React, { useEffect } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { PhotosAndVideos } from '../PhotosAndVideos';
import { StyleSheet } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { api } from '../../services';

export function Media({ medias }) {
    const images = [1, 2, 3]
    const data = {
        thumbnail: "https://www.tragial.com.br/wp-content/uploads/2020/02/hb20.png",
    };

    return (
        <View >
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={[ ...medias, { addImage: true }]}
                keyExtractor={(item) => String(item)}
                renderItem={({ item: midia }) => {
                    if (midia.addImage) {
                        return (
                            <View style={styles.wrapper}>
                                <TouchableOpacity style={styles.addImage}>
                                    <EvilIcons name="plus" size={60} color="#5F5F5F" />
                                    <Text style={{ marginTop: 5 }}>Adicionar</Text>
                                    <Text>nova foto</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    } else {
                        return (
                            <PhotosAndVideos data={midia} />
                        )
                    }
                }}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addImage: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
});
