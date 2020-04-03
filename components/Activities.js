import React from 'react'
import { View, StyleSheet, Image, FlatList, Text, TouchableOpacity, ActivityIndicator, ImageBackground} from 'react-native'
import {css} from '../styles/css.js'

const Activities = (props) => {

    return(
       <View style={stylesActivities.activityContainer}>
       
       <TouchableOpacity style={css.backgroundWhite}>
           <Text style={stylesActivities.activityToDo}>Activities to do:</Text>
                <ImageBackground source={require('../img/covid19.png')} style={{width: '100%', height: '90%'}}></ImageBackground>
                 <Text style={[stylesActivities.activityName, css.centered]}>{props.activity}</Text>
        

        </TouchableOpacity>
        </View>
    )
}

const stylesActivities = StyleSheet.create({
    activityContainer: {
        width: '100%',
        height: '100%',
    },
    activityToDo: {
        fontSize: 50,
    },
    activityName: {
        color: 'black',
        fontSize: 20,
    }
})

export default Activities