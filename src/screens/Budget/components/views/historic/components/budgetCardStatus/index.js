import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { ModalInfo } from "../modal"
import { styles } from "./styles"

export function BudgetCardStatus() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <View style={styles.shadowProp}>
        <View style={styles.containerCard}>
          <View style={styles.containerTitle}>
            <Text style={styles.titleInfo}>Orçamento: 05748</Text>
            <Text style={styles.titleInfoStatus}>Aprovado</Text>
          </View>
          <View style={styles.sectionInformation}>
            <View style={styles.containerInfo}>
              <View>
                <View style={styles.rowStyleInfo}>
                  <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                    Nome:
                  </Text>
                  <Text style={styles.subTitleInfo}>
                    Carla dos Santos Andrade
                  </Text>
                </View>
                <View style={styles.rowStyleInfo}>
                  <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                    Tipo de evento:
                  </Text>
                  <Text style={styles.subTitleInfo}>Happy Hour</Text>
                </View>
                <View style={styles.rowStyleInfo}>
                  <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                    Data do evento:
                  </Text>
                  <Text style={styles.subTitleInfo}>15/07/2021</Text>
                </View>
                <View style={styles.rowStyleInfo}>
                  <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                    Valor do orçamento:
                  </Text>
                  <Text style={styles.subTitleInfo}>R$3.250,00</Text>
                </View>
              </View>

              <View style={styles.containerBtn}>
                <TouchableOpacity
                  onPress={() => {
                    setIsVisible(true)
                  }}
                >
                  <Text style={styles.buttonPlusText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <ModalInfo setIsVisible={setIsVisible} isVisible={isVisible} />
    </>
  )
}
