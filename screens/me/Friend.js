import React from 'react';
import { FlatList, Image, View, Text,Button, StyleSheet, TouchableHighlight, TouchableHighlightBase, ScrollView, Keyboard, Pressable, TextInput } from 'react-native';
import  {
        MeFriendTabs,
        MeTypeOfNotification,
        MeScreenIcons,
        MeScreenStyles,
        MeVideoTabs} 
        from '../../resources/constant'

import {SizedImage} from '../main/index'

export class Friend extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.navigation.state.params.tabId)
        this.state={
            username:"hoangphuc0298",
            tabId: this.props.navigation.state.params.tabId,
            following: 50,
            followers: 3,
            availableAccounts: [
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.all, sticked:true},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.suitable, sticked:true},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.suitable, sticked:false},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.disabled, sticked:true},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.all, sticked:false},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.disabled, sticked:true},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.all, sticked:true},
            ],
            accountsFiltered:[
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.all, sticked:true},
                {following:true, avatar:MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.suitable, sticked:true},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.suitable, sticked:false},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.disabled, sticked:true},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.all, sticked:false},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.disabled, sticked:true},
                {following:true, avatar: MeScreenIcons.avatar, name:"tomprattx", username:"Tom Pratt", noti:MeTypeOfNotification.all, sticked:true},
            
            ],
            accountsSuggestedFiltered:[
                {follow:false, avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
                {follow:false, avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
                {follow:false, avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:false},
                {follow:false, avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
                {follow:false, avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:false},
                {follow:false, avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
                {follow:false, avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
            
            ],
            accountsFollowedFiltered:[
                {follow:false,avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
                {follow:false,avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
                {follow:false,avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:false},
                {follow:false,avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
                {follow:false,avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:false},
                {follow:false,avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
                {follow:false,avatar: MeScreenIcons.avatar, name:"sfadtx", username:"Tom Pratt", sticked:true},
            
            ],
            search:"",
        }
    }
    changeTab = e =>{
        this.setState({
            tab:e
        })
    }
    filterAccounts = s => {
        this.setState({
            search:s,
        })
        console.log(this.state.search)

        if(s!=""){
            this.setState({
                accountsFiltered: this.state.availableAccounts.filter(a =>  a.name.includes(s))
            })
        }
        else {
            this.setState({
                accountsFiltered: this.state.availableAccounts
            })
        }
    }
    renderAccountFollowed = a =>{
        return(
            <Pressable 
                onPress={()=>this.props.navigation.push('Me', {notMe:true, followed:true})}
                style={MeScreenStyles.followingItem}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image 
                        style={MeScreenStyles.accountAvatar}
                        source= {a.item.avatar}/>
                    <View>
                        <View style={MeScreenStyles.nameLine}>
                            <Text style={MeScreenStyles.friendName}>{a.item.name}</Text>
                            {
                                a.item.sticked &&
                                <Image
                                    style={MeScreenStyles.blueSticker}
                                    source={MeScreenIcons.tick}/>
                            }
                        </View>
                        <Text style={MeScreenStyles.username}>{a.item.username}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {
                        a.item.following?
                        <Pressable 
                            onPress={()=>{
                                let ac = this.state.availableAccounts
                                ac[a.index].following = false
                                this.setState({
                                    availableAccounts: ac
                                })
                                this.filterAccounts(this.state.search)
                            }}
                            style={MeScreenStyles.followingButton}>
                            <Text style={MeScreenStyles.followingText}>Following</Text>
                        </Pressable>:
                        <Pressable 
                            onPress={()=>{
                                let ac = this.state.availableAccounts
                                ac[a.index].following = true
                                this.setState({
                                    availableAccounts: ac
                                })
                                this.filterAccounts(this.state.search)

                            }}
                            style={MeScreenStyles.followButton}>
                            <Text style={MeScreenStyles.followText}>Follow</Text>
                        </Pressable>
                    }
                    {
                        a.item.noti==MeTypeOfNotification.all?
                        <Image
                            style={MeScreenStyles.bellIcon}
                            source={MeScreenIcons.bell}/>:
                        a.item.noti==MeTypeOfNotification.suitable?
                        <Image
                            style={MeScreenStyles.bellIcon}
                            source={MeScreenIcons.ringingBell}/>:
                        <Image
                            style={MeScreenStyles.bellIcon}
                            source={MeScreenIcons.disabledBell}/>
                    }
                </View>
            </Pressable>
        )
    }
    renderAccountFollowing = a =>{
        return(
            <Pressable 
                onPress={()=>this.props.navigation.push('Me', {notMe:true, followed:a.item.follow})}
                style={MeScreenStyles.followingItem}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image 
                        style={MeScreenStyles.accountAvatar}
                        source= {a.item.avatar}/>
                    <View>
                        <View style={MeScreenStyles.nameLine}>
                            <Text style={MeScreenStyles.friendName}>{a.item.name}</Text>
                            {
                                a.item.sticked &&
                                <Image
                                    style={MeScreenStyles.blueSticker}
                                    source={MeScreenIcons.tick}/>
                            }
                        </View>
                        <Text style={MeScreenStyles.username}>{a.item.username}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                {
                        a.item.follow?
                        <Pressable 
                            onPress={()=>{
                                let ac = this.state.accountsFollowedFiltered
                                ac[a.index].follow = false
                                this.setState({
                                    accountsFollowedFiltered: ac
                                })
                            }}
                            style={MeScreenStyles.followingButton}>
                            <Text style={MeScreenStyles.followingText}>Following</Text>
                        </Pressable>
                        :
                        <Pressable 
                            onPress={()=>{
                                let ac = this.state.accountsFollowedFiltered
                                ac[a.index].follow = true
                                this.setState({
                                    accountsFollowedFiltered: ac
                                })
                            }}
                            style={MeScreenStyles.followButton}>
                            <Text style={MeScreenStyles.followText}>Follow back</Text>
                        </Pressable>
                    }
                    <SizedImage
                        style={MeScreenStyles.bellIcon}
                        source={MeScreenIcons.dots}/>
                </View>
            </Pressable>
        )
    }
    renderAccountSuggested = a =>{
        console.log(a)
        return(
            <Pressable 
                onPress={()=>this.props.navigation.push('Me', {notMe:true, followed:false})}
                style={MeScreenStyles.followingItem}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image 
                        style={MeScreenStyles.accountAvatar}
                        source= {a.item.avatar}/>
                    <View>
                        <View style={MeScreenStyles.nameLine}>
                            <Text style={MeScreenStyles.friendName}>{a.item.name}</Text>
                            {
                                a.item.sticked &&
                                <Image
                                    style={MeScreenStyles.blueSticker}
                                    source={MeScreenIcons.tick}/>
                            }
                        </View>
                        <Text style={MeScreenStyles.username}>{a.item.username}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {
                        a.item.follow?
                        <Pressable 
                            onPress={()=>{
                                let ac = this.state.accountsSuggestedFiltered
                                ac[a.index].follow = false
                                this.setState({
                                    accountsSuggestedFiltered: ac
                                })
                            }}
                            style={MeScreenStyles.followingButton}>
                            <Text style={MeScreenStyles.followingText}>Following</Text>
                        </Pressable>
                        :
                        <Pressable 
                            onPress={()=>{
                                let ac = this.state.accountsSuggestedFiltered
                                ac[a.index].follow = true
                                this.setState({
                                    accountsSuggestedFiltered: ac
                                })
                            }}
                            style={MeScreenStyles.followButton}>
                            <Text style={MeScreenStyles.followText}>Follow back</Text>
                        </Pressable>
                    }
                    
                    <SizedImage
                        style={MeScreenStyles.bellIcon}
                        source={MeScreenIcons.dots}/>
                </View>
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
                    <Text style={MeScreenStyles.usernameOnBar}>{this.state.username}</Text>
                    <Pressable
                        onPress={()=>this.props.navigation.push('FindFriend')}>
                        <SizedImage
                            style={MeScreenStyles.rightFunctionIcon}
                            source={MeScreenIcons.addFriend}/>
                    </Pressable>
                </View>
                    <View style={MeScreenStyles.userTabBar}>
                        <Pressable
                            style={this.state.tabId==MeFriendTabs.following?MeScreenStyles.userTabBarButtonFocused:MeScreenStyles.userTabBarButton}
                            onPress={()=>this.setState({tabId:MeFriendTabs.following})}>
                            <Text 
                                style={this.state.tabId==MeFriendTabs.following?MeScreenStyles.userTabBarTitleFocused:MeScreenStyles.userTabBarTitle}
                                >Following {this.state.following}</Text>
                        </Pressable>
                        <Pressable
                            style={this.state.tabId==MeFriendTabs.follower?MeScreenStyles.userTabBarButtonFocused:MeScreenStyles.userTabBarButton}
                            onPress={()=>this.setState({tabId:MeFriendTabs.follower})}>
                            <Text 
                                style={this.state.tabId==MeFriendTabs.follower?MeScreenStyles.userTabBarTitleFocused:MeScreenStyles.userTabBarTitle}
                                >Followers {this.state.followers}</Text>
                        </Pressable>
                        <Pressable
                            style={this.state.tabId==MeFriendTabs.suggested?MeScreenStyles.userTabBarButtonFocused:MeScreenStyles.userTabBarButton}
                            onPress={()=>this.setState({tabId:MeFriendTabs.suggested})}>
                            <Text 
                                style={this.state.tabId==MeFriendTabs.suggested?MeScreenStyles.userTabBarTitleFocused:MeScreenStyles.userTabBarTitle}
                                >Suggested</Text>
                        </Pressable>
                    </View>
                {
                    this.state.tabId == MeFriendTabs.following?
                    <ScrollView>
                        <View 
                            style={MeScreenStyles.searchArea}>
                            <SizedImage
                                style={MeScreenStyles.searchAreaIcon}
                                source={MeScreenIcons.graySearch}/>
                            <TextInput
                                style={MeScreenStyles.searchAreaInput}
                                onChange = {s => this.filterAccounts(s)}
                                placeholder={"Search"}/>
                        </View>
                        <FlatList
                            data={this.state.accountsFiltered}
                            renderItem={a=>this.renderAccountFollowed(a)}/>
                    </ScrollView>:
                    this.state.tabId == MeFriendTabs.follower?
                    <FlatList
                        data={this.state.accountsFollowedFiltered}
                        renderItem={a=>this.renderAccountFollowing(a)}/>:
                    <FlatList
                        data={this.state.accountsSuggestedFiltered}
                        renderItem={a=>this.renderAccountSuggested(a)}/>
                }
                
            </View>
        )
    }
}