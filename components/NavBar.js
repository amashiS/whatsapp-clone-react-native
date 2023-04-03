import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <View style={styles.navbarContainer}>

                <View style={styles.compoment}>
                    <Text style={styles.txt}>navbar</Text>
                    <View></View>
                    <View></View>
                </View>

                <View style={styles.compoment}>
                    <View></View>
                    <View></View>
                </View>

                <View style={styles.compoment}>
                    <View></View>
                    <View></View>
                </View>

                <View style={styles.compoment}>
                    <View></View>
                    <View></View>
                </View>

                <View style={styles.compoment}>
                    <View></View>
                    <View></View>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    navbarContainer: {
        width: '100%',
<<<<<<< HEAD
        height: 50,
        backgroundColor:'#171717',
=======
        height: 70,
        backgroundColor: "#171717",
>>>>>>> 7b7250d9a8fb51802c7ba0d588549444ae55f1ef
        flexDirection: 'row',
        justifyContent:'space-between',
        
    },
    compoment:{
        flexDirection:'column',
    },
    txt:{
        color:'#f1f1f1',
    }
})