import { FlatList, ScrollView, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Header } from "../../components/Header"
import { styles } from "./style"
import { theme } from "../../global/styles/theme"
import { Feather, Entypo } from "@expo/vector-icons"
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars"
import { ModalInfoEvent } from "../../components/ModalInfoEvent"
import { ptBR } from "./components/localeConfig"
import { useState } from "react"

LocaleConfig.locales["pt-BR"] = ptBR
LocaleConfig.defaultLocale = "pt-BR"

export function Schedule() {
  const { primary, secondary } = theme.colors
  const [isVisible, setIsVisible] = useState(false)
  const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" }
  const massage = { key: "massage", color: "blue", selectedDotColor: "blue" }
  const workout = { key: "workout", color: "green" }

  const test = [1, 2, 3]

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[secondary, primary]}
        start={{ x: 0.0, y: 0.45 }}
        end={{ x: 1, y: 0 }}
      >
        <Header />

        <View style={styles.containerTab}>
          <ScrollView>
            <View style={styles.containerSchedule}>
              <View style={styles.containerTitle}>
                <Text style={styles.title}>Agenda</Text>
              </View>

              <View style={styles.containerSubtitle}>
                <View style={styles.subContainer}>
                  <View style={styles.labelCircleColor1} />
                  <View>
                    <Text>Evento contratado</Text>
                  </View>
                </View>

                <View style={styles.subContainer}>
                  <View style={styles.labelCircleColor2} />
                  <View>
                    <Text>Orçamento solicitado</Text>
                  </View>
                </View>
              </View>

              <CustomCalendar
                markingType={"multi-dot"}
                markedDates={{
                  "2022-09-08": {
                    dots: [vacation, massage, workout],
                    selected: true,
                  },
                  "2022-09-08": { dots: [massage, workout], disabled: true },
                }}
                renderArrow={(direction) => (
                  <Feather
                    size={24}
                    color={theme.colors.text}
                    name={
                      direction === "left" ? "chevron-left" : "chevron-right"
                    }
                  />
                )}
                headerStyle={{
                  backgroundColor: theme.colors.white,
                  borderBottomWidth: 0.5,
                  borderBottomColor: theme.colors.gray,
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
                theme={{
                  textDayFontFamily: theme.fonts.text400,
                  textDayHeaderFontFamily: theme.fonts.title600,
                  textDayHeaderFontSize: 10,
                  textMonthFontFamily: theme.fonts.title700,
                  textMonthFontSize: 20,
                  monthTextColor: theme.colors.gray,
                  arrowStyle: {
                    marginHorizontal: -15,
                  },
                }}
              />
            </View>

            <View style={styles.events}>
              <Text style={styles.eventTitle}>EVENTOS NO DIA</Text>

              {test.map((item, index) => {
                return (
                  <View key={index}>
                    <View style={styles.eventCard}>
                      <View style={styles.card}>
                        <Text style={styles.textCard}>
                          Feira aberta de Noivas 2021
                        </Text>
                        <Text style={styles.textCard}>
                          Onde: Guarulhos - SP
                        </Text>
                      </View>
                      <Entypo
                        name="plus"
                        size={30}
                        color={theme.colors.white}
                        onPress={() => setIsVisible(true)}
                      />
                    </View>

                    <View style={styles.eventCard2}>
                      <View style={styles.card}>
                        <Text style={styles.textCard}>
                          Feira aberta de Noivas 2021
                        </Text>
                        <Text style={styles.textCard}>
                          Onde: Guarulhos - SP
                        </Text>
                      </View>
                      <Entypo
                        name="plus"
                        size={30}
                        color={theme.colors.white}
                        onPress={() => setIsVisible(true)}
                      />
                    </View>
                  </View>
                )
              })}
            </View>
            <ModalInfoEvent setIsVisible={setIsVisible} isVisible={isVisible} />
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  )
}
