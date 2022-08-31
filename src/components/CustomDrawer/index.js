import * as S from './style'
import { View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { StatusBar } from "react-native"

export function CustomDrawer(props) {
    return (

        <DrawerContentScrollView {...props} >
            <S.Content style={{ backgroundColor: '#9980FA', padding: 40 }}>
                <S.ContainerTitle>

                    <S.Title >Olá, Felipe</S.Title>
                    <S.Icon><S.IconText>pro</S.IconText></S.Icon>
                </S.ContainerTitle>
                <S.Subtitle >Editar Perfil</S.Subtitle>
            </S.Content>
            <S.ContainerMenu >
                <DrawerItemList {...props} />
            </S.ContainerMenu>
        </DrawerContentScrollView>
    )
}