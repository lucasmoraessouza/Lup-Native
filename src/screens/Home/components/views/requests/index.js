import { FlatList, Text, View } from "react-native"
import { styles } from "./styles"
import { BudgetCard } from "./components/budgetCard/index"
export function Requests() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={test}
        keyExtractor={(item) => item}
        renderItem={({ item }) => 
        <BudgetCard key={item} name={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.titleVoid}>
            Você ainda não adicionou ninguém do squad 🤡
          </Text>
        )}
      />
    </View>
  )
}
