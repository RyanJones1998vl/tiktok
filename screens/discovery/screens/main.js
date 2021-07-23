import React from 'react';
import { FlatList, Image, View, Text,Button, StyleSheet, TouchableHighlight, TouchableHighlightBase, ScrollView, Keyboard, Pressable, TextInput } from 'react-native';
import  {DiscoverScreenStyles, 
        DiscoveryScreenIcons,
        MainScreenStyles,
        MainScreenIcons
        } 
        from '../../../resources/constant'
import {DiscoveryIconId, DiscoveryViewId} from '../../../resources/constant';

import SearchingBar from '../searching_bar';
import ImageSlider from '../image_slider';
import TrendingList from '../trending_list';
import ViewSlider from 'react-native-view-slider';
import { SizedImage } from '../../main';
export class DiscoveryMainScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // view:DiscoveryViewId.trendList,
            trends:[
                {type: DiscoveryIconId.hashtag, title: "MonnNgonTaiNha", number:"1.2B",
                gifs : [
                    {isGif:true, gif:DiscoveryScreenIcons.tn3},
                    {isGif:true, gif:DiscoveryScreenIcons.tn0},
                    {isGif:true, gif:DiscoveryScreenIcons.tn1},
                    {isGif:true, gif:DiscoveryScreenIcons.tn2},
                    {isGif:true, gif:DiscoveryScreenIcons.tn3},
                    {isGif:true, gif:DiscoveryScreenIcons.tn0},
                    {isGif:false}]},
                {type : DiscoveryIconId.sound, title:"PhongChongThienTai", number:"9.3M",
                gifs : [
                    {isGif:true, gif:DiscoveryScreenIcons.tn4},
                    {isGif:true, gif:DiscoveryScreenIcons.tn5},
                    {isGif:true, gif:DiscoveryScreenIcons.tn6},
                    {isGif:true, gif:DiscoveryScreenIcons.tn7},
                    {isGif:true, gif:DiscoveryScreenIcons.tn8},
                    {isGif:true, gif:DiscoveryScreenIcons.tn4},
                    {isGif:false}]},
                {type: DiscoveryIconId.hashtag, title:"VaCaiKet", number:"1.8B",
                gifs : [
                    {isGif:true, gif:DiscoveryScreenIcons.tn9},
                    {isGif:true, gif:DiscoveryScreenIcons.tn10},
                    {isGif:true, gif:DiscoveryScreenIcons.tn11},
                    {isGif:true, gif:DiscoveryScreenIcons.tn12},
                    {isGif:true, gif:DiscoveryScreenIcons.tn9},
                    {isGif:true, gif:DiscoveryScreenIcons.tn10},
                    {isGif:false}]},
                {type: DiscoveryIconId.flter, title:"Bald", number:"303.5K",
                gifs : [{isGif:true, gif:DiscoveryScreenIcons.tn3},
                    {isGif:true, gif:DiscoveryScreenIcons.tn0},
                    {isGif:true, gif:DiscoveryScreenIcons.tn1},
                    {isGif:true, gif:DiscoveryScreenIcons.tn2},
                    {isGif:true, gif:DiscoveryScreenIcons.tn3},
                    {isGif:true, gif:DiscoveryScreenIcons.tn0},
                    {isGif:false}]},
                {type: DiscoveryIconId.hashtag, title:"BackTo90s", number:"911.8M",
                gifs : [{isGif:true, gif:DiscoveryScreenIcons.tn4},
                    {isGif:true, gif:DiscoveryScreenIcons.tn5},
                    {isGif:true, gif:DiscoveryScreenIcons.tn6},
                    {isGif:true, gif:DiscoveryScreenIcons.tn7},
                    {isGif:true, gif:DiscoveryScreenIcons.tn8},
                    {isGif:true, gif:DiscoveryScreenIcons.tn4},
                    {isGif:false}]},
            ]
        }
    }
    imageSlider = () => {
        return(
            <View>
                <ViewSlider
                    renderSlides = {
                    <>
                        <View style={DiscoverScreenStyles.imageBox}>
                            <Image source={DiscoveryScreenIcons.c0} style={DiscoverScreenStyles.adImage}/>
                        </View>
                        <View style={DiscoverScreenStyles.imageBox}>
                            <Image source={DiscoveryScreenIcons.c1} style={DiscoverScreenStyles.adImage}/>
                        </View>
                        <View style={DiscoverScreenStyles.imageBox}>
                            <Image source={DiscoveryScreenIcons.c2} style={DiscoverScreenStyles.adImage}/>
                        </View>
                        <View style={DiscoverScreenStyles.imageBox}>
                            <Image source={DiscoveryScreenIcons.c3} style={DiscoverScreenStyles.adImage}/>
                        </View>
                    </>
                      
                    }
    
                    style={DiscoverScreenStyles.Slider}     //Main slider container style
                    height = {201}    //Height of your slider
                    slideCount = {3}    //How many views you are adding to slide
                    dots = {true}     // Pagination dots visibility true for visibile 
                    dotActiveColor = 'red'     //Pagination dot active color
                    dotInactiveColor = "#FCA"    // Pagination do inactive color
                    dotsContainerStyle={DiscoverScreenStyles.dotContainer}     // Container style of the pagination dots
                    autoSlide = {true}    //The views will slide automatically
                    slideInterval = {1}    //In Miliseconds
                    />
            </View>
        )
    }
    renderTrend = t => {
        return(<TrendingList
            goToGifList = {this.props.navigation.push}
            number={t.item.number}
            title={t.item.title}
            gifs={t.item.gifs}
            type={t.item.type}/>)
    }
    // switchView = (id, outFocus) => {
    //     this.setState({
    //         view:id
    //     })
    //     if (outFocus) Keyboard.dismiss()
    // }
    render(){
        // console.log(this.state)
        return(
            <View style={{backgroundColor:'white'}}>
                
                <View style={DiscoverScreenStyles.discoverScreenContent}>
                
                    <SearchingBar 
                        // view = {this.state.displayMainScreen}
                        switchView = {() => this.props.navigation.push('History')}
                        canReturn={false}
                        />
                
                    <ScrollView>
                        {/* <ImageSlider/> */}
                        {this.imageSlider()}
                        <FlatList
                            data={this.state.trends}
                            renderItem = {t => this.renderTrend(t)}/>
                    </ScrollView>
                </View>
                <View style={MainScreenStyles.whiteTabBar}>
                    <Pressable 
                        onPress={()=>this.props.navigation.push("MyVideos")}
                        style={MainScreenStyles.tabButton}>
                        <SizedImage 
                            source={MainScreenIcons.grayHome}
                            style={MainScreenStyles.tabIcon}/>
                        <Text style={MainScreenStyles.tabText}>Home</Text>
                    </Pressable>
                    <Pressable  
                        
                        style={MainScreenStyles.tabButton}>
                        <SizedImage 
                            source={MainScreenIcons.blackFinding}
                            style={MainScreenStyles.tabIcon}/>
                        <Text style={MainScreenStyles.blackTabText}>Discovery</Text>
                    </Pressable>
                    <Pressable  
                        style={MainScreenStyles.tabButton}>
                        <SizedImage 
                            source={MainScreenIcons.tiktok}
                            style={MainScreenStyles.tiktokIcon}/>
                    </Pressable>
                    <Pressable  
                        style={MainScreenStyles.tabButton}>
                        <SizedImage 
                            source={MainScreenIcons.grayInbox}
                            style={MainScreenStyles.tabIcon}/>
                        <Text style={MainScreenStyles.tabText}>Inbox</Text>
                    </Pressable>
                    <Pressable  
                        onPress={()=>this.props.navigation.push("Me")}
                        style={MainScreenStyles.tabButton}>
                        <SizedImage 
                            source={MainScreenIcons.grayAccount}
                            style={MainScreenStyles.tabIcon}/>
                        <Text style={MainScreenStyles.tabText}>Me</Text>
                    </Pressable>
                </View>
            </View>
            
        )
    }
}