import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles'

export function ProductsAndServices() {

    return (
        <>
            <View style={styles.shadowProp}>
                <View style={styles.containerCard}>
                    <View style={styles.containerTitle}>
                        <MaterialCommunityIcons name="pencil" size={24} color="gray" />
                    </View>
                    <View style={styles.containerInfo}>
                        <View>
                            <View style={styles.rowStyleInfo}>
                                <Text >
                                    Descrição:
                                </Text>
                                <Text style={styles.subTitleInfo}>
                                    Cadeira paris
                                </Text>
                            </View>
                            <View style={styles.rowStyleInfo}>
                                <Text >
                                    Qntd:
                                </Text>
                                <Text style={styles.subTitleInfo}>150</Text>
                            </View>
                            <View style={styles.rowStyleInfo}>
                                <Text >
                                    Valor Unit.:
                                </Text>
                                <Text style={styles.subTitleInfo}>R$50,00</Text>
                            </View>
                            <View style={styles.rowStyleInfo}>
                                <Text style={styles.subTitleInfoBold}>
                                    TOTAL:
                                </Text>
                                <Text style={styles.subTitleInfoBold}>R$7.500,00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </>
    )
}