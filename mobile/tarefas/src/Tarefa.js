import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function Tarefa({ data, deleteItem }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={deleteItem}>
                <FontAwesome name='trash' size={20} color='black' />
            </TouchableOpacity>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196,196,196, 0.2)',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
        gap: 15
    },
    text: {
        fontSize: 15
    }
})