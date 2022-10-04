import { Text, View ,FlatList} from "react-native"
import { VictoryPie } from "victory-native"
import { LabelGraphic } from "./labelGraphic"
import { ScrollView } from "react-native-gesture-handler"

export function Summary() {
  return (
    <View>
      <ScrollView>
        <VictoryPie
          data={[
            { x: "10", y: 10 },
            { x: "10", y: 10 },
            { x: "8", y: 8 },
            { x: "12", y: 12 },
          ]}
          colorScale={["#C4E538", "#ED4C67", "#12CBC4", "#A8A8A8"]}
          innerRadius={80}
          style={{
            labels: {
              fontSize: 25,
              fill: "#A8A8A8",
            },
          }}
          // animate={{
          //   duration: 2000,
          // }}
        />
        <LabelGraphic />
      </ScrollView>
    </View>
  )
}
