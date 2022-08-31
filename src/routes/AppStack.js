import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { CustomDrawer } from "../components/CustomDrawer";
import { Home } from "../screens/Home";
import { NotificationsScreen } from '../screens/Notifications'
import { theme } from '../global/styles/theme'

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
                name="Notifications"
                component={NotificationsScreen}
            />
            <Drawer.Screen
                name="Eventos"
                component={NotificationsScreen}
            />
            <Drawer.Screen
                name="Anúncio"
                component={NotificationsScreen}
            />

        </Drawer.Navigator >

    )
}