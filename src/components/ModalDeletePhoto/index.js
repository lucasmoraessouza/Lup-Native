import { Text, TouchableOpacity, View, Modal, Image } from "react-native"
import { styles } from "./styles"

export function ModalDeletePhoto(props) {
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
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.containerPhoto}>
              <Text style={styles.title}>Excluir foto?</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>
                Ao excluir a foto seus clientes vão conhecer
                um pouco menos sobre o seu trabalho.
              </Text>
            </View>

            <View style={styles.containerModalBtn}>
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={() => {
                  props.setIsVisible(false)
                }}
              >
                <Text style={styles.buttonCancelText}>Não, manter foto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonPlus}
                onPress={() => {
                  props.setIsVisible(false)
                }}
              >
                <Text style={styles.buttonPlusText}>Sim, excluir foto</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}
