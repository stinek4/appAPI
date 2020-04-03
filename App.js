import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Activities from './components/Activities.js'
import { css } from './styles/css'

const App = () => {
  const [activities, setActivities] = useState([0])

  const getActivity = async () => {
   await fetch(`http://www.boredapi.com/api/activity?participants=1`)
    .then ((response) => response.json())
    .then ((json) => {
      console.log('got activity: ', json.activity)
    setActivities([json.activity, ...activities])
    })
    .catch(error => 
      console.log(error)
      )}

  useEffect(() => {
    getActivity();
  }, []) 


    return(
      <View style={styles.main}>
          <View style={[styles.header, css.centered]}>
            <Text style={styles.coronaWelcome}>Things to do during Corona</Text>
          </View>
          <View style={[styles.interaction, css.centered]}>
            <Button title='Gimme more man..' onPress={()=>getActivity()} />
          </View>
          <View style={styles.body}>
            <ScrollView style={styles.scrollView}>
                {
                  activities.map(
                    (a, index) =>
                      <Activities activity={a} key={index} />
                  )
                }
            </ScrollView>
          </View>          
          <View  style={[styles.footer, css.centered]}>
            <Text style={styles.footerText}>+</Text>
            <Text style={styles.footerText}>My List</Text>
          </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    main:{
      flex:1,
    },
    header:{
      flex:2,
      backgroundColor:'#4285F4',
    },
    body: {
      flex: 9,
    },
    footer: {
      flex: 2,
      backgroundColor:'#e6e6ea',
    },
  })


export default App
