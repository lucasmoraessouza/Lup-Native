import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import { theme } from "../../global/styles/theme"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { ScrollView } from "react-native-gesture-handler"
import { Headers } from "../../components/Header"
import { ProductsAndServices } from './components/ProductsAndServices'
import { PaymentMethods } from "./components/PaymentMethods"
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export function Calculate() {
  const { primary, secondary } = theme.colors

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[secondary, primary]}
        start={{ x: 0.0, y: 0.45 }}
        end={{ x: 1, y: 0 }}
      >
        <Headers />

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Criar Orçamento</Text>
          <Text style={styles.subtitle}>Dados do cliente</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Telefone</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Celular</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} />
            <Text style={styles.subtitle}>Dados do evento</Text>
            <Text style={styles.label}>Tipo de evento</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Data do evento</Text>
            <TextInput style={styles.input} />
            <View style={styles.containerProductsAndServices}>
              <Text style={styles.subtitle}>Produtos e serviços</Text>
              <ProductsAndServices />
              <ProductsAndServices />
              <Text style={styles.textMoreProducts}>+ Adicionar produto ou serviço</Text>
            </View>
            <View style={styles.containerPaymentMethods}>
              <Text style={styles.subtitle}>Tipo de pagamento</Text>
              <Text style={styles.textInfoPayment}>Escolha até dois tipos de pagamento</Text>
              <PaymentMethods name={"Cartão de Crédito"} icon={<Octicons name="credit-card" size={24} color="black" />} />
              <PaymentMethods name={"Dinheiro"} icon={<FontAwesome5 name="money-bill-alt" size={24} color="black" />} />
              <PaymentMethods name={"Boleto"} icon={<MaterialCommunityIcons name="barcode" size={24} color="black" />} />
              <PaymentMethods name={"Pix"} icon={<FontAwesome name="send-o" size={24} color="black" />} />
            </View>
            <View style={styles.containerPaymentMethods}>
              <Text style={styles.subtitle}>Formas de pagamento</Text>
              <Text style={styles.textInfoPayment}>Ex.: parcelar compra em 3x, entrada de 50%, etc...</Text>
              <View style={styles.textAreaContainer}>
                <TextInput style={styles.textArea} multiline={true}
                  numberOfLines={4} />
              </View>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.buttonOutlined}>
                <Text style={styles.buttonTextOutlined}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar e salvar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerCancel}>

              <Ionicons name="trash-bin" size={14} color="#ED4C67" />
              <Text style={styles.textCancel}>Cancelar orçamento</Text>
            </View>

          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}
