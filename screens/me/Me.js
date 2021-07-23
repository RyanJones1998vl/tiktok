import React from 'react';
import { FlatList, Image, View, Text,Button, StyleSheet, TouchableHighlight, TouchableHighlightBase, ScrollView, Keyboard, Pressable, TextInput } from 'react-native';
import  {
    MeFriendTabs,
        MeScreenIcons,
        MeScreenStyles,
        MeVideoTabs,
        }
        from '../../resources/constant'

import {SizedImage} from '../main/index'
import { DiscoverScreenStyles, MainScreenStyles, MainScreenIcons, DiscoveryScreenIcons } from '../../resources/constant';

export class Me extends React.Component{
    constructor(props){
        super(props)
        console.log()
        this.state=({
            isMe:   this.props.navigation && this.props.navigation.state &&
                    typeof(this.props.navigation.state.params)!="undefined" && 
                    typeof(this.props.navigation.state.params.notMe)!="undefined"?false:true,
            followed:   this.props.navigation && this.props.navigation.state &&
                        typeof(this.props.navigation.state.params)!="undefined"&&this.props.navigation.state.params.followed,
            avatar:MeScreenIcons.avatar,
            username: "Ngo Hoang Phuc",
            name: "hoangphuc0298",
            tabId:MeVideoTabs.public,
            following:10,
            followers: 3,
            like:0,
            videos:[
                [
                [
                    {view: "52",official:true, video: DiscoveryScreenIcons.tn1},
                    {view: "17",official:true, video: DiscoveryScreenIcons.tn0},
                    {view: "66",official:false, video: DiscoveryScreenIcons.tn2},                
                ],
                [
                    {view:"1",official:true, video: DiscoveryScreenIcons.tn6},
                    {view:"102",official:true, video: DiscoveryScreenIcons.tn4},
                    {view:"2",official:true, video: DiscoveryScreenIcons.tn2},                
                ],
                [
                    {view:"21",official:true, video: DiscoveryScreenIcons.video},
                    {view:"12",official:true, video: DiscoveryScreenIcons.tn10},
                    {view:"45",official:true, video: DiscoveryScreenIcons.tn2},                
                ]],
                [
                    
                    [
                        {view:"1",official:true, video: DiscoveryScreenIcons.tn6},
                        {view:"102",official:true, video: DiscoveryScreenIcons.tn4},
                        {view:"2",official:true, video: DiscoveryScreenIcons.tn2},                
                    ],
                    [
                        {view:"21",official:true, video: DiscoveryScreenIcons.video},
                        {view:"12",official:true, video: DiscoveryScreenIcons.tn10},
                        {view:"45",official:true, video: DiscoveryScreenIcons.tn2},                
                    ],
                    [
                        {view: "52",official:true, video: DiscoveryScreenIcons.tn1},
                        {view: "17",official:true, video: DiscoveryScreenIcons.tn0},
                        {view: "66",official:false, video: DiscoveryScreenIcons.tn2},                
                    ]
                ],
                    
                    [
                        [
                            {view: "52",official:true, video: DiscoveryScreenIcons.tn1},
                            {view: "17",official:true, video: DiscoveryScreenIcons.tn0},
                            {view: "66",official:false, video: DiscoveryScreenIcons.tn2},                
                        ],
                        
                        [
                            {view:"21",official:true, video: DiscoveryScreenIcons.video},
                            {view:"12",official:true, video: DiscoveryScreenIcons.tn10},
                            {view:"45",official:true, video: DiscoveryScreenIcons.tn2},                
                        ],
                        [
                            {view:"1",official:true, video: DiscoveryScreenIcons.tn6},
                            {view:"102",official:true, video: DiscoveryScreenIcons.tn4},
                            {view:"2",official:true, video: DiscoveryScreenIcons.tn2},                
                        ],
                ]
            ],
            descriptionLines:[
                {type : "QA", content:"Q&A"},
                {type : "bold", content:"Hello my friends"},
                {type : "normal", content:"A normal line"},
            ]
        })
    }
    renderVideo = (v) =>{
        console.log(v)
        return(
            <Pressable
            
            style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Pressable 
                    onPress={()=> this.props.navigation.push("MyVideo",{video:v.item[0].video}
                    )}
                    style={MeScreenStyles.videoItem}>
                    <Image
                        style={MeScreenStyles.video}
                        source={v.item[0].video}/>
                    <View style={MeScreenStyles.viewSection}>
                        <SizedImage
                            style={MeScreenStyles.playIcon}
                            source={MeScreenIcons.play}/>
                        <Text style={MeScreenStyles.viewText}>{v.item[0].view}</Text>
                    </View>
                </Pressable>
                <Pressable 
                    onPress={()=> this.props.navigation.push("MyVideo",{video:v.item[1].video}
                    )}
                    style={MeScreenStyles.videoItem}>
                    <Image
                        style={MeScreenStyles.video}
                        source={v.item[1].video}/>
                    <View style={MeScreenStyles.viewSection}>
                        <SizedImage
                            style={MeScreenStyles.playIcon}
                            source={MeScreenIcons.play}/>
                        <Text style={MeScreenStyles.viewText}>{v.item[1].view}</Text>
                    </View>
                </Pressable>
                <Pressable 
                    onPress={()=> this.props.navigation.push("MyVideo",{video:v.item[2].video}
                    )}
                    style={MeScreenStyles.videoItem}>
                    <Image
                        style={MeScreenStyles.video}
                        source={v.item[2].video}/>
                    <View style={MeScreenStyles.viewSection}>
                        <SizedImage
                            style={MeScreenStyles.playIcon}
                            source={MeScreenIcons.play}/>
                        <Text style={MeScreenStyles.viewText}>{v.item[2].view}</Text>
                    </View>
                </Pressable>
            </Pressable>
            
        )
    }
    render(){
        return(
            <View style={{backgroundColor:'white'}}>
            <View style={DiscoverScreenStyles.discoverScreenContent}>                
            {
                    // this.props.isMainAccount
                    this.state.isMe ? 
                    <View style={MeScreenStyles.functionBar}>
                        <Pressable
                            onPress={()=>this.props.navigation.push('FindFriend')}>
                            <SizedImage
                                style={MeScreenStyles.leftFunctionIcon}
                                source={MeScreenIcons.addFriend}/>
                        </Pressable>
                        <Text style={MeScreenStyles.usernameOnBar}>{this.state.username}</Text>
                        <Pressable>
                            <SizedImage
                                style={MeScreenStyles.rightFunctionIcon}
                                source={MeScreenIcons.more}/>
                        </Pressable>
                    </View>:
                    <View style={MeScreenStyles.functionBar}>
                        <Pressable
                            onPress={()=>this.props.navigation.goBack()}>
                            <Image
                                style={MeScreenStyles.leftFunctionIcon}
                                source={MeScreenIcons.back}/>
                        </Pressable>
                        <Text style={MeScreenStyles.usernameOnBar}>{this.state.username}</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Pressable>
                                <SizedImage
                                    style={MeScreenStyles.rightFunctionIcon}                                
                                    source={MeScreenIcons.bell}/>
                            </Pressable>
                            <Pressable>
                                <SizedImage
                                    style={MeScreenStyles.rightFunctionIcon}
                                    source={MeScreenIcons.more}/>
                            </Pressable>
                        </View>
                    </View>
                }
                
                <ScrollView>
                    <View style={MeScreenStyles.informationPanel}>
                        <Image
                            style={MeScreenStyles.avatar}
                            source={this.state.avatar}/>
                        <Text style={MeScreenStyles.name}>@{this.state.name}</Text>
                        <View style={MeScreenStyles.statisticBar}>
                            <Pressable 
                                onPress={() => this.props.navigation.push('Friend',{tabId:MeFriendTabs.following})}
                                style={MeScreenStyles.statisticSection}>
                                <Text style={MeScreenStyles.statisticNumber}>{this.state.following}</Text>
                                <Text style={MeScreenStyles.statisticTitle}>Following</Text>
                            </Pressable>
                            <View style={MeScreenStyles.verticalBar}/>
                            <Pressable 
                                onPress={() => this.props.navigation.push('Friend',{tabId:MeFriendTabs.follower})}
                                style={MeScreenStyles.statisticSection}>
                                <Text style={MeScreenStyles.statisticNumber}>{this.state.followers}</Text>
                                <Text style={MeScreenStyles.statisticTitle}>Followers</Text>
                            </Pressable>
                            <View style={MeScreenStyles.verticalBar}/>
                            <Pressable 
                                onPress={() => this.props.navigation.push('Friend',{tabId:MeFriendTabs.suggested})}
                                style={MeScreenStyles.statisticSection}>
                                <Text style={MeScreenStyles.statisticNumber}>{this.state.like}</Text>
                                <Text style={MeScreenStyles.statisticTitle}>Like</Text>
                            </Pressable>
                        </View>
                        {
                            this.state.isMe?
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={MeScreenStyles.bigButton}>
                                    <Text style={MeScreenStyles.buttonText}>Edit Profile</Text>
                                </View>
                                <Pressable
                                    onPress={()=>this.props.navigation.push('Favourite')}
                                    style={MeScreenStyles.smallButton}>
                                    <SizedImage
                                        style={MeScreenStyles.buttonIcon}
                                        source={MeScreenIcons.favorite}/>
                                </Pressable>
                            </View>:
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                {
                                    this.state.followed?
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <View style={MeScreenStyles.normalButton}>
                                            <Text style={MeScreenStyles.buttonText}>Message</Text>
                                        </View>
                                            <Pressable 
                                                onPress={()=>this.setState({followed:false})}
                                            style={MeScreenStyles.smallButton}>
                                            <SizedImage
                                                style={MeScreenStyles.buttonIcon}
                                                source={MeScreenIcons.account}/>
                                        </Pressable>
                                    </View>:
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Pressable 
                                            onPress={()=>this.setState({followed:true})}
                                            style={MeScreenStyles.bigRedButton}>
                                            <Text style={MeScreenStyles.buttonRedText}>Follow</Text>
                                        </Pressable>
                                    </View>
                                    
                                }
                                
                                <View style={MeScreenStyles.smallButton}>
                                    <SizedImage
                                        style={MeScreenStyles.buttonIcon}
                                        source={MeScreenIcons.down}/>
                                </View>
                            </View>
                        }
                        {
                            this.state.descriptionLines.map(line=>{
                                return(
                                    line.type=="QA"?
                                    <Pressable style={MeScreenStyles.qaSection}>
                                        <Image 
                                            style={MeScreenStyles.qaIcon}
                                            source = {MeScreenIcons.qaIcon}/>
                                        <Text style={MeScreenStyles.qaText}>Q&A</Text>
                                    </Pressable>:
                                    line.type=="normal"?
                                    <Text 
                                        style={MeScreenStyles.descriptionText}>{line.content}</Text>:
                                    <Text 
                                        style={MeScreenStyles.boldDescriptionText}>{line.content}</Text>


                                )
                            })
                        }
                    </View>
                    <View style={MeScreenStyles.tabBar}>
                    
                        <View>
                            <Pressable 
                                onPress = {() => this.setState({tabId:MeVideoTabs.public})}
                                style={this.state.tabId == MeVideoTabs.public?MeScreenStyles.tabButtonFocused:MeScreenStyles.tabButton}>
                                <SizedImage
                                    style={MeScreenStyles.tabIcon}
                                    source={this.state.tabId == MeVideoTabs.public? MeScreenIcons.list:MeScreenIcons.white_list}/>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable 
                                onPress = {() => this.setState({tabId:MeVideoTabs.like})}
                                style={this.state.tabId == MeVideoTabs.like?MeScreenStyles.tabButtonFocused:MeScreenStyles.tabButton}>
                                <SizedImage
                                    style={MeScreenStyles.tabIcon}
                                    source={this.state.tabId == MeVideoTabs.like? MeScreenIcons.eye:MeScreenIcons.white_eye}/>
                            </Pressable>
                        </View>
                        {
                            this.state.isMe&&
                            <View>
                                <Pressable 
                                    onPress = {() => this.setState({tabId:MeVideoTabs.private})}
                                    style={this.state.tabId == MeVideoTabs.private?MeScreenStyles.tabButtonFocused:MeScreenStyles.tabButton}>
                                    <SizedImage
                                        style={MeScreenStyles.tabIcon}
                                        source={this.state.tabId == MeVideoTabs.private? MeScreenIcons.lock:MeScreenIcons.white_lock}/>
                                </Pressable>
                            </View>
                        }
                        
                    </View>        
                    <FlatList
                        // style={MeScreenStyles.scrollview}
                        data={this.state.videos[this.state.tabId]}
                        renderItem = {(v)=>this.renderVideo(v)}/>        
                </ScrollView>
            </View>
            {
                this.state.isMe &&
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
                        onPress={()=>this.props.navigation.push("Discovery")}
                        style={MainScreenStyles.tabButton}>
                        <SizedImage 
                            source={MainScreenIcons.grayFinding}
                            style={MainScreenStyles.tabIcon}/>
                        <Text style={MainScreenStyles.tabText}>Discovery</Text>
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
                        style={MainScreenStyles.tabButton}>
                        <SizedImage 
                            source={MainScreenIcons.blackAccount}
                            style={MainScreenStyles.tabIcon}/>
                        <Text style={MainScreenStyles.blackTabText}>Me</Text>
                    </Pressable>
                </View>
            }
        </View>
        )
    }
}

