import React from 'react';
import { FlatList, Image, View, Text,Button, StyleSheet, TouchableHighlight, TouchableHighlightBase, ScrollView, Keyboard, Pressable, TextInput } from 'react-native';
import  {
        MeScreenIcons,
        MeScreenStyles,
        DiscoverScreenStyles,
    }
        from '../../resources/constant'

import {SizedImage} from '../main/index'

export class FindFriend extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchFocused:false,
            search:"",
            friends : [
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:false, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:false, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:false, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:MeScreenIcons.avatar},
            ],
        }
    }
    setSearchFocused = () =>{
        this.setState({
            searchFocused:true,
            
        })
    }
    setSearchUnfocused = () =>{
        this.setState({
            searchFocused:false,
            search:"",
        })
    }
    setSearch = t=>{
        this.setState({
            search:t
        })
    }
    renderFriend = u =>{
        return (
            <View style={DiscoverScreenStyles.userItem}>
                <Image
                    style={DiscoverScreenStyles.userAvatar}
                    source={u.item.avatar}/>
                <View>
                    <Text style={DiscoverScreenStyles.userName}>{u.item.name}</Text>
                    <Text style={DiscoverScreenStyles.userUsername}>{u.item.username}</Text>
                    {
                        u.item.follow?
                        <Text style={DiscoverScreenStyles.userFollowing}>Following</Text>:
                        <View style={{flexDirection:'row'}}>
                            <Text style={DiscoverScreenStyles.userFollowers}>{u.item.followers} followers   </Text>
                            <Text style={DiscoverScreenStyles.userVideos}>{u.item.videos} videos</Text>
                        </View>
                    }
                </View>
            </View>
            
        )
    }
    filterFriend = () =>{
        if(this.state.search=="") return []
        else return this.state.friends.filter(f => f.name.includes(this.state.search))
    }
    render(){
        return(
            <View>
                
                <View style={MeScreenStyles.findBar}>
                    <Pressable
                        onPress={()=>this.props.navigation.goBack()}>
                        <Image
                            style={MeScreenStyles.findBarBack}
                            source={MeScreenIcons.back}/>
                    </Pressable>
                    
                    <Text
                        style={MeScreenStyles.findBarTitle}>Find Friends</Text>
                    <Pressable>
                        <Image
                            style={MeScreenStyles.findBarScan}
                            source={MeScreenIcons.scan}/>
                    </Pressable>
                </View>
                <View>
                    
                    {
                        !this.state.searchFocused?
                        <View>
                            <Pressable 
                                onPress={()=> this.setSearchFocused()}
                                style={MeScreenStyles.searchFriendArea}>
                                <Image
                                    style={MeScreenStyles.searchFriendAreaIcon}
                                    source={MeScreenIcons.search}/>
                                <Pressable
                                    onPress={()=> this.setSearchFocused()}>
                                    <Text
                                        style={MeScreenStyles.searchFriendAreaInput}>Find friends</Text>
                                </Pressable>
                                
                            </Pressable>
                            <View style={MeScreenStyles.contactItem}>
                                <View style={{flexDirection:'row', justifyContent:'center', alignItems:"center"}}>
                                    <Image
                                        style={MeScreenStyles.contactIcon}
                                        source={MeScreenIcons.tiktok}/>
                                    <View>
                                        <Text style={MeScreenStyles.contactTitle}>Invite Friends</Text>
                                        <Text style={MeScreenStyles.contactDescription}>Stay connected to Tiktok</Text>
                                    </View>
                                </View>
                                <View style={MeScreenStyles.findButton}>
                                    <Text style={MeScreenStyles.findButtonText}>Invite</Text>
                                </View>
                            </View>
                            <View style={MeScreenStyles.contactItem}>
                                <View style={{flexDirection:'row', justifyContent:'center', alignItems:"center"}}>
                                    <Image
                                        style={MeScreenStyles.contactIcon}
                                        source={MeScreenIcons.contacts}/>
                                    <View>
                                        <Text style={MeScreenStyles.contactTitle}>Contacts</Text>
                                        <Text style={MeScreenStyles.contactDescription}>Find your contacts</Text>
                                    </View>
                                </View>
                                <View style={MeScreenStyles.findButton}>
                                    <Text style={MeScreenStyles.findButtonText}>Invite</Text>
                                </View>
                            </View>
                            <View style={MeScreenStyles.contactItem}>
                                <View style={{flexDirection:'row', justifyContent:'center', alignItems:"center"}}>
                                    <Image
                                        style={MeScreenStyles.contactIcon}
                                        source={MeScreenIcons.facebook}/>
                                    <View>
                                        <Text style={MeScreenStyles.contactTitle}>Facebook Friend</Text>
                                        <Text style={MeScreenStyles.contactDescription}>Stay connected to Facebook</Text>
                                    </View>
                                </View>
                                <View style={MeScreenStyles.findButton}>
                                    <Text style={MeScreenStyles.findButtonText}>Invite</Text>
                                </View>
                            </View>
                        </View>:
                        <ScrollView>
                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                <View style={MeScreenStyles.searchFriendAreaShort}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Image
                                            style={MeScreenStyles.searchFriendAreaIcon}
                                            source={MeScreenIcons.search}/>

                                        <TextInput
                                            value={this.state.search}
                                            onChangeText={t=>this.setSearch(t)}/>
                                    </View>
                                    <View>
                                        {this.state.search!="" &&
                                        <Pressable
                                            onPress={() => this.setState({search:""})}>
                                            <Image
                                                style={MeScreenStyles.deletionIcon}
                                                source={MeScreenIcons.inputDeletion}/>
                                        </Pressable>
                                        }
                                    </View>
                                    
                                </View>
                                <Pressable
                                    onPress={()=>this.setSearchUnfocused()}
                                    >
                                    <Text style={MeScreenStyles.cancleText}>Cancle</Text>
                                </Pressable>
                            </View>
                            <FlatList
                                data={this.filterFriend()}
                                renderItem={(f) =>this.renderFriend(f)}
                                />
                        </ScrollView>
                    }
                </View>
            </View>
        )
    }
}