import React, { Component, useState } from 'react'
import { View, Text, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AppImages from '../theme/AppImages';
import Strings from '../theme/Strings';
import Colors from '../theme/Colors';
import FontSize from '../theme/FontSize';
import FontWeight from '../theme/FontWeight';
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'react-native-elements';

export default class Login extends Component {


    onLoginClick = () => {
        this.props.navigation.navigate("BottomTabNavigator")
    }
    onNextClick = () => {
        this.props.navigation.navigate("RecoveryScreen")
    }

    onSignUpClick = () => {
        this.props.navigation.navigate("SignUpScreen")
    }


    render() {
        const ScreenHeight = Dimensions.get('window').height
        const ScreenWidth = Dimensions.get('window').width

        return (
            <ScrollView style = {{ backgroundColor : Colors.BackGroundColorWhite }}>
                <View style={{ padding: 20, height: ScreenHeight,backgroundColor:Colors.BackGroundColorWhite }}>
                    <Text style={{ margin: 10, color: Colors.HelloColor, fontSize: FontSize.HeadingTxtSize, fontWeight: FontWeight.BoldWeight, paddingTop: 20 }}>{Strings.HelloTxt}</Text>
                    <Text style={{ margin: 10, color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize }}> {Strings.LoginLearnTxt} </Text>
                    <View style={{ height: 40 }}></View>
                    <Text style={{ margin: 10, color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize }}>{Strings.UserNameTxt}</Text>
                    <View>
                        <View style={{borderColor:Colors.Colorbottomborder , flexDirection: "row", margin: 10, borderBottomWidth: 1, alignItems: "center" }}>
                            <Icon name="user" size={20} style={{ position: "absolute" }} color="green" />
                            <TextInput
                                style={{ height: 40, width: 300, marginHorizontal: 20 }}
                            />

                        </View>
                    </View>
                    <Text style={{ margin: 10, color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize }}> {Strings.PasswordTxt} </Text>
                    <View>
                        <View style={{ borderColor:Colors.Colorbottomborder , flexDirection: "row", margin: 10, borderBottomWidth: 1, alignItems: "center" }}>
                            <Icon name="lock" size={20} style={{ position: "absolute" }} color="green" />
                            <TextInput
                                secureTextEntry={true}
                                style={{ marginHorizontal: 20, height: 40, width: 250 }}
                            />
                            <View>
                                <TouchableOpacity style={{ height: 30, width: 30 }}>
                                    <Icon name="eye" size={20} style={{ position: "absolute" }} color="green" />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>


                    <View style={{ margin : 10 ,flexDirection: "row", justifyContent: "space-between" }}>
                        <BouncyCheckbox
                            size={15}
                            fillColor={Colors.ColorPrimary}
                            unfillColor={Colors.UnfillColor}
                            text={Strings.RememberTxt}

                            iconStyle={{ borderColor: Colors.ColorPrimary }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            onPress={(isChecked: boolean) => { }}
                        />

                        <TouchableOpacity onPress={this.onNextClick}>
                            <Text style={{ color: Colors.ForgotPasswordColor }}> {Strings.ForgotPaswordTxt} </Text>
                        </TouchableOpacity>
                    </View>
                   <View style = {{margin : 10 , alignSelf : "center"}}>
                    <TouchableOpacity onPress={this.onLoginClick} style={{ borderColor: Colors.BorderColorBlack, elevation: 5, borderRadius: 5, width: ScreenWidth - 40, justifyContent: "center", alignItems: "center", backgroundColor: '#2dda93', height: 50 }}>
                        <Text style={{ color: Colors.BackGroundColorWhite, fontWeight: FontWeight.BoldWeight }}>{Strings.LoginTxt}</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={{ margin : 10 ,alignSelf: "center" }}>{Strings.OrLoginThrTxt}</Text>

                    <View style={{ width: 100, justifyContent: "space-evenly", alignContent: "center",
                      margin : 10 ,  alignItems: "center", alignSelf: 'center', flexDirection: "row"
                    }}>

                        <View style={{margin : 10 , backgroundColor:'white', height: 30, width: 30,elevation:5, justifyContent: "center", alignItems: "center", borderRadius: 20 }} >
                            <TouchableOpacity>
                                <Icon  name="facebook" size={25} color="green" />
                            </TouchableOpacity>

                        </View>

                        <View style={{margin : 10 , backgroundColor:'white', height: 30, width: 30,elevation:5, justifyContent: "center", alignItems: "center", borderRadius: 20 }} >
                            <TouchableOpacity>
                                <Icon  name="instagram" size={25} color="green" />
                            </TouchableOpacity>

                        </View>


                    </View>

                    <View style={{margin : 10 , width: ScreenWidth, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row" }}>

                        <Text>{Strings.DontHaveAccTxt}</Text>

                        <View style={{ width: 10 }}></View>

                        <TouchableOpacity onPress={this.onSignUpClick}>
                            <Text style={{ color: Colors.ColorPrimary }}>{Strings.SignUpTxt}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }

}