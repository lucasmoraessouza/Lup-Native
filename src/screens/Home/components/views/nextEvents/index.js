import { useEffect, useState } from "react"
import { View, Text, SafeAreaView } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Timeline } from "../../../../../components/Timeline"
import { FlatList } from "react-native-gesture-handler"
import { api } from "../../../../../services"
import { Picker } from "@react-native-picker/picker"

import { styles } from "./styles"

export function NextEvents() {
  const [events, setEvents] = useState([])
  const [days, setDays] = useState("7")

  async function getData() {
    try {
      const data = await api.post("api/anunciante/eventos/proximos", {
        days: days,
      })

      setEvents(data?.data?.data)

      // console.log("data", data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [days])

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text>Exibir:</Text>
        <Picker
          selectedValue={days}
          onValueChange={(itemValue) => setDays(itemValue)}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item style={styles.picker} label="7 dias" value="7" />
          <Picker.Item label="15 dias" value="15" />
        </Picker>
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={events}
          keyExtractor={(events) => events.id.toString()}
          renderItem={({ item: events }) => (
            <Timeline
              day={events?.day}
              month={events?.month}
              color={events?.type === "solicitacao" ? "#9980FA" : "#31D0CC"}
              title={events?.evento}
              city={events?.location.city}
              state={events?.location.uf}
            />
          )}
        />
      </View>
    </View>
  )
}
