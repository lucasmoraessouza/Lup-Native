import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { PhotosAndVideos } from '../PhotosAndVideos';

export function Media() {
    const data = {
        thumbnail: "https://www.tragial.com.br/wp-content/uploads/2020/02/hb20.png",
    };

    return (
        <View >
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={[1, 2, 3]}
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => <PhotosAndVideos data={data} />}
            >
                <PhotosAndVideos data={data} />
            </FlatList>
        </View>
    )
}