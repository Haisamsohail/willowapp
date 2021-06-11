import React, { Component } from 'react'
import { Text, View, Dimensions, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import Colors from '../theme/Colors'
import AppImages from '../theme/AppImages'
import Strings from '../theme/Strings'
import FontSize from '../theme/FontSize'
import FontWeight from '../theme/FontWeight'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImageCropPicker from 'react-native-image-crop-picker'


export default class Dashboard extends Component {


    onProfileClick = () => {
        this.props.navigation.navigate("Profile")
    }

    onCameraClick = () => {
        ImageCropPicker.openCamera({

            cropping: false,
        }).then(image => {
            console.log(image);

              var img = {sourceURL:image.path}
            this.state.multipleFile.push(img)
           
            this.setState({multipleFile:this.state.multipleFile})

        });
    }



render() {



    const Data = [
        {
            id: 1,
            text: "Monstera with long name",
            img2: require('../assets/Img40.png'),
            img1: require('../assets/plants.png'),
            Desc: "Your plants need some attention"
        },
        {
            id: 2,
            text: "Monstera with long name",
            img2: require('../assets/Img40.png'),
            img1: require('../assets/plants.png'),
            Desc: "Your plants need some attention"
        },
        {
            id: 3,
            text: "Monstera with long name",
            img2: require('../assets/Img40.png'),
            img1: require('../assets/plants.png'),
            Desc: "Your plants need some attention"
        },
        {
            id: 4,
            text: "Monstera with long name",
            img2: require('../assets/Img40.png'),
            img1: require('../assets/plants.png'),
            Desc: "Your plants need some attention"
        }
    ]



    const ScreenHeight = Dimensions.get('window').height
    const ScreenWidth = Dimensions.get('window').width


    return (
        <ScrollView style={{ height: ScreenHeight, width: ScreenWidth, backgroundColor: Colors.ColorPink }}>
            <View>
                <View style={{ backgroundColor: Colors.ColorGreen, height: 330 }}>
                    <View style={{ margin: 10, flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity onPress={this.onProfileClick} style={{ height: 80, width: 80 }}>
                                <Image style={{ borderRadius: 40, height: 80, width: 80, position: "absolute", right: 0 }} source={AppImages.HamzaImg} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginHorizontal: 5 }}>
                            <Text style={{ marginTop: 20, color: Colors.BackGroundColorWhite, fontSize: FontSize.font20 }}>{Strings.GdMrngTxt}</Text>
                            <Text style={{ color: Colors.BackGroundColorWhite, fontSize: FontSize.font20 }}>{Strings.NameTxt}</Text>
                        </View>

                    </View>

                    <View style={{ width: ScreenWidth - 180, alignSelf: "flex-end", marginHorizontal: 50 }}>
                        <Text style={{ alignSelf: "center", fontSize: FontSize.font10, color: Colors.BackGroundColorWhite }}>{Strings.DashTxt}</Text>
                    </View>

                    <View style={{ margin: 20, flexDirection: "row", borderRadius: 10, justifyContent: "center", alignSelf: "center", backgroundColor: Colors.BackGroundColorWhite, height: 100, width: ScreenWidth - 50 }}>

                        <TouchableOpacity onPress={this.onCameraClick} style={{ alignSelf: "center", backgroundColor: Colors.BackGroundColorWhite, height: 60, width: 150, borderRightWidth: 1 }}>
                            <View>
                                <Icon name="camera" size={20} style={{ alignSelf: "center" }} color="green" />
                                <Text style={{ textAlign: "center" }}>{Strings.ScanTxt}</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignSelf: "center", backgroundColor: Colors.BackGroundColorWhite, height: 60, width: 150 }}>
                            <View>
                                <Icon name="envira" size={20} style={{ alignSelf: "center" }} color="green" />
                                <Text style={{ textAlign: "center" }}>{Strings.BrowseTxt}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 25 }}></View>
                <View style={{ elevation:10,  flexDirection: "row", width: ScreenWidth - 50, position: "absolute", bottom: 0, backgroundColor: Colors.BackGroundColorWhite, alignSelf: "center", borderRadius: 25 }}>
                    <Icon name="search" size={20} style={{ alignSelf: "center", margin: 10 }} />
                    <TextInput
                        placeholder={Strings.SearchPlantsTxt}
                    />
                </View>

            </View>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop: 15 }}>
                    <Text style={{ fontSize: FontSize.HeadingTxtSize, fontWeight: FontWeight.BoldWeight, color: Colors.ColorPrimaryDark }}>{Strings.PlantTxt}</Text>
                    <TouchableOpacity onPress={this.onClick} >
                        <Text style={{ color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize }}>{Strings.ViewAllTxt}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 10, flexDirection: "row" }}>
                    <FlatList
                        horizontal
                        data={Data}
                        renderItem={({ item }) => <ScrollView style={{}} horizontal={true}>
                            <TouchableOpacity style={{ elevation: 5, margin: 10, borderRadius: 5, width: 300, height: 150, backgroundColor: Colors.BackGroundColorWhite, }}>

                                <View style={{ flexDirection: "row" }}>

                                    <View style={{ padding: 10, justifyContent: "center", alignItems: "center", width: 170 }}>
                                        <Text style={{ marginRight: 20, color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize }}>{item.text}</Text>
                                        <Image style={{ marginRight: 20 }} source={item.img2} />
                                        <Text>{item.Desc}</Text>
                                    </View>
                                    <Image style={{ width: 130, height: 150, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={item.img1} />
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        }
                        keyExtractor={item => item.id}

                    />

                </View>

                <View style={{ margin: 10, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                    <Text style={{ fontSize: FontSize.HeadingTxtSize, fontWeight: FontWeight.BoldWeight, color: Colors.ColorPrimaryDark }}>{Strings.PlantTypeTxt}</Text>
                    <TouchableOpacity onPress={this.onClick} >
                        <Text style={{ color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize }}>{Strings.ViewAllTxt}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 10, flexDirection: "row" }}>
                    <FlatList
                        horizontal
                        data={Data}
                        renderItem={({ item }) => <ScrollView style={{}} horizontal={true}>
                            <TouchableOpacity style={{ elevation: 5, margin: 10, borderRadius: 5, width: 300, height: 150, backgroundColor: Colors.BackGroundColorWhite, }}>

                                <View style={{ flexDirection: "row" }}>

                                    <View style={{ padding: 10, justifyContent: "center", alignItems: "center", width: 170 }}>
                                        <Text style={{ marginRight: 20, color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize }}>{item.text}</Text>
                                        <Image style={{ marginRight: 20 }} source={item.img2} />
                                        <Text>{item.Desc}</Text>
                                    </View>
                                    <Image style={{ width: 130, height: 150, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={item.img1} />
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </ScrollView>
    )


}

}