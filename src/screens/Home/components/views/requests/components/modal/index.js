import { Text, TouchableOpacity, View, Modal, Image } from "react-native"
import { styles } from "./styles"

export function ModalInfo(props) {
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
            <View style={styles.containerPhoto}>
              <Text>Solicitação de Orçamento</Text>
              <Image
                style={styles.imgClient}
                source={require("../../../../../../../assets/images/home/FotoCliente.png")}
              />
            </View>
            <View style={styles.containerModalInfo}>
              <View>
                <Text>Nome: </Text>
                <Text>Renato Mendes</Text>
              </View>
              <View>
                <Text>Nome: </Text>
                <Text>Renato Mendes</Text>
              </View>
            </View>
            <View style={styles.containerModalInfo}>
              <View>
                <Text>Nome: </Text>
                <Text>Renato Mendes</Text>
              </View>
              <View>
                <Text>Nome: </Text>
                <Text>Renato Mendes</Text>
              </View>
            </View>

            <View style={styles.containerModalBtn}>
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={() => {
                  props.setIsVisible(false)
                }}
              >
                <Text style={styles.buttonCancelText}>Recusar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonPlus}
                onPress={() => {
                  props.setIsVisible(false)
                }}
              >
                <Text style={styles.buttonPlusText}>Aceitar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}
