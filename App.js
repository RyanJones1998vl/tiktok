import React from 'react';
import { FlatList, Image, View, Text,Button, StyleSheet, TouchableHighlight, TouchableHighlightBase, ScrollView, Keyboard, Pressable, TextInput } from 'react-native';

import {Me} from './screens/me/Me'
import {Friend} from './screens/me/Friend'
import { FindFriend } from './screens/me/FindFriend';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  {GifList} from './screens/discovery/gif_list';
import { Favourite } from './screens/me/Favourite';
import  {DiscoveryMainScreen} from './screens/discovery/screens/main';
import  {SearchScreen} from './screens/discovery/screens/search_screen';
import { MyVideo, MyVideos, ViewingVideo } from './screens/main/video';
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

// const stack = createStackNavigator(
//     {
//         Main:{
//             screen:DiscoveryMainScreen,
//             navigationOptions: {
//                 header: null,
//             }
//         },
//         History: {
//             screen:SearchScreen,
//             navigationOptions: {
//                 header: null,
//               }
        
//         },
//         GifList : {
//             screen: GifList,
//             navigationOptions:{
//                 header:null,
//             }
//         },
//     },
//     {
//         initialRouteName:'Main',
//     }
// )
// // const Stack = createStackNavigator();
// const AppContainer = createAppContainer(stack)

// class App extends React.Component{
    
//     render(){
//         return(
//             <AppContainer style={{backgroundColor:"#FFFFFF"}}/>
//             // <View>
                
//             // </View>
//         )
        
//     }
// }

// // const AppContainer = createAppContainer(stack)

// // class App extends React.Component{
    
// //     render(){
// //         return(
// //             <AppContainer/>
// //             // <View>
                
// //             // </View>
// //         )
        
// //     }
// // }

const stack = createStackNavigator(
    {
        Me:{
            screen:Me,
            navigationOptions: {
                header: null,
            }
        },
        Friend: {
            screen:Friend,
            navigationOptions: {
                header: null,
              }
        
        },
        FindFriend : {
            screen: FindFriend,
            navigationOptions:{
                header:null,
            }
        },
        Favourite:{
            screen:Favourite,
            navigationOptions:{
                header:null,
            }
        },
        Discovery:{
            screen:DiscoveryMainScreen,
            navigationOptions: {
                header: null,
            }
        },
        History: {
            screen:SearchScreen,
            navigationOptions: {
                header: null,
              }
        
        },
        GifList : {
            screen: GifList,
            navigationOptions:{
                header:null,
            }
        },
        MyVideos:{
            screen: MyVideos,
            navigationOptions:{
                header:null,
            }
        },
        MyVideo:{
            screen: ViewingVideo,
            navigationOptions:{
                header:null,
            }
        },
    },
    {
        initialRouteName:'Discovery',
    }
)
// const Stack = createStackNavigator();
const AppContainer = createAppContainer(stack)

class App extends React.Component{
    
    render(){
        return(
            <AppContainer style={{backgroundColor:"#FFFFFF"}}/>
        )
        
    }
}
export default App;