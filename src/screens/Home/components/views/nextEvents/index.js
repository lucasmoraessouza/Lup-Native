import { useState } from "react"
import { View, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Timeline } from '../../../../../components/Timeline'
import { FlatList } from 'react-native-gesture-handler'

import { styles } from './styles'

export function NextEvents() {
  return (
    <View style={styles.container}>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Timeline day={'05'} month={'ABR'} color={'#9980FA'} />}
      >
        <Timeline day={'05'} month={'ABR'} color={'#9980FA'} />
      </FlatList>
    </View>

  )
}
