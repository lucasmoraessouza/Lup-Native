import { Text, TouchableOpacity, View, Modal, TextInput } from "react-native"
import { styles } from "./styles"

export function ModalAddProducts(props) {
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
                            <Text style={styles.title}>Adicionar produto ou serviço</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.label}>Descrição</Text>
                            <TextInput style={styles.input} />
                            <View style={styles.containerInputsInRow}>
                                <View style={styles.inputAndLabel}>

                                    <Text style={styles.label}>Quantidade</Text>
                                    <TextInput style={styles.smallInput} />
                                </View>
                                <View style={styles.inputAndLabel}>


                                    <Text style={styles.label}>Valor por unidade</Text>
                                    <TextInput style={styles.smallInput} placeholder="R$" placeholderTextColor="#DADADA" />
                                </View>
                            </View>
                            <Text style={styles.title}>Total: R$7.500,00</Text>
                        </View>

                        <View style={styles.containerModalBtn}>
                            <TouchableOpacity
                                style={styles.buttonDelete}
                                onPress={() => {
                                    props.setIsVisible(false)
                                }}
                            >
                                <Text style={styles.buttonDeleteText}>Excluir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonAdd}
                                onPress={() => {
                                    props.setIsVisible(false)
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