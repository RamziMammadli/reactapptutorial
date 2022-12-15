import { Text, StyleSheet, View, Button, SafeAreaView, Image, Pressable } from 'react-native'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faBell, faCheck, faStopwatch } from '@fortawesome/free-solid-svg-icons'



export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.main}>
            <View style={styles.maintop}>
              <Pressable style={{fontSize:15, color:"black"}} >
                <FontAwesomeIcon icon={faArrowLeft} />
              </Pressable>
              <Pressable style={{fontSize:15, color:"black"}}>
                <FontAwesomeIcon icon={faBell} />
              </Pressable>
            </View>
            <View style={styles.mainsec}>
              <View style={{justifyContent:"space-between"}}>
                <Text style={{fontSize:15, color: 'grey'}}>Dec 16, 2022</Text>
                <Text style={{fontSize:20, fontWeight:"bold"}}>Ramzi Mammadli</Text>
              </View>
              <View>
                <Image source={require('./assets/3-4.jpg')} style={{width:45, height:55}}/>
              </View>
            </View>
            <View style={{paddingTop:40}}>
              <Text style={{fontSize:35, fontWeight:"bold"}}>Projects</Text>
            </View>
            <View style={styles.middle}>
              <Text>Website</Text>
              <Text style={{color: 'grey'}}>Mobile App</Text>
              <Text style={{color: 'grey'}}>Research</Text>
            </View>
            <View style={styles.middlebottom}>
              <View style={{backgroundColor:"#FF773D", width: 125, borderRadius:20, alignItems:'center', justifyContent:'center', height:140}}>
                <FontAwesomeIcon icon={faCheck} style={{color: 'white'}} />
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>10</Text>
                <Text style={{color:'white'}}>Completed Task</Text>
              </View>
              <View style={{backgroundColor:"#4C2B5A", width: 125, borderRadius:20, alignItems:'center', justifyContent:'center', height:140}}>
                <FontAwesomeIcon icon={faStopwatch} style={{fontSize: 25, color: 'white'}} />
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>07</Text>
                <Text style={{color:'white'}}>in Progress</Text>
              </View>
            </View>
            <View style={{paddingTop:80}}>
              <Text>IN PROGRESS</Text>
            </View>
            <View style={{paddingTop: 25, justifyContent:'space-between', height:260}}>
              <View style={{padding:20, justifyContent:'space-between', borderRadius:20, borderWidth: 1,borderColor:'#D1D1D1', height:110}}>
                <Text>Design a landling page for WP Dark Mode Pro</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', width:170}}>
                  <Text style={{backgroundColor:'#FF773D', borderRadius:15, paddingHorizontal:8, paddingVertical:1}}>Aug 1</Text>
                  <Text style={{backgroundColor:'#DAD2DD', borderRadius:15, paddingHorizontal:8, paddingVertical:1}}>Landing Page</Text>
                </View>
              </View>
              <View style={{padding:20, justifyContent:'space-between', borderRadius:20, borderWidth: 1,borderColor:'#D1D1D1', height:110}}>
                <Text>Wireframing 3 different concept for Jitsi meet</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', width:170}}>
                  <Text style={{backgroundColor:'#FF773D', borderRadius:15, paddingHorizontal:8, paddingVertical:1}}>Aug 1</Text>
                  <Text style={{backgroundColor:'#DAD2DD', borderRadius:15, paddingHorizontal:8, paddingVertical:1}}>Landing Page</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{backgroundColor:'#FF773D', width:55, height:55, alignItems:'center', justifyContent:'center', borderRadius: 100, marginTop:-25}}>
            <Text style={{fontSize:20, color:'white'}}>+</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#FEF4EB",
    paddingTop: 55,
    alignItems: 'center'
  },
  main : {
    flexDirection: 'column',
    backgroundColor: "white",
    padding: 25,
    borderRadius: 35,
    justifyContent: "space-between",
    paddingBottom:40
  },
  maintop: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mainsec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  middle: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop: 25
  },
  middlebottom: {
    flexDirection: 'row',
    justifyContent:'space-between',
    height:125,
    paddingTop:25
  }
})