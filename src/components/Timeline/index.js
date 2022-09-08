import React from "react";
import { View, Text, ImageBackground } from 'react-native'
import { styles } from "./styles";

export function Timeline({ color, day, month }) {

    return (
        <View style={styles.container}>
            <View style={styles.containerDate}>
                <Text style={styles.day}>
                    {day}
                </Text>
                <Text style={styles.month}>
                    {month}
                </Text>
            </View>
            <View >
                <ImageBackground source={require('../../assets/images/home/imgPonto.png')} style={styles.line} >
                    <View style={styles.circle} />
                </ImageBackground>
            </View>
            <View style={[styles.content, { backgroundColor: color ? color : '#9980FA' }]}>
                <Text style={styles.contentTitle}>Casamento de Daniela Sanches</Text>
                <Text style={styles.contentText}>Onde: Guarulhos - SP</Text>
            </View>
        </View>
    );
}
