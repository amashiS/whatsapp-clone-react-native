import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Searchbar() {
  return (
    <View style ={styles.searchbarcontainer}>
        <View style ={styles.searchbar}>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchbarcontainer:{

        flexDirection:'row',
        padding:15,
        color:'#fff',
        paddingRight:50

    },
    searchbar:{
        height:30,
        width:'100%',
        borderRadius:10,
        backgroundColor:'#f1f1f1',
        marginEnd:90,
        
        }

})