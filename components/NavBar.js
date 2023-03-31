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
        height: 20,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignContent: 'center',
    },
    compoment:{
        flexDirection:'column',
    },
    txt:{
        color:'#f1f1f1',
    }
})