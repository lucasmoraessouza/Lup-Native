import { View, Text } from "react-native"
import { theme } from "../../global/styles/theme"
import { useNavigation } from "@react-navigation/native"
import * as S from "./styles"

export function Home() {
  const navigation = useNavigation()
  const { primary, secondary } = theme.colors

  return (
    <View style={{ backgroundColor: "#000" }}>
      <S.Container>
        <S.Linear >
          <S.Header>
            <S.Logo source={require("../../assets/images/LogoTopo.png")} />
          </S.Header>
          <S.SectionTabs>
            <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              height: 100,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text>Solicitações</Text>
            </View>
            <View>
              <Text>Próximos Eventos</Text>
            </View>
            <View>
              <Text>Meu Anúncio</Text>
            </View>
          </View>
        </View>
          </S.SectionTabs>
        </S.Linear>
      </S.Container>
    </View>
  )
}
