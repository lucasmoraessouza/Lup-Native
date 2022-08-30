import { LinearGradient } from "expo-linear-gradient"
import styled from "styled-components/native"
import { theme } from "../../global/styles/theme"

const { primary, secondary } = theme.colors

export const Container = styled.SafeAreaView`
  flex: 1;
`
export const Linear = styled(LinearGradient).attrs({
  colors: [secondary, primary],
  start: { x: 0, y: 0.45 },
  end: { x: 1, y: 0 },
})`
  width: 100%;
  height: 1000px;
`

export const Header = styled.View`
  align-items: center;
`
export const Logo = styled.Image.attrs({ resizeMode: "contain" })`
  width: 120px;
  height: 80px;
`

export const SectionTabs = styled.View`
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`
