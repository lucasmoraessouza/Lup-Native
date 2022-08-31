import styled from 'styled-components/native'

export const Content = styled.View`
    background-color: '#9980FA';
    padding: 40px 40px;
    margin: 0;
`

export const ContainerTitle = styled.View`
    flex-direction: row;
    align-items: center;
    
`

export const Icon = styled.View`
    background-color: #12CBC4;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 20px;
    border-radius: 15px;
    margin-left: 13px;
`

export const IconText = styled.Text`
text-transform: uppercase;
    color: #fff;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 27px;
    font-weight: bold;
    font-family: "OpenSans_600SemiBold";
`

export const Subtitle = styled.Text`
    color: #fff;
    font-size: 15px;
    font-family: "OpenSans_400Regular";
`

export const ContainerMenu = styled.View`
    flex: 1;
    height: 100%;
    background-color: #fff;
    padding-top: 10px;
`