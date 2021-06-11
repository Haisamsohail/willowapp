import React, { Component } from 'react'
import { View, TextInput, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import Colors from '../theme/Colors'
import Strings from '../theme/Strings'
import FontWeight from '../theme/FontWeight'
import FontSize from '../theme/FontSize'
import AppImages from '../theme/AppImages'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SignUpScreen extends Component {


    onDoneClick = () => {
        this.props.navigation.navigate("Login")
    }

    render() {

        const ScreenHeight = Dimensions.get('window').height
        const ScreenWidth = Dimensions.get('window').width


        return (
            <View style = {{ backgroundColor : Colors.BackGroundColorWhite , flex : 1 }}>
            <View style={{ marginTop : 20 ,flex: 1, backgroundColor: Colors.BackGroundColorWhite, paddingHorizontal: 20 }}>

                <Text style={{fontSize: FontSize.HeadingTxtSize, marginTop : 20 ,color: Colors.ColorPrimaryDark, fontWeight: FontWeight.BoldWeight }}>{Strings.SignUpTxt}</Text>
                <Text style={{marginTop : 20 , fontSize: FontSize.defaultTxtSize }}>{Strings.LearnTxt}</Text>
   
                <View>
                    <View style={{ borderColor: Colors.Colorbottomborder, flexDirection: "row",margin: 10,marginTop : 10 , borderBottomWidth: 1, alignItems: "center" }}>
                        <Icon name="user" size={20} style={{ position: "absolute" }} color="green" />
                        <TextInput
                            placeholder="Username"
                            style={{ height: 40, width: 300, marginHorizontal: 30 }}
                        />

                    </View>
                </View>
                <View style = {{ marginTop : 20  }}>
                    <View style={{ borderColor: Colors.Colorbottomborder, flexDirection: "row", margin: 10, borderBottomWidth: 1, alignItems: "center" }}>
                        <Icon name="envelope" size={20} style={{ position: "absolute" }} color="green" />
                        <TextInput
                            placeholder="Email"
                            style={{ height: 40, width: 300, marginHorizontal: 30 }}
                        />

                    </View>
                </View>
                <View style = {{marginTop : 20  }}>
                    <View style={{ borderColor: Colors.Colorbottomborder, flexDirection: "row", margin: 10, borderBottomWidth: 1, alignItems: "center" }}>
                        <Icon name="lock" size={20} style={{ position: "absolute" }} color="green" />
                        <TextInput
                            secureTextEntry
                            placeholder="Password"
                            style={{ height: 40, width: 300, marginHorizontal: 30 }}
                        />

                    </View>
                </View>
                <View style={{marginTop : 20 , borderColor: Colors.Colorbottomborder, flexDirection: "row", margin: 10, borderBottomWidth: 1, alignItems: "center" }}>
                    <Icon name="retweet" size={20} style={{ position: "absolute" }} color="green" />
                    <TextInput
                        secureTextEntry
                        placeholder="Retype Password"
                        style={{ height: 40, width: 300, marginHorizontal: 30 }}
                    />

                </View>
              <View style ={{marginTop : 20 , alignItems : "center"}}>
                <TouchableOpacity style={{marginTop : 20 , borderColor: Colors.BorderColorBlack, elevation: 5, borderRadius: 5, width: ScreenWidth - 80, justifyContent: "center", alignItems: "center", backgroundColor: '#2dda93', height: 50 }}>
                    <Text style={{ color: Colors.BackGroundColorWhite, fontWeight: FontWeight.BoldWeight }}>{Strings.SignUpTxt}</Text>
                </TouchableOpacity>
                </View>
                <Text style={{marginTop : 20, alignSelf: "center" }}>{Strings.OrSignInTxt}</Text>

                <View style={{marginTop : 20, width: 100, justifyContent: "space-evenly", alignSelf: "center", alignContent: "center", alignItems: "center", flexDirection: "row" }}>

                    <View style={{ backgroundColor: 'white', height: 30, width: 30, elevation: 5, justifyContent: "center", alignItems: "center", borderRadius: 20 }} >
                        <TouchableOpacity>
                            <Icon name="facebook" size={25} color="green" />
                        </TouchableOpacity>

                    </View>

                    <View style={{ backgroundColor: 'white', height: 30, width: 30,margin: 10, elevation: 5, justifyContent: "center", alignItems: "center", borderRadius: 20 }} >
                        <TouchableOpacity>
                            <Icon name="instagram" size={25} color="green" />
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
            </View>
        )
    }
}

