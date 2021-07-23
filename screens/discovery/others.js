import React from 'react';
import { FlatList, Image, View, Text, StyleSheet, TouchableHighlight, TouchableHighlightBase, ScrollView, Pressable } from 'react-native';
import  {DiscoverScreenStyles, 
        DiscoveryScreenIcons,
        DiscoveryTabId,
        MainScreenIcons} 
        from '../../resources/constant'

import {AutoScrollFlatList} from 'react-native-autoscroll-flatlist'
import {SizedImage} from '../main/index' 
const renderHashtag = (h, f) => {
    // console.log(h)
    return (
        <Pressable 
            style={DiscoverScreenStyles.hastagItem}
            onPress = {() => f('GifList', 
                                    {trend:h.item.name,
                                    number:h.item.viewNumber,
                                    forHashtag:true})} >
            <View style={DiscoverScreenStyles.hastagItemIconView}>
                <SizedImage
                    style={DiscoverScreenStyles.hastagItemIcon}
                    source={DiscoveryScreenIcons.hashtag}/>
            </View>
            
            <View style={DiscoverScreenStyles.rightHashtagPart}>
                <Text style={DiscoverScreenStyles.hastagItemName}>{h.item.name}</Text>
                <Text style={DiscoverScreenStyles.hastagItemNumber}>{h.item.viewNumber} views</Text>
            </View>
        </Pressable>
    )
}
const hashTags = [
    {name: "zoandmat", viewNumber:"12.0K"},
    {name: "zoandmat", viewNumber:"12.0K"},
    {name: "zoandmat", viewNumber:"12.0K"},
    {name: "zoandmat", viewNumber:"12.0K"},
    {name: "zoandmat", viewNumber:"12.0K"},
    {name: "zoandmat", viewNumber:"12.0K"},
]
export const HashtagList = (props) => {
    // console.log(props)
    
    return(
        <View>
            <FlatList
                data={props.hashtags}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {h=>renderHashtag(h, props.goToGifList)}
                style={DiscoverScreenStyles.hashtagList}/>
        </View>
    )
    
}
const renderSound = (s, f) => {
    return (
        <View style={DiscoverScreenStyles.soundItem}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                <SizedImage 
                    style={DiscoverScreenStyles.soundImage}
                    source={s.item.cover}/>
                <SizedImage 
                    style={DiscoverScreenStyles.soundButton}
                    source={DiscoveryScreenIcons.play}/>
            </View>
            
            <Pressable 
                onPress = {() => f('GifList', 
                                    {trend:s.item.title,
                                    number:s.item.number,
                                    creator:s.item.creator,
                                    forHashtag:false})}
                style={DiscoverScreenStyles.soundRightPart}>
                <View>
                    <Text style={DiscoverScreenStyles.soundName}>{s.item.title}</Text>
                    <Text style={DiscoverScreenStyles.soundCreator}>{s.item.creator}</Text>
                    <Text style={DiscoverScreenStyles.soundTime}>{s.item.time}</Text>
                </View>
                <Text style={DiscoverScreenStyles.soundNumber}>{s.item.number}</Text>
            </Pressable>
        </View>
    )
}
const sounds = [
    {title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
    {title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
    {title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
    {title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
    {title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
    {title: "zoandmat", number:"12.0K", creator:"abc", time: "00 : 12"},
]
export const SoundList = (props) => {
    // console.log(hashTags)
    console.log(props)
    return(
        <View>
            <FlatList
                data={props.sounds}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {s=>renderSound(s, props.goToGifList)}
                style={DiscoverScreenStyles.soundList}/>
        </View>
    )
    
}
const renderVideo = (v, f) => {
    // console.log(v)
    return (
        <View style={DiscoverScreenStyles.videoRow}>
            <Pressable 
                onPress = {() => f('MyVideo', 
                    {video:v.item[0].image
                    })}
                style={DiscoverScreenStyles.videoItem}>
                <View>
                    <Image
                        style={DiscoverScreenStyles.videoImage}
                        source={v.item[0].image}/>
                    <Text style={DiscoverScreenStyles.videoDate}>{v.item[0].date}</Text>
                </View>
                <Text style={DiscoverScreenStyles.videoDescription}>{v.item[0].description}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={DiscoverScreenStyles.videoUserSection}>
                        <Image
                            style={DiscoverScreenStyles.videoAvatar}
                            source={v.item[0].avatar}/>
                        <Text style={DiscoverScreenStyles.videoUsername}>{v.item[0].username}</Text>
                    </View>
                    <View style={DiscoverScreenStyles.videoHeartSection}>
                        <Image 
                            style={DiscoverScreenStyles.videoHeart}
                            source={v.item[0].like? DiscoveryScreenIcons.redHeart: DiscoveryScreenIcons.emptyHeart}/>
                        <Text style={DiscoverScreenStyles.viewNumber}>{v.item[0].number}</Text>
                    </View>
                </View>
            </Pressable>
            <Pressable 
            onPress = {() => f('MyVideo', 
            {video:v.item[0].image
            })}
            style={DiscoverScreenStyles.videoItem}>
                <View>
                    <Image
                        style={DiscoverScreenStyles.videoImage}
                        source={v.item[1].image}/>
                    <Text style={DiscoverScreenStyles.videoDate}>{v.item[1].date}</Text>
                </View>
                <Text style={DiscoverScreenStyles.videoDescription}>{v.item[1].description}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={DiscoverScreenStyles.videoUserSection}>
                        <Image
                            style={DiscoverScreenStyles.videoAvatar}
                            source={v.item[1].avatar}/>
                        <Text style={DiscoverScreenStyles.videoUsername}>{v.item[1].username}</Text>
                    </View>
                    <View style={DiscoverScreenStyles.videoHeartSection}>
                        <Image 
                            style={DiscoverScreenStyles.videoHeart}
                            source={v.item[1].like? DiscoveryScreenIcons.redHeart: DiscoveryScreenIcons.emptyHeart}/>
                        <Text style={DiscoverScreenStyles.viewNumber}>{v.item[1].number}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
        
    )
}
const videos = [
    [{username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
    avatar:DiscoveryScreenIcons.white_heart, image:DiscoveryScreenIcons.tn0},
    {username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
    avatar:DiscoveryScreenIcons.white_heart, image:DiscoveryScreenIcons.tn3}],
    [{username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
    avatar:DiscoveryScreenIcons.white_heart, image:DiscoveryScreenIcons.tn12},
    {username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
    avatar:DiscoveryScreenIcons.white_heart, image:DiscoveryScreenIcons.tn7}],
    [{username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
    avatar:DiscoveryScreenIcons.white_heart, image:DiscoveryScreenIcons.tn8},
    {username: "zoandmat", number:"12.0K", description:"I like it I like itI like itI like itI like it", date: "2020-18-12", 
    avatar:DiscoveryScreenIcons.white_heart, image:DiscoveryScreenIcons.tn9}],
]
export const VideoList = (props) => {
    // console.log(videos)
    
    return(
        <View>  
            <FlatList
                data={props.videos}
                renderItem={ v => renderVideo(v, props.goToVideo)}
                style={DiscoverScreenStyles.videoList}
                />
            
        </View>
    )
    
}
const renderUser = (u, f) => {
    // console.log(u)
    return (
        <Pressable 
            onPress = {() => f('Me', 
                        {username:u.item.username,
                        notMe:false,
                        followed:u.item.follow
                        })}
            style={DiscoverScreenStyles.userItem}>
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
        </Pressable>
        
    )
}
const users = [
    {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:false, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:false, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:false, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
    {username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
     avatar:DiscoveryScreenIcons.white_heart},
]
export const UserList = (props) => {
    // console.log(videos)
    
    return(
        <View>  
            <FlatList
                data={props.users}
                renderItem={ v => renderUser(v, props.goToGifList)}
                style={DiscoverScreenStyles.userList}
                />
            
        </View>
    )
    
}

const renderUserVideo = (u, f) => {
    // console.log(u)
    return (
        <View style={DiscoverScreenStyles.userVideoItem}>
            <Pressable 
                onPress={() => f('MyVideo', 
                {video:u.item.cover
                })}
                style={{flexDirection:'row'}}>
                
                <Image 
                    source={u.item.cover}
                    style={DiscoverScreenStyles.userVideo}/>
                {u.item.new &&
                    <View style={DiscoverScreenStyles.newBadge}>
                        <Text style={DiscoverScreenStyles.newText}>New</Text>
                    </View>
                }
            </Pressable>
            <View style={DiscoverScreenStyles.userVideoLikeSection}>
                <Image
                    style={DiscoverScreenStyles.userVideoLikeIcon}
                    source={u.item.liked?DiscoveryScreenIcons.redHeart:DiscoveryScreenIcons.emptyHeart}/>
                <Text style={DiscoverScreenStyles.userVideoLikeText}>{u.item.likes}</Text>
            </View>
        </View>
        
    )
}
export const TopTrends = (props) => {
    var videoCount = 0
    const getVideos = () => {
        videoCount += 2
        return props.videos.slice(videoCount - 2, videoCount)
    }
    return(
        <ScrollView>
            {
                props.layout.map((key, id)=>{
                    // console.log(key)
                    if (key=="user")
                    return(
                        <View>  
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={DiscoverScreenStyles.headers}>User</Text>
                                <Pressable 
                                    // onPress ={() =>props.setTab(DiscoveryTabId.users)}
                                    onPress = {() => props.goToGifList('Me', 
                                                    {username:props.username,
                                                    notMe:false,
                                                    followed:props.user.follow
                                                    })}
                                    style={{flexDirection:"row", alignItems:"center"}}>
                                    <Text style={DiscoverScreenStyles.seeMoreText}>See more </Text>
                                    <SizedImage
                                        source={DiscoveryScreenIcons.rightArrow}
                                        style={DiscoverScreenStyles.seeMoreIcon}/>
                                </Pressable>
                            </View>   
                            <Pressable
                                onPress = {() => props.goToGifList('Me', 
                                                    {username:props.username,
                                                    notMe:false,
                                                    followed:props.user.follow
                                                    })}
                                style={DiscoverScreenStyles.userItem}>
                                <Image
                                    style={DiscoverScreenStyles.userAvatar}
                                    source={props.user.avatar}/>
                                <View>
                                    <Text style={DiscoverScreenStyles.userName}>{props.user.name}</Text>
                                    <Text style={DiscoverScreenStyles.userUsername}>{props.user.username}</Text>
                                    {
                                        props.user.follow?
                                        <Text style={DiscoverScreenStyles.userFollowing}>Following</Text>:
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={DiscoverScreenStyles.userFollowers}>{props.user.followers} followers   </Text>
                                            <Text style={DiscoverScreenStyles.userVideo}>{props.user.videos} videos</Text>
                                        </View>
                                    }
                                </View>
                            </Pressable>
                            <FlatList
                                data={props.user.list}
                                renderItem={ v => renderUserVideo(v, props.goToGifList)}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                // style={DiscoverScreenStyles.videoList}
                                />
                        </View>
                    )
                    else if (key=="users")
                    return(
                        <View>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={DiscoverScreenStyles.headers}>Users</Text>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Text style={DiscoverScreenStyles.seeMoreText}>See more </Text>
                                    <SizedImage
                                        source={DiscoveryScreenIcons.rightArrow}
                                        style={DiscoverScreenStyles.seeMoreIcon}/>
                                </View>
                            </View>   
                            <FlatList

                                data={props.users.slice(0, 3)}
                                renderItem={ v => renderUser(v, props.goToGifList)}
                                style={DiscoverScreenStyles.userList}/>                     
                        </View>
                    )
                    else if(key=="videos")
                    return(
                        <View>
                            <Text style={DiscoverScreenStyles.headers}>Videos</Text>
                            <FlatList
                                data={getVideos()}
                                renderItem={ v => renderVideo(v, props.goToGifList)}
                                style={DiscoverScreenStyles.videoList}/>
                        </View>
                    )
                    else if(key=="hashtags")
                    return(
                        <View>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={DiscoverScreenStyles.headers}>Hashtags</Text>
                                <Pressable 
                                    onPress ={() =>props.setTab(DiscoveryTabId.hashtag)}
                                    style={{flexDirection:"row", alignItems:"center"}}>
                                    <Text>See more </Text>
                                    <SizedImage
                                        source={DiscoveryScreenIcons.rightArrow}
                                        style={DiscoverScreenStyles.seeMoreIcon}/>
                                </Pressable>
                            </View>                            
                            <FlatList
                                data={props.hashtags.slice(0, 3)}
                                renderItem = {s=>renderHashtag(s, props.goToGifList)}
                                style={DiscoverScreenStyles.hashtagList}/>
                        </View>
                    )
                    else if(key=="sounds")
                    return(
                        <View>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={DiscoverScreenStyles.headers}>Sounds</Text>
                                <Pressable
                                    onPress ={() =>props.setTab(DiscoveryTabId.sounds)}
                                    style={{flexDirection:"row", alignItems:"center"}}>
                                    <Text>See more </Text>
                                    <SizedImage
                                        source={DiscoveryScreenIcons.rightArrow}
                                        style={DiscoverScreenStyles.seeMoreIcon}/>
                                </Pressable>
                            </View>
                            <FlatList
                                data={props.sounds.slice(0, 3)}
                                renderItem = {s=>renderSound(s, props.goToGifList)}
                                style={DiscoverScreenStyles.soundList}/>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
// export default Userlist;
// const renderUserVideo = (u) => {
//     console.log(u)
//     return (
//         <View style={DiscoverScreenStyles.userVideoItem}>
//             <View style={{flexDirection:'row'}}>
//                 <Image style={DiscoverScreenStyles.userVideo}/>
//                 {u.item.new &&
//                     <View style={DiscoverScreenStyles.newBadge}>
//                         <Text style={DiscoverScreenStyles.newText}>New</Text>
//                     </View>
//                 }
//             </View>
//             <View style={DiscoverScreenStyles.userVideoLikeSection}>
//                 <Image
//                     style={DiscoverScreenStyles.userVideoLikeIcon}
//                     source={u.item.liked?DiscoveryScreenIcons.sharing:DiscoveryScreenIcons.white_heart}/>
//                 <Text style={DiscoverScreenStyles.userVideoLikeText}>{u.item.likes}</Text>
//             </View>
//         </View>
        
//     )
// }
// const userVideos = [
//     {userVideo:DiscoveryScreenIcons.white_heart, liked:true, likes: 143, new:true},
//     {userVideo:DiscoveryScreenIcons.white_heart, liked:false, likes: 143, new:false},
//     {userVideo:DiscoveryScreenIcons.white_heart, liked:true, likes: 143, new:true},
//     {userVideo:DiscoveryScreenIcons.white_heart, liked:false, likes: 143, new:false},
//     {userVideo:DiscoveryScreenIcons.white_heart, liked:false, likes: 143, new:true},
//     {userVideo:DiscoveryScreenIcons.white_heart, liked:true, likes: 143, new:true},
//     {userVideo:DiscoveryScreenIcons.white_heart, liked:true, likes: 143, new:true},
// ]
// const u = {
//     item:{username: "zoandmat", name:"matt&zo", follow:true, followers:12, videos:54,
//     avatar:DiscoveryScreenIcons.white_heart},
// }
// const App = (props) => {
//     // console.log(videos)
    
//     return(
//         <View>  
//             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
//                 <Text>User</Text>
//                 <Text>See more ></Text>
//             </View>
//             <View style={DiscoverScreenStyles.userItem}>
//                 <Image
//                     style={DiscoverScreenStyles.userAvatar}
//                     source={u.item.avatar}/>
//                 <View>
//                     <Text>{u.item.name}</Text>
//                     <Text>{u.item.username}</Text>
//                     {
//                         u.item.follow?
//                         <Text>Following</Text>:
//                         <View style={{flexDirection:'row'}}>
//                             <Text>{u.item.followers} followers   </Text>
//                             <Text>{u.item.videos} videos</Text>
//                         </View>
//                     }
//                 </View>
//             </View>
//             <FlatList
//                 data={userVideos}
//                 renderItem={ v => renderUserVideo(v)}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//                 // style={DiscoverScreenStyles.videoList}
//                 />
            
//         </View>
//     )
    
// }