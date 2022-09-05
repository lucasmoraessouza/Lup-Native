import { FlatList, Text, View } from "react-native"
import { BudgetCardStatus } from "./components/budgetCardStatus"
import { styles } from "./styles"

export function Historic() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={test}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <BudgetCardStatus key={item} name={item} />}
      />
    </View>
  )
}
