import React from 'react'
import { View, StyleSheet, Image, FlatList, Text, TouchableOpacity, ActivityIndicator, ImageBackground} from 'react-native'
import {css} from '../styles/css.js'

const Activities = (props) => {

    return(
        <Text style={stylesActivities.activityToDo}>{props.activity}</Text>
    )
}

const stylesActivities = StyleSheet.create({
    activityToDo: {
        backgroundColor:'black',
        color:'white',
        padding:12,
        margin:12,
        fontSize: 12,
    },
})

export default Activities