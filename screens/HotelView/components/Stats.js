import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons'
import { gs, colors } from '../../../styles'

const starColors=["#e3ab53", ""]

export default function Stats() {
    return (
        <View style={styles.container}>
            <View style={StyleSheet.weatherContainer}>
                <Feather name="sun" size={24} color={colors.darkHl} />

                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.title}>30°</Text>
                    <Text style={styles.subTitle}>Sunny</Text>
                </View> 
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.rowCenter,
        ...gs.sectionContainer
    },
    weatherContainer: {
        ...gs.rowCenter,
        paddingRight: 12,
        marginRight: 12,
        borderRightColor: "#444",
        borderRightWidth: 1
    },
    title: {
        color: colors.text,
        fontSize: 18,
        fontWeight: "800"
    },
    subTitle: {
        color: colors.textSec,
        fontSize: 10,
        fontWeight: "800"
    }
})