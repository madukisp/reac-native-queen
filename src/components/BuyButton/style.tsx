import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D1A954', // gold
        padding: 10,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
    button : {
        flexDirection: 'row',
    },
    icon : {
        marginRight: 10,
    },
    buttonText : {
        color: '#000000',
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
})