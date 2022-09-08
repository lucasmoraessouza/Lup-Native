import { useState } from "react"
import { View, Text } from "react-native"
import Timeline from 'react-native-timeline-flatlist'
import { styles } from './styles'

export function NextEvents() {
  const data = [
    {
      time: '05',
      title: 'Casamento de Daniela Sanches',
      description: 'Onde: Guarulhos - SP',
      color: '#9980FA'
    },
    {
      time: "10",
      title: 'Casamento de Marcos A. Silva',
      description: 'Onde: Guarulhos - SP',
      color: '#31D0CC'
    },
    {
      time: '11',
      title: 'Casamento de Daniela Sanches',
      description: 'Onde: Guarulhos - SP',
      color: '#31D0CC'

    },
    {

      time: '12',
      title: 'Casamento de Marcos A. Silva',
      description: 'Onde: Guarulhos - SP',
      color: '#9980FA'

    },
    {
      time: '15',
      title: 'Casamento de Daniela Sanches',
      description: 'Onde: Guarulhos - SP',
      color: '#9980FA'

    },
    {
      time: '18',
      title: 'Casamento de Marcos A. Silva',
      description: 'Onde: Guarulhos - SP',
      color: '#9980FA'

    },
    {
      time: '18',
      title: 'Casamento de Marcos A. Silva',
      description: 'Onde: Guarulhos - SP',
      color: '#31D0CC'
    },
  ]
  return (
    <View style={styles.container}>
      <Timeline
        style={styles.list}
        data={data}
        circleSize={10}
        circleColor='#C4C4C4'
        dotColor="#C4C4C4"
        lineColor='#C4C4C4'
        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
        timeStyle={styles.time}
        rowContainerStyle={{ color: 'white' }}
        titleStyle={{ color: '#FFF', fontWeight: '600', fontSize: 14, margin: 0, padding: 0 }}
        options={{
          style: { paddingTop: 15, paddingHorizontal: 25, }
        }}
        descriptionStyle={{ color: '#FFF', fontWeight: '400', fontSize: 14, margin: 0, padding: 0 }}
        innerCircle='dot'
        separator={false}
        detailContainerStyle={{ marginBottom: 20, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#9980FA', color: 'white', borderRadius: 12 }}
        columnFormat='single-column-left'
        isUsingFlatlist={true}
      // showTime={false}
      />
    </View>
  )
}
