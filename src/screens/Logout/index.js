import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { StateGlobal } from '../../context/context'

export function Logout() {
    const { setIsAuthenticated } = StateGlobal()

    useEffect(() => {
        setIsAuthenticated(false)
    }, [])

    return (<></>)
}