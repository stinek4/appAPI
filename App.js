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
      console.log(json.activity)
    setActivities([...activities,json.activity])
    })
    .catch(error => 
      console.log(error)
      )}

  useEffect(() => {
    getActivity();
  }, []) 

  const showActivity = async (activity) => {
    await (
      {
        activity: activity,
        props: {
          activity: activity
        }
      }
    )
    console.log(activity)
  }


    return(
      <View style={[styles.safeContainer, css.centered, css.white]}>
          <View>
            <Text style={styles.coronaWelcome}>Things to do during Corona</Text>
          </View>

          <View style={styles.body}>
              {
                activities.map(
                  (a, index) =>
                  <View>
                  <Text key={index}>{a.activity}</Text>
                  </View>
                )
              }
          </View>
          
          <View style={[styles.footer, css.centered]}>
            <Text style={styles.footerText}>+</Text>
            <Text style={styles.footerText}>My List</Text>
            </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#F5FCFF',
      padding: 0,
      margin: 0
    },
    coronaWelcome: {
      flex: 0.3,
      fontSize: 30,
      textAlign: 'center',
      backgroundColor: '#eddad9',
      paddingTop: 40,
      paddingLeft: 30,
      paddingRight: 30,
    },
    body: {
      flex: 9,
      textAlign: 'center',
      backgroundColor: '#ccc',
      borderStyle: 'solid',
      borderColor: '#ccc',
      borderRadius: 5,
    },
      footer: {
      flex: 1,
      textAlign: 'center',
      backgroundColor: '#112233',
      width: '100%',
      },
      footerText: {
        color: 'white'
      }
  })


export default App
