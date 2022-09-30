import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = (token) => {
    AsyncStorage.setItem('token', token)
}

export const getToken = () => {
    return AsyncStorage.getItem('token')
}