import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity ,PermissionsAndroid } from 'react-native'
import AppImages from '../theme/AppImages';
import Strings from '../theme/Strings';
import Colors from '../theme/Colors';
import FontSize from '../theme/FontSize';
import FontWeight from '../theme/FontWeight';







const Splash = ({ navigation }) => {

    const ScreenHeight = Dimensions.get('window').height;
    const ScreenWidth = Dimensions.get('window').width;



    const onNextClick = () => {

        navigation.navigate('Walkthrough')

    }



    return (
        <View style={{ backgroundColor: Colors.BackGroundColorWhite, height: ScreenHeight }}>
            <View style={{ alignItems: "center", height: ScreenHeight - 100, justifyContent: "center", alignContent: "center", backgroundColor: Colors.BackGroundColorWhite, width: ScreenWidth }}>

                <Image
                    source={AppImages.logo}
                />
                <Text style={{ margin : 10 ,fontSize: FontSize.HeadingTxtSize, fontWeight: "bold", color: Colors.ColorPrimaryDark }}>{Strings.WelcomeTxt}</Text>
                <Text style={{ margin : 10 ,color: Colors.TxtColor, fontSize: FontSize.defaultTxtSize }}>{Strings.SplashTxt}</Text>
            </View>
            <View style={{ backgroundColor: Colors.BackGroundColorWhite }}>
                <TouchableOpacity onPress={onNextClick} style={{ borderColor: 'black', elevation: 5, borderRadius: 5, width: ScreenWidth - 30, justifyContent: "center", alignItems: "center", backgroundColor: Colors.ColorPrimary, height: 50, alignSelf: "center" }}>
                    <Text style={{ color: Colors.BackGroundColorWhite, fontWeight: FontWeight.BoldWeight }}>{Strings.NextTxt}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Splash;