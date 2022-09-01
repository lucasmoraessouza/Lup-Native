import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { ModalInfo } from "../modal"
import { styles } from "./styles"

export function BudgetCard() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <View style={styles.shadowProp}>
        <View style={styles.containerCard}>
          <Text style={styles.titleInfo}>Orçamento: Renato Mendes</Text>
          <View style={styles.sectionInformation}>
            <View style={styles.containerInfo}>
              <Text style={styles.subTitleInfo}>
                Tipo de evento: confraternização
              </Text>
              <Text style={styles.subTitleInfo}>Data: 17/06/2021</Text>
            </View>
            <View style={styles.containerBtn}>
              <TouchableOpacity
                style={styles.buttonPlus}
                onPress={() => {
                  setIsVisible(true)
                }}
              >
                <Text style={styles.buttonPlusText}> + informações</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <ModalInfo setIsVisible={setIsVisible} isVisible={isVisible} />
    </>
  )
}
