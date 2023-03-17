import { useState, useEffect } from 'react'
import { View, Text, Image } from "react-native"
import { styles } from "./styles"
import { TabsAds } from "../../../../../components/TabsAds"
import { StateGlobal } from "../../../../../context/context"
import { AboutUs } from "../../../../../components/AboutUs"
import { Media } from "../../../../../components/Media"
import { api } from '../../../../../services'

export function MyAds() {
  const { subComponents } = StateGlobal()

  const [userInfos, setUserInfos] = useState({
    name: '',
    logo: undefined,
    description: '',
    contact: '',
    uf: '',
    city: '',
    midias: []
  })

  useEffect(() => {
    getUserAds()
  }, [])

  async function getUserAds() {
    const { data } = await api.get('api/anunciante/anuncio')
    setUserInfos({
      name: data.name,
      logo: data.logo,
      description: data.description,
      contact: data.contact_number,
      uf: data.location.uf,
      city: data.location.city,
      midias: data.midia
    })
    console.log(data)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{ uri: userInfos.logo }}
          />
          <View style={styles.contentHeader}>
            <Text style={styles.title}>{userInfos.name}</Text>
            <Text style={styles.subtitle}>
              Serviços: <Text style={styles.text}>{userInfos.description}</Text>
            </Text>
            <Text style={styles.subtitle}>
              Contato: <Text style={styles.text}>{userInfos.contact}</Text>
            </Text>
            <Text style={styles.subtitle}>
              Localização: <Text style={styles.text}>{`${userInfos.city} - ${userInfos.uf}`}</Text>
            </Text>
            <Text style={styles.subtitle}>
              Horários: <Text style={styles.text}></Text>
            </Text>
          </View>
        </View>
        <View style={styles.containerTabs}>
          <TabsAds />
        </View>

        <View>
          {subComponents === 0 ? (
            <AboutUs />
          ) : subComponents === 1 ? (
            <Media medias={userInfos.midias}/>
          ) : (
            ""
          )}
        </View>
      </View>
    </>
  )
}
