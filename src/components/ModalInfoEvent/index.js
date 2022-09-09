import { Text, TouchableOpacity, View, Modal, Image } from "react-native"
import { styles } from "./styles"

export function ModalInfoEvent(props) {
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
                        <View style={styles.containerInfo}>

                            <Text style={styles.titleInfo}>Solicitação de orçamento - Anúncio: #1231</Text>
                            <Text style={styles.textInfo}>Quando se fala em segurança esse é o item primordial a ser contratado em um evento....</Text>
                        </View>
                        <View style={styles.containerPhoto}>
                            <Text style={styles.title}>Dados do evento</Text>
                            <Image source={require('../../assets/images/example.png')} style={styles.logo} />
                        </View>
                        <View style={styles.containerModalInfo}>
                            <View style={styles.subCardInfo}>
                                <Text style={styles.cardInfoTitle}>Nome: </Text>
                                <Text style={styles.cardInfoSubtitle}>Daniela Sanches</Text>
                            </View>
                            <View style={styles.subCardInfo}>
                                <Text style={styles.cardInfoTitle}>Tipo de evento: </Text>
                                <Text style={styles.cardInfoSubtitle}>Casamento</Text>
                            </View>
                        </View>
                        <View style={styles.containerModalInfo}>
                            <View style={styles.subCardInfo}>
                                <Text style={styles.cardInfoTitle}>Data: </Text>
                                <Text style={styles.cardInfoSubtitle}>09/04/2021</Text>
                            </View>
                            <View style={styles.subCardInfo}>
                                <Text style={styles.cardInfoTitle}>Local: </Text>
                                <Text style={styles.cardInfoSubtitle}>Guarulhos - SP</Text>
                            </View>
                        </View>
                        <View style={styles.containerModalInfo}>
                            <View style={styles.subCardInfo}>
                                <Text style={styles.cardInfoTitle}>Início: </Text>
                                <Text style={styles.cardInfoSubtitle}>19:30</Text>
                            </View>
                            <View style={styles.subCardInfo}>
                                <Text style={styles.cardInfoTitle}>Término: </Text>
                                <Text style={styles.cardInfoSubtitle}>02:00</Text>
                            </View>
                        </View>


                        <View style={styles.containerModalBtn}>
                            <TouchableOpacity
                                style={styles.buttonCancel}
                                onPress={() => {
                                    props.setIsVisible(false)
                                }}
                            >
                                <Text style={styles.buttonCancelText}>Enviar Orçamento</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonPlus}
                                onPress={() => {
                                    props.setIsVisible(false)
                                }}
                            >
                                <Text style={styles.buttonPlusText}>Recusar Orçamento</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}