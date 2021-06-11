import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity, Touchable } from 'react-native';
import { Pages } from 'react-native-pages'
import AppImages from '../theme/AppImages';
import Strings from '../theme/Strings';
import Colors from '../theme/Colors';
import FontWeight from '../theme/FontWeight';
import FontSize from '../theme/FontSize';


export default class Walkthrough extends Component {

    onNextClick = () => {
        this.props.navigation.navigate("Login")
    }


    render() {

        const ScreenHeight = Dimensions.get('window').height
        const ScreenWidth = Dimensions.get('window').width
        return (
            <View style={{ flex: 1, backgroundColor: Colors.BackGroundColorWhite }}>
                <View style={{ height: ScreenHeight - 100 }}>
                    <Pages >
                        <View style={{ flex: 1, backgroundColor: Colors.BackGroundColorWhite, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ margin: 20 }}
                                source={AppImages.page1}
                            />
                            <Text style={{ margin: 20, fontSize: FontSize.HeadingTxtSize, fontWeight: FontWeight.BoldWeight }}>{Strings.Page1Txt}</Text>
                            <Text style={{ margin: 20, textAlign: "center", paddingHorizontal: 20 }}>{Strings.Page1Txt2}</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: Colors.BackGroundColorWhite, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ margin: 20 }}
                                source={AppImages.page2}
                            />
                            <Text style={{ margin: 20, fontSize: FontSize.HeadingTxtSize, fontWeight: "bold" }}>{Strings.Page2Txt}</Text>
                            <Text style={{ margin: 20, textAlign: "center", paddingHorizontal: 30 }}>{Strings.Page2Txt2}</Text>

                        </View>
                        <View style={{ flex: 1, backgroundColor: Colors.BackGroundColorWhite, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ margin: 20 }}
                                source={AppImages.page3}
                            />
                            <Text style={{ margin: 20, fontSize: FontSize.HeadingTxtSize, fontWeight: FontWeight.BoldWeight }}>{Strings.Page3Txt}</Text>
                            <Text style={{ margin: 20, textAlign: "center", paddingHorizontal: 10 }}>{Strings.Page3Txt2}</Text>

                        </View>
                    </Pages>

                 
                    <TouchableOpacity onPress={this.onNextClick} style={{margin : 20 , borderColor: 'black', elevation: 5, borderRadius: 5, width: ScreenWidth - 30, justifyContent: "center", alignItems: "center", backgroundColor: '#2dda93', height: 50, alignSelf: "center" }}>
                        <Text style={{ color: Colors.BackGroundColorWhite, fontWeight: "bold" }}>{Strings.NextTxt}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin : 20 , alignSelf: "center" }}>
                        <Text style={{ color: Colors.ColorPrimary }}>{Strings.LaterTxt}</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }


}