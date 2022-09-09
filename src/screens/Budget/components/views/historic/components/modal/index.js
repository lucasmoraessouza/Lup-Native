import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  ImageBackground,
} from "react-native"
import { styles } from "./styles"
import { ScrollView } from "react-native-gesture-handler"
import { FontAwesome } from "@expo/vector-icons"

export function ModalInfo(props) {
  const teste = [1, 2, 3]

  return (
    <>
      <Modal
        animationType="fade"
        transparent
        visible={props.isVisible}
        onRequestClose={() => {
          props.setIsVisible(false)
        }}
      >
        <View style={styles.modalBackGround}>
          <View style={styles.modalContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.containerTitle}>
                <View style={styles.containerCloseModal}>
                  <TouchableOpacity
                    onPress={() => {
                      props.setIsVisible(false)
                    }}
                  >
                    <Text style={styles.closeModal}>X</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.titleInfo}>Orçamento 05748</Text>
              </View>

              <View>
                <Text style={styles.subTitleInfo}> Dados do cliente </Text>
                <View style={styles.containerModalInfo}>
                  <View style={styles.subCardInfo}>
                    <Text style={styles.infoBold}>Nome: </Text>
                    <Text>Renato Mendes</Text>
                  </View>
                  <View style={styles.subCardInfo}>
                    <Text style={styles.infoBold}>Tipo de evento: </Text>
                    <Text>confraternização</Text>
                  </View>
                </View>
                <View style={styles.containerModalInfo}>
                  <View style={styles.subCardInfo}>
                    <Text style={styles.infoBold}>Data: </Text>
                    <Text>17/06/2021</Text>
                  </View>
                  <View style={styles.subCardInfo}>
                    <Text style={styles.infoBold}>Local: </Text>
                    <Text>Campinas - SP</Text>
                  </View>
                </View>
              </View>

              {teste.map((item, index) => {
                return (
                  <View key={index}>
                    <View>
                      <Text style={styles.subTitleInfo}>
                        Dados do orçamento
                      </Text>
                      <View style={styles.containerModalInfo}>
                        <View style={styles.subDataCardInfo}>
                          <Text style={styles.infoBold}>Descrição: </Text>
                          <Text>Centro de mesa floral Madri</Text>
                        </View>
                      </View>
                      <View style={styles.containerModalInfo}>
                        <View style={styles.subDataInfo}>
                          <Text style={styles.infoBold}>Unid.: </Text>
                          <Text>R$16,50</Text>
                        </View>
                        <View style={styles.subDataInfo}>
                          <Text style={styles.infoBold}>Qntd.:</Text>
                          <Text>185</Text>
                        </View>
                        <View style={styles.subDataInfo}>
                          <Text style={styles.infoBold}>Total: </Text>
                          <Text>R$3.052,50 - SP</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              })}

              <Text style={styles.titleFinancial}>Total: R$ 5.560,50</Text>

              <View>
                <Text style={styles.subTitleInfo}> Dados do pagamento </Text>
                <View style={styles.containerModalInfo}>
                  <View style={styles.subDataCardInfo}>
                    <Text style={styles.infoBold}>Tipo de pagamento: </Text>
                    <Text>Cartão de crédito</Text>
                  </View>
                </View>
                <View style={styles.containerModalInfo}>
                  <View style={styles.subDataCardInfo}>
                    <Text style={styles.infoBold}>Forma de pagamento:</Text>
                    <Text>Entrada de 30% + 5x de R$500,00 </Text>
                  </View>
                </View>
              </View>

              <View style={styles.containerBlur}>
                <ImageBackground
                  source={require("../../../../../../../assets/images/imgBlur.png")}
                  style={styles.containerBlur}
                  resizeMode="cover"
                  blurRadius={10}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Quer mais opções para este orçamento?
                  </Text>
                </ImageBackground>
              </View>

              <View>
                <TouchableOpacity onPress={() => {}} style={styles.button}>
                  <Text style={styles.buttonText}>
                    <FontAwesome name="diamond" size={20} color="white" />
                    Torne-se PRO
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.buttonCancel}
                >
                  <Text style={styles.buttonTextCancel}>
                    <FontAwesome name="trash-o" size={20} color="red" />
                    Cancelar orçamento
                  </Text>
                </TouchableOpacity>
              </View>

            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  )
}
