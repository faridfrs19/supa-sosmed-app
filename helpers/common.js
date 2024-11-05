import { Dimensions } from "react-native";

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const hp = percantage=>{
    return (percantage*deviceHeight) /100;
}

const wp = percantage=>{
    return (percantage*deviceWidth) /100;
}