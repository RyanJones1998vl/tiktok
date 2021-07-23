import React from 'react';
import { FlatList, Image, View, Text,Button, StyleSheet, TouchableHighlight, TouchableHighlightBase, ScrollView, Keyboard, Pressable, TextInput } from 'react-native';
import  {DiscoverScreenStyles, 
        DiscoveryScreenIcons,
        DiscoveryTabId,} 
        from '../../../resources/constant'

import { TopTrends, UserList, VideoList, SoundList, HashtagList } from '../others';

export class Trending extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tab : DiscoveryTabId.top,
            users : [
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:false, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:false, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:false, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
                {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                 avatar:DiscoveryScreenIcons.avatar},
            ],
            videos : [
                [{like:true, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn0},
                {like:false, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn12}],
                [{like:false, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.video},
                {like:true, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn7}],
                [{like:true, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn2},
                {like:false, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn4}],
                [{like:true, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn5},
                {like:false, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn3}],
                [{like:true, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn011},
                {like:false, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn9}],
                [{like:true, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.video},
                {like:false, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn6}],
                [{like:true, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn7},
                {like:false, username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
                avatar:DiscoveryScreenIcons.avatar, image:DiscoveryScreenIcons.tn10}],
            ],
            sounds : [
                {cover:DiscoveryScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover:DiscoveryScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover:DiscoveryScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover:DiscoveryScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover:DiscoveryScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
                {cover:DiscoveryScreenIcons.album, title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
            ],
            hashtags : [
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
                {name: "zoandmat", viewNumber:"12.0K"},
            ],
        }
    }
    tabNames = [
        "Top",
        "Users",
        "Videos",
        "Sounds",
        "Hashtags",
    ]
    renderTab = tn => {
        // console.log(tn)
        // console.log(this.state.tab)
        return(
            <View 
                style={this.state.tab == tn.index ? DiscoverScreenStyles.highlightedTab:DiscoverScreenStyles.fadedTab}>
                <Pressable 
                    onPress={() => this.setState({tab:tn.index})}>
                    <Text
                        style={this.state.tab == tn.index ? DiscoverScreenStyles.highlightedTabName:DiscoverScreenStyles.fadedTabName}>
                        {tn.item}
                    </Text>
                </Pressable>
            </View>
        )
    }
    setTab = (e) => {
        this.setState({
            tab:e
        })
    }
    topTab = () => {
        console.log(this.props)

        return(
            <View>
                <TopTrends
                    goToGifList = {this.props.goToGifList}
                    setTab = {this.setTab}
                    layout = {["user", "videos", "hashtags", "videos", "sounds", "videos"]}
                    user={{username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
                            avatar:DiscoveryScreenIcons.avatar,
                            list: [{likes:12, liked:true, new:true, cover:DiscoveryScreenIcons.tn0},
                            {likes:12, liked:true, new:true, cover:DiscoveryScreenIcons.video},
                            {likes:12, liked:true, new:true, cover:DiscoveryScreenIcons.tn6},
                            {likes:12, liked:true, new:true, cover:DiscoveryScreenIcons.tn11},
                            {likes:12, liked:true, new:true, cover:DiscoveryScreenIcons.tn8},
                            {likes:12, liked:false, new:true, cover:DiscoveryScreenIcons.tn12},
                            {likes:12, liked:false, new:true, cover:DiscoveryScreenIcons.tn3},
                            {likes:12, liked:false, new:true, cover:DiscoveryScreenIcons.tn9},
                            {likes:12, liked:false, new:true, cover:DiscoveryScreenIcons.video},
                            {likes:12, liked:false, new:true, cover:DiscoveryScreenIcons.tn11}]}}
                    users={this.state.users}
                    sounds={this.state.sounds}
                    videos={this.state.videos}
                    hashtags={this.state.hashtags}/>
            </View>
        )
    }
    usersTab = () => {
        return(
            <View>
                {/* <Text>Users</Text> */}
                <UserList 
                    goToGifList = {this.props.goToGifList}
                    users = {this.state.users}/>
            </View>
        )
    }
    videosTab = () => {
        return(
            <View>
                {/* <Text>videos</Text> */}
                <VideoList videos = {this.state.videos}/>
            </View>
        )
    }
    // goToGifList = () => {
    //     this.props.navigation.push('GifList')
    // }
    soundsTab = () => {
        return(
            <View>
                {/* <Text>sounds</Text> */}
                
                <SoundList 
                    sounds={this.state.sounds}
                    goToGifList = {this.props.goToGifList}/>
            </View>
        )
    }
    hashtagsTab = () => {
        return(
            <View>
                {/* <Text>hashtags</Text> */}
                <HashtagList 
                    hashtags={this.state.hashtags}
                    goToGifList = {this.props.goToGifList}/>

            </View>
        )
    }
    render(){
        // console.log(this.state.tab)
        return(
            <View>
                <ScrollView>
                    
                </ScrollView>
                <FlatList
                    style={DiscoverScreenStyles.tabList}
                    data={this.tabNames}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem = {tn =>this.renderTab(tn)}/>
                <ScrollView style={{marginBottom:60}}>
                    <View>
                    {
                        this.state.tab == DiscoveryTabId.top? this.topTab():
                        this.state.tab == DiscoveryTabId.users? this.usersTab():
                        this.state.tab == DiscoveryTabId.videos? this.videosTab():
                        this.state.tab == DiscoveryTabId.sounds? this.soundsTab():
                        this.hashtagsTab()
                    }
                    </View>
                </ScrollView>
                
                
            </View>
        )
    }
}