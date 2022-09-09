import { Text, TouchableOpacity, View, Modal, TextInput } from "react-native"
import { styles } from "./styles"

export function ModalSendBudget(props) {
    return (
        <>
            <Modal
                animationType="fade"
                transparent
                visible={props.isVisibleBudget}
                onRequestClose={() => {
                    props.setIsVisibleBudget(false)
                }}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={styles.containerPhoto}>
                            <Text style={styles.title}>Enviar Orçamento</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.label}>Digite um e-mail para envio</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.containerModalBtn}>
                            <TouchableOpacity
                                style={styles.buttonDelete}
                                onPress={() => {
                                    props.setIsVisibleBudget(false)
                                }}
                            >
                                <Text style={styles.buttonDeleteText}>Excluir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonAdd}
                                onPress={() => {
                                    props.setIsVisibleBudget(false)
                                }}
                            >
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}