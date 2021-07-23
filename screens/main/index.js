import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {
    empty_heart
} from '../../resources/main/empty_heart.png'
import {
    MainScreenIcons, 
    MainScreenStyles,
    FONT
} from '../../resources/constant'
export const SizedImage = (props) =>{
    // console.log(props.source)
    let iSize = Image.resolveAssetSource(props.source);
    var height, width;
    // console.log(props)
    
    if(props.style.height == undefined){
        width = props.style.width;
        height = (props.style.width) * iSize.height/iSize.width;
    }else if (props.style.width == undefined){
        height = props.style.height;
        width = (props.style.height) * iSize.width/iSize.height;
    }else if (props.style.width/props.style.height > iSize.width/iSize.height){
        height = props.style.height;
        width = (props.style.height) * iSize.width/iSize.height;
    } else{
        width = props.style.width;
        height = (props.style.width) * iSize.height/iSize.width;
    }
    // console.log(height + " " + width)

    let imageSizeDef = StyleSheet.create({
        width:width,
        height:height,
    })

    // console.log(iSize) 
    return(
        <Image
            source = {props.source}
            style={{...props.style, ...imageSizeDef}}
            onClick = {()=>props.onClick}>
        </Image>
    )
}
export class IconWithText extends React.Component {
    constructor(props){
        super(props);
        // console.log(props)
        // let iSize = Image.resolveAssetSource(this.props.imageSource);
        // var height, width;
        
        // if (this.props.imageSizeDef.width/this.props.imageSizeDef.height > iSize.width/iSize.height){
        //     height = this.props.imageSizeDef.height;
        //     width = (this.props.imageSizeDef.height) * iSize.width/iSize.height;
        // } else{
        //     width = this.props.imageSizeDef.width;
        //     height = (this.props.imageSizeDef.width) * iSize.height/iSize.width;
        // }
        
        // this.state={
        //     imageSizeDef:{
        //         width:width,
        //         height:height,
        //     }
        // }
    }
    render (){
        // console.log(this.props);

        return(
        <View
            style={this.props.sizeDef}>
            <View
                style={styles.imageView}>
                <SizedImage
                    source = {this.props.imageSource}
                    style={{...this.props.imageSizeDef, 
                    // ...this.state.imageSizeDef
                    }}>
                </SizedImage>
            </View>
            
            <Text
                style={this.props.textSizeDef}>
                {this.props.text}
            </Text>
        </View>
        );
        
    };
}
const styles = StyleSheet.create({
    imageView:{
        // backgroundColor: "#96C",
        width: 72/2,
        height: 80/2,
        flex:1,
        justifyContent:"flex-end",  
        alignItems:'center',
    },

    // left bottom panel
    IWT_icon:{
        // yellow
        // backgroundColor: "#000",
        // width: 72/2,
        // height: 80/2,
        width: 72/2,
        height: 60/2,
      },
    
    
});


export const DefinedText = (props) => {
    return (
        <Text 
            style = {props.style}>
            {props.text}
        </Text>
    )
};
const AccountReference = (props) => {
    return (
        <View
            style ={MainScreenStyles.accountReference}>
            <View
                style={MainScreenStyles.backgroundAR}/>
            <View style={MainScreenStyles.ARText}>
                <SizedImage
                    source = {MainScreenIcons.white_heart}
                    style={MainScreenStyles.accountReferenceIcon}
                    />
                <Text
                    style={MainScreenStyles.accountReferenceText}>
                    {" " + props.text}
                </Text>
            </View>
            
        </View>
    )
}
const HighlightedTrend = (props) => {
    return (
        
        <View
            style ={MainScreenStyles.highlightedTrend}>
            
            <View style={MainScreenStyles.backgroundHT}/>
            
            <View style={MainScreenStyles.HTText}>
                <SizedImage
                    source = {MainScreenIcons.white_heart}
                    style={MainScreenStyles.highlightedTrendIcon}
                    />
                <Text
                    style={MainScreenStyles.highlightedTrendText}>
                    {" " + props.text}
                </Text>
            </View>
            
        </View>
        
    )
}
export const DescriptiveText = (props) =>{
    const tokens = props.text.split(" ");

    const highlightText = () => {
        var textArray = []
        for(var i=0;i<tokens.length;i++){
            var t = tokens[i].charAt(0) === "%"?
            <HighlightedTrend
                text = {tokens[i].split("%").join(" ")}/>: 
            tokens[i].charAt() === "$"?
            <AccountReference
                text = {tokens[i].split("$").join(" ")}/>:
            tokens[i].charAt() === "#"?
            <DefinedText 
                style={MainScreenStyles.boldDescriptiveText}
                text = {" " + tokens[i]} />:
            <DefinedText 
                style={MainScreenStyles.normalDescriptiveText}
                text = {" " + tokens[i]} />
            textArray.push(t)
        }
        return textArray
    }
    
    return (
        <View
            style={MainScreenStyles.descriptiveText}>
            {highlightText()}
        </View>
        
    )
}
export const SoundTitle = (props) => {
    return(
        <View
            style={MainScreenStyles.soundTitle}
        >
            <SizedImage 
                style={MainScreenStyles.soundTitleIcon}
                source = {MainScreenIcons.music}
            />
            <Text
                style={MainScreenStyles.soundTitleText}>
                {props.text}
            </Text>
        </View>
    )
}
// export DefinedText;