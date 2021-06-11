import React, { Component } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, TextInput , ScrollView } from 'react-native'
import Colors from '../theme/Colors'
import Strings from '../theme/Strings'
import FontSize from '../theme/FontSize'
import FontWeight from '../theme/FontWeight'
import AppImages from '../theme/AppImages'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Profile extends Component {


    render() {


        const ScreenHeight = Dimensions.get('window').height
        const ScreenWidth = Dimensions.get('window').width

        return (
            <ScrollView style={{ backgroundColor: Colors.BackGroundColorWhite, flex: 1 }}    >
            <View>
                <View style={{ backgroundColor: Colors.ColorPrimary, height: 80, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: Colors.BackGroundColorWhite, fontSize: FontSize.HeadingTxtSize, fontWeight: FontWeight.BoldWeight }}>{Strings.Profiletxt}</Text>
                </View>
                <View style={{ height: 150, width: ScreenWidth, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ height: 90, width: 90, flexDirection: "row", justifyContent: "space-around" }}>

                        <Image source={AppImages.HamzaImg} style={{ marginTop: 10, height: 80, width: 80, borderRadius: 40 }} />
                        <TouchableOpacity style={{ backgroundColor: Colors.BackGroundColorWhite, elevation: 10, height: 30, width: 30, borderRadius: 20, justifyContent: "center", alignItems: "center", position: "absolute", right: 0, top: 5 }}>
                            <Icon name="pencil" size={20} color="green" />
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={{ marginLeft: 20, elevation: 2, justifyContent: "center", alignItems: "flex-start" }}>
                    <View>
                        <Text style={{ color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize, marginLeft: 10 }}> {Strings.NamTxt} </Text>

                        <View style={{ marginLeft: 10, borderColor: Colors.Colorbottomborder, flexDirection: "row", marginTop: 10, borderBottomWidth: 1, alignItems: "center", width: 300 }}>
                            <Icon name="user" size={20} style={{ position: "absolute" }} color="green" />
                            <TextInput
                                placeholder="Sarah Jessica Parker"
                                style={{ height: 40, width: 300, marginHorizontal: 30 }}
                            />

                        </View>
                    </View>
                    <View>
                        <Text style={{ marginTop : 10 ,color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize, marginLeft: 10 }}> {Strings.UserNameTxt} </Text>

                        <View style={{ marginLeft: 10, borderColor: Colors.Colorbottomborder, flexDirection: "row", marginTop: 10, borderBottomWidth: 1, alignItems: "center", width: 300 }}>
                            <Icon name="user" size={20} style={{ position: "absolute" }} color="green" />
                            <TextInput
                                placeholder="Sarah"
                                style={{ height: 40, width: 300, marginHorizontal: 30 }}
                            />

                        </View>
                    </View>
                    <View style={{ marginTop : 10  }}>
                        <Text style={{ color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize, marginLeft: 10 }}> {Strings.EmailText} </Text>

                        <View style={{ borderColor: Colors.Colorbottomborder, flexDirection: "row", margin: 10, borderBottomWidth: 1, alignItems: "center", width: 300 }}>
                            <Icon name="envelope" size={20} style={{ position: "absolute" }} color="green" />
                            <TextInput
                                placeholder="sarah.C@gmail.com"
                                style={{ height: 40, width: 300, marginHorizontal: 30 }}
                            />

                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize, marginLeft: 10 }}> {Strings.IdTxt} </Text>

                        <View style={{ borderColor: Colors.Colorbottomborder, flexDirection: "row", margin: 10, borderBottomWidth: 1, alignItems: "center", width: 300 }}>
                            <Icon name="id-card" size={20} style={{ position: "absolute" }} color="green" />
                            <TextInput
                                secureTextEntry
                                placeholder="#124567"
                                style={{ height: 40, width: 300, marginHorizontal: 30 }}
                            />

                        </View>
                    </View>
                    <View style={{ marginTop: 10, alignItems: "flex-start", marginLeft: 10 }}>
                        <TouchableOpacity style={{ marginTop: 20, borderColor: Colors.BorderColorBlack, elevation: 5, borderRadius: 5, width: 300, justifyContent: "center", alignItems: "center", backgroundColor: '#2dda93', height: 50 }}>
                            <Text style={{ color: Colors.BackGroundColorWhite, fontWeight: FontWeight.BoldWeight }}>{Strings.SaveTxt}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            </ScrollView>
        )

    }

}