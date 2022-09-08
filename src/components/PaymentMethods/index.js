import { Text, View } from "react-native"
import { styles } from './styles'
export function PaymentMethods({ name, icon }) {

    return (
        <>
            <View style={styles.shadowProp}>
                <View style={styles.containerCard}>
                    <View style={styles.content}>

                        {icon}
                        <Text style={styles.title}>{name}</Text>
                        <View style={styles.circle} />
                    </View>
                </View>
            </View>

        </>
    )
}