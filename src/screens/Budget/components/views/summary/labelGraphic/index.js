import { View, Text } from "react-native"
import { styles } from "./styles"

export function LabelGraphic() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.labelCircleColor1} />
        <View>
          <Text>Aprovado</Text>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.labelCircleColor2} />
        <View>
          <Text>Recusado</Text>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.labelCircleColor3} />
        <View>
          <Text>Em andamento</Text>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.labelCircleColor4} />
        <View>
          <Text>Cancelado</Text>
        </View>
      </View>
    </View>
  )
}
