import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { CustomDrawer } from "../components/CustomDrawer";
import { Home } from "../screens/Home";
import { theme } from '../global/styles/theme'
import { Announcement } from '../screens/Announcement'
import { Budget } from '../screens/Budget'
import { Calculate } from '../screens/Calculate'
import { Logout } from '../screens/Logout'
import { Schedule } from '../screens/Schedule'
import { Profile } from '../screens/Profile'
const Drawer = createDrawerNavigator()

export function AppStack() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
            headerShown: false,
            drawerHideStatusBarOnOpen: true,
            drawerActiveTintColor: '#9980FA',
            drawerLabelStyle: {
                color: '#9980FA',
                fontSize: 20,
                lineHeight: 28,
                fontFamily: theme.fonts.text400,
                marginHorizontal: 20
            },
        }}>
            <Drawer.Screen
                name="Inicio"
                component={Home}
            />
            <Drawer.Screen
                name="Calculadora de Custos"
                component={Calculate}
            />
            <Drawer.Screen
                name="Editar Perfil"
                component={Profile}
            />
            <Drawer.Screen
                name="Agenda"
                component={Schedule}
            />
            <Drawer.Screen
                name="Orçamentos"
                component={Budget}
            />
            <Drawer.Screen
                name="Atualizar Anúncio"
                component={Announcement}
            />
            <Drawer.Screen
                name="Sair"
                component={Logout}
            />
        </Drawer.Navigator >

    )
}