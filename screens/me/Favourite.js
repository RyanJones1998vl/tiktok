import React from "react";
import { Pressable, View, FlatList, Text, Image} from "react-native";
import { MeFavouriteTabs, MeScreenIcons, MeScreenStyles, 
        DiscoverScreenStyles, DiscoveryScreenIcons } from "../../resources/constant";
import {SizedImage} from '../main/index'

export class Favourite extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tabId:MeFavouriteTabs.videos,
            videos:[
                [{video:MeScreenIcons.video, view: "5.2M"},
                {video:MeScreenIcons.video, view: "5.2M"},
                {video:MeScreenIcons.video, view: "5.2M"},
                {video:MeScreenIcons.video, view: "5.2M"}],
                [{video:MeScreenIcons.video, view: "5.2M"},
                {video:MeScreenIcons.video, view: "5.2M"},
                {video:MeScreenIcons.video, view: "5.2M"},
                {video:MeScreenIcons.video, view: "5.2M"}],
                [{video:MeScreenIcons.video, view: "5.2M"},
                {video:MeScreenIcons.video, view: "5.2M"},
                {video:MeScreenIcons.video, view: "5.2M"},
                {video:MeScreenIcons.video, view: "5.2M"}],
            ],
            hashtags :[
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
            ],
            sounds : [
                {cover: MeScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
            ],
            effects : [
                {cover: MeScreenIcons.album, title: "zoandmat", videos:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", videos:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", videos:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", videos:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", videos:"12.0K", creator:"abc", time: "00 : 12"},
                {cover: MeScreenIcons.album, title: "zoandmat", videos:"12.0K", creator:"abc", time: "00 : 12"},
            ]
        }
    }
    renderVideo = (v) =>{
        console.log(v)
        return(
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={MeScreenStyles.videoItem}>
                    <Image
                        style={MeScreenStyles.video}
                        source={v.item[0].video}/>
                    <View style={MeScreenStyles.viewSection}>
                        <SizedImage
                            style={MeScreenStyles.playIcon}
                            source={MeScreenIcons.play}/>
                        <Text style={MeScreenStyles.viewText}>{v.item[0].view}</Text>
                    </View>
                </View>
                <View style={MeScreenStyles.videoItem}>
                    <Image
                        style={MeScreenStyles.video}
                        source={v.item[1].video}/>
                    <View style={MeScreenStyles.viewSection}>
                        <SizedImage
                            style={MeScreenStyles.playIcon}
                            source={MeScreenIcons.play}/>
                        <Text style={MeScreenStyles.viewText}>{v.item[1].view}</Text>
                    </View>
                </View>
                <View style={MeScreenStyles.videoItem}>
                    <Image
                        style={MeScreenStyles.video}
                        source={v.item[2].video}/>
                    <View style={MeScreenStyles.viewSection}>
                        <SizedImage
                            style={MeScreenStyles.playIcon}
                            source={MeScreenIcons.play}/>
                        <Text style={MeScreenStyles.viewText}>{v.item[2].view}</Text>
                    </View>
                </View>
            </View>
            
        )
    }
    renderHashtag = (v) =>{
        console.log(v)
        return(
            <Pressable 
                style={{flexDirection:'row', alignItems:'center'}}>
                <View style={MeScreenStyles.hashtagImageView}>
                    <SizedImage
                        style={MeScreenStyles.hashtagImage}
                        source = {MeScreenIcons.hashtag}/>
                </View>
                <View style={MeScreenStyles.hashtagTextView}>
                    <Text style={MeScreenStyles.hashtagTitle}>#{v.item.name}</Text>
                    <Text style={MeScreenStyles.hashtagView}>{v.item.viewNumber} views</Text>
                </View>
            </Pressable>
            
        )
    }
    renderSound = (s) =>{
        console.log(s)
        return(
            <Pressable 
                style={MeScreenStyles.soundItem}>
                <View 
                    style={MeScreenStyles.soundImageView}>
                    <SizedImage 
                        style={MeScreenStyles.soundImage}
                        source={s.item.cover}/>
                    <SizedImage 
                        style={MeScreenStyles.soundButton}
                        source={DiscoveryScreenIcons.play}/>
                </View>
                <Pressable 
                    // onPress = {() => f('GifList', 
                    //                     {trend:s.item.title,
                    //                     number:s.item.number,
                    //                     creator:s.item.creator,
                    //                     forHashtag:false})}
                    style={MeScreenStyles.soundTextView}>
                    <View>
                        <Text style={DiscoverScreenStyles.soundName}>{s.item.title}</Text>
                        <Text style={DiscoverScreenStyles.soundCreator}>{s.item.creator}</Text>
                        <Text style={DiscoverScreenStyles.soundTime}>{s.item.time}</Text>
                    </View>
                    <SizedImage
                        style={MeScreenStyles.soundMoreIcon}
                        source={MeScreenIcons.more}/>
                </Pressable>
                
                
            </Pressable>
        )
    }
    renderEffect = (s) =>{
        console.log(s)
        return(
            <Pressable 
                style={MeScreenStyles.effectItem}>
                <View 
                    style={MeScreenStyles.effectImageView}>
                    <SizedImage 
                        style={MeScreenStyles.effectImage}
                        source={s.item.cover}/>
                </View>
                <Pressable 
                    // onPress = {() => f('GifList', 
                    //                     {trend:s.item.title,
                    //                     number:s.item.number,
                    //                     creator:s.item.creator,
                    //                     forHashtag:false})}
                    style={MeScreenStyles.soundTextView}>
                    <View>
                        <Text style={MeScreenStyles.effectName}>{s.item.title}</Text>
                        <Text style={MeScreenStyles.effectCreator}>{s.item.creator}</Text>
                        <Text style={MeScreenStyles.effectTime}>{s.item.videos} videos</Text>
                    </View>
                    <SizedImage
                        style={MeScreenStyles.effectMoreIcon}
                        source={MeScreenIcons.more}/>
                </Pressable>
                
                
            </Pressable>
        )
    }
    render(){
        return(
            <View>
                <View style={MeScreenStyles.friendFunctionBar}>
                    <Pressable
                        onPress={()=>this.props.navigation.goBack()}>
                        <SizedImage
                            style={MeScreenStyles.leftFunctionIcon}
                            source={MeScreenIcons.back}/>
                    </Pressable>
                    <Text style={MeScreenStyles.usernameOnBar}>Favourite</Text>
                    {/* <Pressable
                        onPress={()=>this.props.navigation.push('FindFriend')}>
                        <SizedImage
                            style={MeScreenStyles.rightFunctionIcon}
                            source={MeScreenIcons.addFriend}/>
                    </Pressable> */}
                    <View></View>
                </View>
                <View>
                <View style={MeScreenStyles.userTabBar}>
                        <Pressable
                            style={this.state.tabId==MeFavouriteTabs.videos?MeScreenStyles.userTabBarButtonFocused:MeScreenStyles.userTabBarButton}
                            onPress={()=>this.setState({tabId:MeFavouriteTabs.videos})}>
                            <Text 
                                style={this.state.tabId==MeFavouriteTabs.videos?MeScreenStyles.userTabBarTitleFocused:MeScreenStyles.userTabBarTitle}
                                >VIDEOS</Text>
                        </Pressable>
                        <Pressable
                            style={this.state.tabId==MeFavouriteTabs.hashtags?MeScreenStyles.userTabBarButtonFocused:MeScreenStyles.userTabBarButton}
                            onPress={()=>this.setState({tabId:MeFavouriteTabs.hashtags})}>
                            <Text 
                                style={this.state.tabId==MeFavouriteTabs.hashtags?MeScreenStyles.userTabBarTitleFocused:MeScreenStyles.userTabBarTitle}
                                >HASHTAGS</Text>
                        </Pressable>
                        <Pressable
                            style={this.state.tabId==MeFavouriteTabs.sounds?MeScreenStyles.userTabBarButtonFocused:MeScreenStyles.userTabBarButton}
                            onPress={()=>this.setState({tabId:MeFavouriteTabs.sounds})}>
                            <Text 
                                style={this.state.tabId==MeFavouriteTabs.sounds?MeScreenStyles.userTabBarTitleFocused:MeScreenStyles.userTabBarTitle}
                                >SOUNDS</Text>
                        </Pressable>
                        <Pressable
                            style={this.state.tabId==MeFavouriteTabs.effects?MeScreenStyles.userTabBarButtonFocused:MeScreenStyles.userTabBarButton}
                            onPress={()=>this.setState({tabId:MeFavouriteTabs.effects})}>
                            <Text 
                                style={this.state.tabId==MeFavouriteTabs.effects?MeScreenStyles.userTabBarTitleFocused:MeScreenStyles.userTabBarTitle}
                                >EFFECTS</Text>
                        </Pressable>
                    </View>
                    {
                        this.state.tabId == MeFavouriteTabs.videos?
                        <FlatList
                            data={this.state.videos}
                            renderItem={a=>this.renderVideo(a)}/>:
                        this.state.tabId == MeFavouriteTabs.hashtags?
                        <FlatList
                            data={this.state.hashtags}
                            renderItem={a=>this.renderHashtag(a)}/>:
                        this.state.tabId == MeFavouriteTabs.sounds?
                        <FlatList
                            data={this.state.sounds}
                            renderItem={a=>this.renderSound(a)}/>:
                        <FlatList
                            data={this.state.effects}
                            renderItem={a=>this.renderEffect(a)}/>
                    }
                </View>
            </View>
        )
    }
}