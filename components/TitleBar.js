import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import camera from '../assets/camera.png'
import edit from '../assets/edit.png'
import search from '../assets/search.png'
import sort from '../assets/sort.png'
import { StatusBar } from 'expo-status-bar'

export class TitleBar extends Component {
    render() {

        return (
            <View style={styles.wholeContainer} >
                <View style={styles.mainView}>

                    <View style={styles.container}>
                        <Text style={styles.txtStyle}>Edit</Text>

                    </View>

                    <View style={styles.container1}>
                        <Image style={styles.cimg} source={camera}></Image>
                        <Image style={styles.eimg} source={edit}></Image>


                    </View>
                </View>
                <View style={styles.mainView2}>

                    <View >
                        <Text style={styles.chatStyle}>Chats</Text>

                    </View>

                </View>

                <View style={styles.mainView3}>

                    <View >
                        <Image style={styles.simg} source={search} />
                        <TextInput style={styles.inputStyle} placeholder="  Search">


                        </TextInput>


                    </View>
                    <Image style={styles.srtimg} source={sort} />

                </View>
                <View style={styles.mainView}>

                    <View style={styles.container4}>
                        <Text style={styles.brd}>Broadcast Lists </Text>

                    </View>

                    <View style={styles.container4}>
                        <Text style={styles.brd}> New Group</Text>


                    </View>
                </View>

                <View style={styles.horizonRuler}>
                   

                </View>



                <StatusBar style='light' />
            </View>

        )
    }


}

export default TitleBar


const styles = StyleSheet.create({
    wholeContainer: {
        padding: 5,
        marginTop: 2,
    },
    mainView: {
        flexDirection: 'row',
        paddingTop: 25,
        justifyContent: 'space-between',
        width: '100%'


    },
    mainView2: {
        flexDirection: 'column',
        color: '#2F81C8',
    },

    mainView3: {
        flexDirection: 'row',
        backgroundColor: '#2A2A2C',
        height: 35,
        marginTop: 13,
        borderRadius: 10,
        marginRight: 40,
        paddingRight: 50

    },

    container: {
        fontSize: '100px',
    },
    container4: {
        fontSize: '100px',
        marginTop: -6
    },

    txtStyle: {
        fontSize: 18,
        color: '#2F81C8',
        fontWeight: '450'

    },
    brd: {
        fontSize: 18,
        color: '#2F81C8',
    },

    container1: {

        flexDirection: 'row',
    },

    container2: {
        flex: 1,
        color: '#fff',

        alignItems: 'flex-end',

    },
    cimg: {
        width: 22,
        height: 22,
        marginRight: 10,
    },

    eimg: {
        width: 22,
        height: 22,
    },
    simg: {
        width: 18,
        height: 18,
        marginTop: 8,
        marginHorizontal: 10
    },

    srtimg: {
        width: 18,
        height: 18,
        marginTop: 8,
        marginLeft: 200,
    },

    chatStyle: {
        fontSize: 35,
        color: '#fff',
        fontWeight: 700,
        marginTop: 10,

    },
    inputStyle: {

        fontSize: 20,
        borderRadius: 10,
        textAlign: 'auto',
        color: '#7D7C80',
        flex: 1,
        paddingHorizontal: 35,
        marginTop: -27,

        placeholderTextColor: '#fff'

    },

    horizonRuler: {
       width:100,
       height:1,
       backgroundColor:'#000',

    },


});
