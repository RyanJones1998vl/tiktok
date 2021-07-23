import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import { SizedImage } from '../screens/main';
export const FONT = {
    rationBodyOverWhole: 180/230,
    rationBodyOverUpperSpace: 180/86,
    rationBodyOverLowerSpace: 180/14,
};
const SIZERATIO = 462/252
// const SIZERATIO = 2
export const DiscoveryScreenIcons ={
    c0:require('../resources/images/commercial.jpg'),
    c2:require('../resources/images/commercial3.jpg'),
    c3:require('../resources/images/commercial2.jpg'),
    c1:require('../resources/images/commercial1.jpg'),
    tn0:require('../resources/images/tn.jpeg'),
    tn1:require('../resources/images/tn1.jpg'),
    tn2:require('../resources/images/tn2.jpg'),
    tn3:require('../resources/images/tn3.jpg'),
    tn4:require('../resources/images/tn5.jpg'),
    tn5:require('../resources/images/tn5.jpeg'),
    tn6:require('../resources/images/tn6.jpg'),
    tn7:require('../resources/images/tn7.jpeg'),
    tn8:require('../resources/images/tn5.jpg'),
    tn9:require('../resources/images/tn8.jpeg'),
    tn10:require('../resources/images/tn9.jpeg'),
    tn11:require('../resources/images/tn10.jpg'),
    tn12:require('../resources/images/tn11.jpg'),
    tn13:require('../resources/images/tn12.jpeg'),
    hashtag:require('../resources/images/hashtag.png'),
    sound:require('../resources/images/note.png'),
    filter:require('../resources/images/filter.png'),
    rightArrow:require('../resources/images/arrow_next.png'),
    pointingUpArrow:require('../resources/main/white_heart.png'),
    inputDeletion:require('../resources/main/white_heart.png'),
    scan:require('../resources/images/scan.png'),
    search:require('../resources/images/find.png'),
    white_heart:require('../resources/main/white_heart.png'),
    sharing:require('../resources/main/sharing.png'),
    report:require('../resources/main/report.png'),
    addFriend:require('../resources/images/add_account.png'),
    back:require('../resources/images/back.png'),
    more:require('../resources/images/dots.png'),
    bell:require('../resources/main/sharing.png'),
    favorite:require('../resources/images/favorite.png'),
    uploaded:require('../resources/main/sharing.png'),
    liked:require('../resources/main/sharing.png'),
    private:require('../resources/main/sharing.png'),
    clock:require('../resources/images/clock.png'),
    x:require('../resources/images/x.png'),
    inputDeletion:require('../resources/images/no.png'),
    pointingUpArrow:require('../resources/images/up.png'),
    avatar:require('../resources/images/avatar.jpg'),
    tick:require('../resources/images/tick.png'),
    sort:require('../resources/images/download.png'),
    video:require('../resources/images/video.jpeg'),
    emptyHeart:require('../resources/images/empty_heart.png'),
    redHeart:require('../resources/images/red_heart.png'),
    play:require('../resources/images/play.png'),
    album:require('../resources/images/album.jpg'),
    share:require('../resources/images/share.png'),
    down:require('../resources/images/down.png'),
}
export const DiscoveryIconId = {
    hashtag:1,
    filter: 2,
    sound: 3,
}
export const DiscoveryViewId = {
    trendList:1,
    History:2,
    SearchResult: 3,
}
export const DiscoveryTabId = {
    top :0,
    users:1,
    videos:2,
    sounds:3,
    hashtag:4,
}
export const DiscoveryGifListType = {
    hashtag: 0,
    sound: 1,
}
export const MainScreenIcons = {
    redHeart:require('../resources/images/red_heart.png'),

    comment:require('../resources/main/comment.png'),
    white_heart:require('../resources/main/white_heart.png'),
    sharing:require('../resources/main/sharing.png'),
    report:require('../resources/main/report.png'),
    video:require('../resources/images/video.jpeg'),
    add:require('../resources/images/add.png'),
    x:require('../resources/images/x.png'),
    avatar:require('../resources/images/avatar.jpg'),
    emoji:require('../resources/images/avatar.jpg'),
    a:require('../resources/images/avatar.jpg'),
    emptyHeart:require('../resources/images/empty_heart.png'),
    link:require('../resources/main/link.png'),
    zalo:require('../resources/main/zalo.png'),
    messenger:require('../resources/main/messenger.png'),
    sms:require('../resources/main/sms.png'),
    saving:require('../resources/main/saving.png'),
    block:require('../resources/main/block.png'),
    duet:require('../resources/main/dueting.png'),
    finding:require('../resources/main/finding.png'),
    whiteHome:require('../resources/images/white_home.png'),
    grayHome:require('../resources/images/gray_home.png'),
    grayFinding:require('../resources/images/gray_finding.png'),
    blackFinding:require('../resources/images/finding.png'),
    whiteInbox:require('../resources/images/white_inbox.png'),
    blackFinding:require('../resources/images/finding.png'),
    finding:require('../resources/main/finding.png'),
    grayInbox:require('../resources/images/gray_inbox.png'),
    grayAccount:require('../resources/main/gray_account.png'),
    tiktok:require('../resources/main/adding.png'),
    music:require('../resources/images/note.png'),
    blackAccount:require('../resources/images/account_selected.png'),

}
export const MeScreenIcons = {
    scan:require('../resources/images/scan.png'),
    hashtag:require('../resources/images/hashtag.png'),
    album:require('../resources/images/album.jpg'),

    qaIcon:require('../resources/main/comment.png'),
    uploaded:require('../resources/main/white_heart.png'),
    liked:require('../resources/main/sharing.png'),
    private:require('../resources/main/report.png'),
    play:require('../resources/main/report.png'),
    back:require('../resources/images/back.png'),
    search:require('../resources/images/find.png'),
    addFriend:require('../resources/images/add_account.png'),

    dots:require('../resources/images/white_dots.png'),
    video:require('../resources/images/video.jpeg'),
    play: require('../resources/images/play.png'),
    lock: require('../resources/images/lock.png'),
    white_lock: require('../resources/images/white_lock.png'),
    eye: require('../resources/images/no_eye.png'),
    white_eye: require('../resources/images/white_no_eye.png'),
    list: require('../resources/images/list.png'),
    white_list: require('../resources/images/white_list.png'),
    graySearch:require('../resources/images/gray_finding.png'),
    avatar:require('../resources/images/avatar.jpg'),
    tick:require('../resources/images/tick.png'),
    bell:require('../resources/images/bell.png'),
    ringingBell:require('../resources/images/ringing_bell.png'),
    disabledBell:require('../resources/images/no_bell.png'),
    tiktok:require('../resources/main/message.png'),
    contacts:require('../resources/main/sms.png'),
    facebook:require('../resources/main/messenger.png'),
    inputDeletion:require('../resources/images/no.png'),
    more:require('../resources/images/dots.png'),
    favorite:require('../resources/images/favorite.png'),
    down:require('../resources/images/down.png'),
    account:require('../resources/images/account_selected.png'),

}
export const MeTypeOfNotification={
    all:0,
    suitable:1,
    disabled:2,
}
export const MeFriendTabs={
    following:0,
    follower:1,
    suggested:2,
}
export const MeVideoTabs={
    public:0,
    like:1,
    private:2
}
export const MeFavouriteTabs = {
    videos:0,
    hashtags:1,
    sounds:2,
    effects:3
}

export const MeScreenStyles = StyleSheet.create({
    
    // accountFollowed
    followingItem:{
        height:144/SIZERATIO,
        width:720/SIZERATIO,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    accountAvatar:{
        marginLeft:32/SIZERATIO,
        width:112/SIZERATIO,
        height:112/SIZERATIO,
        borderRadius:56/SIZERATIO,
        marginRight:24/SIZERATIO,
    },
    nameLine:{
        // backgroundColor:"#FB0",
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10/SIZERATIO,
        
    },
    friendName:{
        // // backgroundColor:"#0F0",
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        fontWeight:'bold',
        marginRight:10/SIZERATIO,
    },
    blueSticker:{
        height:22/SIZERATIO,
        width:22/SIZERATIO,
    },  
    username:{
        fontSize: 16/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    followingButton:{
        width:172/SIZERATIO,
        height:60/SIZERATIO,
        borderWidth:2/SIZERATIO,
        borderRadius:4/SIZERATIO,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderColor:"#161922",

    },
    followingText:{
        marginTop:-3/SIZERATIO,
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    followButton:{
        width:172/SIZERATIO,
        height:60/SIZERATIO,
        backgroundColor:'#FE2B54',
        borderRadius:4/SIZERATIO,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',

    },
    followText:{
        marginTop:-3/SIZERATIO,
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"white",
    }, 
    bellIcon:{
        height:40/SIZERATIO,
        width:40/SIZERATIO,
        marginHorizontal:28/SIZERATIO,
    },

    friendTabBar:{
        flexDirection:'row',
        paddingHorizontal:39/SIZERATIO,
        justifyContent:'space-around',
    },
    friendTabBarSection:{
        height:80/SIZERATIO,
        paddingHorizontal:26/SIZERATIO,
        borderBottomWidth:4/SIZERATIO,
        alignItems:'center',
        flexDirection:'row',
    },
    friendTabBarText:{
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",

    },
    searchField:{
        // backgroundColor:"#0FF",
        marginLeft:32/SIZERATIO,
        marginTop:24/SIZERATIO,
        width:656/SIZERATIO,
        height:63/SIZERATIO,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:18/SIZERATIO,
        borderRadius:6/SIZERATIO,
    },
    searchIcon:{
        height:30/SIZERATIO,
        width:30/SIZERATIO,
        marginRight:18/SIZERATIO,
    },
    searchInput:{
        // backgroundColor:"#B73",
        // paddingTop:1/SIZERATIO,
        // marginTop:10/SIZERATIO,
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",
        
    },

    //find friend

    findBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:36/SIZERATIO,
        height:104/SIZERATIO,
    },
    findBarBack:{
        height:36/SIZERATIO,
        width:36/SIZERATIO,
    },
    findBarTitle:{
        fontSize: 25/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",
        fontWeight:'bold'
    },
    findBarScan:{
        height:36/SIZERATIO,
        width:36/SIZERATIO,
    },
    searchFriendAreaShort:{
        marginTop:24/SIZERATIO,
        marginLeft:32/SIZERATIO,
        height:65/SIZERATIO,
        width:531/SIZERATIO,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#F1F1F1",
        marginBottom:25/SIZERATIO,

    },
    deletionIcon:{
        marginRight:14/SIZERATIO,
        width:38/SIZERATIO,
        height:38/SIZERATIO,

    },
    searchFriendArea:{
        marginTop:24/SIZERATIO,
        marginLeft:32/SIZERATIO,
        height:65/SIZERATIO,
        width:655/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#F1F1F1",
        marginBottom:25/SIZERATIO,

    },
    searchFriendAreaIcon:{
        marginHorizontal:18/SIZERATIO,
        height:29/SIZERATIO,
        width:29/SIZERATIO,
    },
    searchFriendAreaInput:{
        fontSize:22/SIZERATIO,
        // paddingTop:23/SIZERATIO,
        width:590/SIZERATIO,
        color:"#8A8B8D",
    },
    cancleText:{
        marginRight:34/SIZERATIO,
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    //find friend items
    contactItem:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:"center",
        height:144/SIZERATIO,
    },
    contactIcon:{
        borderRadius:108/SIZERATIO*2,
        height:113/SIZERATIO,
        width:113/SIZERATIO,
        marginLeft:34/SIZERATIO,
        marginRight:28/SIZERATIO,
    },
    contactTitle:{
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        fontWeight:'bold',
        marginBottom:2/SIZERATIO,
    },
    contactDescription:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",
        width:214/SIZERATIO,
        marginBottom:-2/SIZERATIO,

    },
    findButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:240/SIZERATIO,
        height:57/SIZERATIO,
        borderRadius:6/SIZERATIO,
        backgroundColor:"#FE2B54",
        marginRight:32/SIZERATIO,
    },
    findButtonText:{
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"white",
        fontWeight:'bold',
        marginTop:-5/SIZERATIO,
    },
    //favourite
    favouriteTabButtonFocused:{
        paddingHorizontal:26/SIZERATIO,
        borderColor:"#161922",
        borderBottomWidth:4/SIZERATIO,
        height:63/SIZERATIO,
    },
    hashtagImageView:{
        backgroundColor:"#8B8A8F",
        height:128/SIZERATIO,
        width:128/SIZERATIO,
        borderRadius:3/SIZERATIO,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginRight:24/SIZERATIO,
        marginLeft:32/SIZERATIO,
        marginVertical:20/SIZERATIO,
    },
    hashtagImage:{
        height:36/SIZERATIO,
        width:40/SIZERATIO,
    },
    hashtagTextView:{

    },
    hashtagTitle:{
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        marginBottom:3/SIZERATIO,
        color:"#161922",
        fontWeight:'bold',
    },
    hashtagView:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8B8A8F",
    },
    soundMoreIcon:{
        marginRight:20/SIZERATIO,
        marginBottom:60/SIZERATIO,
        width:38/SIZERATIO,
        height:30/SIZERATIO,
    },
    soundItem:{
        flexDirection:'row', justifyContent:'space-between', alignItems:'center',
        paddingVertical:8/(SIZERATIO*2),
    },
    soundTextView:{
        // backgroundColor:"#F5C",
        width: 534/SIZERATIO,
        flexDirection:'row',
        marginTop:40/SIZERATIO,
        justifyContent:'space-between',
        alignItems:'flex-end',
        // marginTop:30/SIZERATIO,
    },
    soundImageView:{
        marginLeft:32/SIZERATIO,
        marginTop:16/SIZERATIO,
        flexDirection:'column', 
        alignItems:'center'
    },
    soundImage:{
        // backgroundColor:"#96C",
        height:128/SIZERATIO,
        width:128/SIZERATIO,
        // marginRight:24/SIZERATIO,
    },
    soundButton:{
        marginTop:-80/SIZERATIO,
        // marginLeft:46/SIZERATIO,
        // backgroundColor:"#7CF",
        height:36/SIZERATIO,
        width:36/SIZERATIO,
    },
    effectImageView:{
        marginLeft:32/SIZERATIO,
        marginTop:16/SIZERATIO,
        height:144/SIZERATIO,
        width:144/SIZERATIO,
        flexDirection:'column', 
        alignItems:'center',
        justifyContent:'center'
    },
    effectImage:{
        // backgroundColor:"#96C",
        height:128/SIZERATIO,
        width:128/SIZERATIO,
        borderRadius:15/SIZERATIO,
        // marginRight:24/SIZERATIO,
    },
    effectName:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",
        fontWeight:'bold',
        marginBottom:25/SIZERATIO,
    },
    effectCreator:{
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",

        marginBottom:24/SIZERATIO,
    },
    effectTime:{
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",


    },
    effectMoreIcon:{
        marginRight:20/SIZERATIO,
        marginBottom:50/SIZERATIO,
        width:38/SIZERATIO,
        height:30/SIZERATIO,
    },
    effectItem:{
        flexDirection:'row', justifyContent:'space-between', alignItems:'center',
        // paddingVertical:8/(SIZERATIO*2),
    },
    // friend
    userTabBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        height:63/SIZERATIO,
        paddingHorizontal:39/SIZERATIO,
        borderBottomWidth:1/SIZERATIO,
        borderBottomColor:"#8B8A8F",
    },
    userTabBarButtonFocused:{
        paddingHorizontal:26/SIZERATIO,
        borderColor:"#161922",
        borderBottomWidth:4/SIZERATIO,
        height:63/SIZERATIO,

    },
    userTabBarButton:{
        paddingHorizontal:26/SIZERATIO,
        
        height:63/SIZERATIO,
    },
    userTabBarTitleFocused:{
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",
    },
    userTabBarTitle:{
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8B8A8F",
    },
    // search area
    searchArea:{
        marginTop:24/SIZERATIO,
        marginLeft:32/SIZERATIO,
        height:65/SIZERATIO,
        width:655/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#F1F1F1",
    },
    searchAreaIcon:{
        marginHorizontal:18/SIZERATIO,
        height:29/SIZERATIO,
        width:29/SIZERATIO,
    },
    searchAreaInput:{
        fontSize:22/SIZERATIO,
        paddingTop:23/SIZERATIO,
        width:590/SIZERATIO,
    },
    friendFunctionBar:{
        // backgroundColor:"#CCF",
        height:104/SIZERATIO,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:12/SIZERATIO,
    },
    friendHeader:{
        
        borderBottomColor:'black',
        borderBottomWidth:1/SIZERATIO,
    },
    //function bar

    functionBar:{
        // backgroundColor:"#CCF",
        height:104/SIZERATIO,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'black',
        borderBottomWidth:1/SIZERATIO,
    },
    leftFunctionIcon:{
        width:36/SIZERATIO,
        height:36/SIZERATIO,
        marginLeft:28/SIZERATIO,
    },
    usernameOnBar:{
        fontSize: 24/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",

    },
    rightFunctionIcon:{
        marginRight:26/SIZERATIO,
        height:41/SIZERATIO,
        width:41/SIZERATIO,
    },
    // information panel
    informationPanel:{
        // backgroundColor:"#B73",
        width:720/SIZERATIO,
        alignItems:'center',
        paddingBottom:44/SIZERATIO,
    },
    avatar:{
        marginTop:34/SIZERATIO,
        height:188/SIZERATIO,
        width:188/SIZERATIO,
        borderRadius:94/SIZERATIO,
    },
    name:{
        marginTop:48/SIZERATIO,
        fontSize: 26/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",

    },
    statisticBar:{
        marginTop:34/SIZERATIO,
        marginBottom:34/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
    },
    statisticNumber:{
        fontSize: 23/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",

    },
    statisticSection:{
        width:176/SIZERATIO,
        alignItems:'center',
    },
    verticalBar:{
        // backgroundColor:"#0FF",
        height:32/SIZERATIO,
        width:1/SIZERATIO,
    },
    statisticTitle:{
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8B8A8F",

    },
    bigButton:{
        borderWidth:1/SIZERATIO,
        borderColor:'#8B8A8F',
        // backgroundColor:'red',
        height:90/SIZERATIO,
        width:330/SIZERATIO,
        right:8/SIZERATIO,
        alignItems:'center',
        justifyContent:'center',
        // marginRight:8/SIZERATIO,

    },
    normalButton:{
        borderWidth:1/SIZERATIO,
        borderColor:'#8B8A8F',
        // backgroundColor:'red',
        height:90/SIZERATIO,
        width:234/SIZERATIO,
        right:8/SIZERATIO,
        alignItems:'center',
        justifyContent:'center',

    },
    bigRedButton:{
        backgroundColor:'#FE2B54',
        height:90/SIZERATIO,
        width:330/SIZERATIO,
        right:8/SIZERATIO,
        alignItems:'center',
        justifyContent:'center',
        // marginRight:8/SIZERATIO,

    },
    buttonText:{
        fontSize: 23/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",
    },
    buttonRedText:{
        fontSize: 23/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"white",
    },
    smallButton:{
        borderWidth:1/SIZERATIO,
        borderColor:"#8B8A8F",
        height:90/SIZERATIO,
        width:88/SIZERATIO,
        alignItems:'center',
        justifyContent:'center',
        marginRight:8/SIZERATIO,

    },
    buttonIcon:{
        height:40/SIZERATIO,
        width:40/SIZERATIO,
        
    },
    qaSection:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:55/SIZERATIO,
    },
    qaText:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",
        marginTop:10/SIZERATIO,
    },
    descriptionText:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'normal',
        color:"#161922",
        marginTop:10/SIZERATIO,
    },
    boldDescriptionText:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",
        marginTop:10/SIZERATIO,
    },
    qaIcon:{
        height:27/SIZERATIO,
        width:27/SIZERATIO,
        marginRight:12/SIZERATIO,
    },
    tabIcon:{
        height:34/SIZERATIO,
        width:40/SIZERATIO,
    },
    tabButtonFocused:{
        justifyContent:'center',
        borderBottomWidth:4/SIZERATIO,
        borderColor:"#161922",
        height:78/SIZERATIO,
        paddingHorizontal:26/SIZERATIO,
        justifyContent:"center",
        alignItems:'center',
    },
    tabButton:{
        justifyContent:'center',
        height:78/SIZERATIO,
        paddingHorizontal:26/SIZERATIO,
        justifyContent:"center",
        alignItems:'center',
    },
    tabBar:{
        // backgroundColor:"#70F",
        height:80/SIZERATIO,
        width:720/SIZERATIO,
        flexDirection:'row',
        justifyContent:'space-around',
        borderTopWidth:1/SIZERATIO,
        borderBottomWidth:1/SIZERATIO,
        marginBottom:2/SIZERATIO,
    },

    //video item
    videoItem:{
        // backgroundColor:"#F70",
        width:238/SIZERATIO,
        height:319/SIZERATIO,
        marginBottom:2/SIZERATIO,
        // marginTop:-119/SIZERATIO,
    },  
    video:{
        width:238/SIZERATIO,
        height:319/SIZERATIO,
    },
    viewSection:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:-40/SIZERATIO,
    },
    playIcon:{
        width:20/SIZERATIO,
        height:24/SIZERATIO,
        marginLeft:16/SIZERATIO,
        marginRight:10/SIZERATIO
    },
    viewText:{
        fontSize: 17/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"white",

    },
    // scrollview:{
    //     marginTop:400/SIZERATIO,
    // }
})
export const DiscoverScreenStyles = StyleSheet.create({
    disdiscoverScreen:{

    },
    discoverScreenContent:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height-150/SIZERATIO,
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    seeMoreIcon:{
        width:14/SIZERATIO,
        height:21/SIZERATIO,
        marginRight: 32/SIZERATIO,

    },
    seeMoreText:{
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",
    },
    headers:{
        fontSize: 23/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",
        marginLeft: 32/SIZERATIO,
        marginTop:22/SIZERATIO,
    },

    trendingSection:{   
        // backgroundColor: "#123",
    },
    upperTrendingSection:{
        flexDirection:'row',
        // backgroundColor: "#234",
        alignItems:'center',
        height:129/SIZERATIO,
        marginLeft:32/SIZERATIO,
        marginBottom:8/SIZERATIO,

    },
    leftUpperTrendingSection:{
        // backgroundColor:"#FDE",
        justifyContent:'space-between', 
        flexDirection:'row', 
        width:592/SIZERATIO,
        marginLeft:16/SIZERATIO,

    },
    lowerTrendingSection:{
        // backgroundColor: "#345",

    },
    upperMiddleColumn:{
        // backgroundColor: "#456",
    },
    upperRightColumn:{
        // backgroundColor: "#678",

    },
    shortGif:{
        // backgroundColor: "#789",
        alignItems:'center',
        justifyContent:'center',
        height: 266/SIZERATIO,
        width:200/SIZERATIO,
        marginRight: -28/SIZERATIO,
        marginLeft:32/SIZERATIO,
        marginBottom:34/SIZERATIO,
    },
    tapToNext:{
        // backgroundColor: "#789",
        alignItems:'center',
        justifyContent:'center',
        height: 266/SIZERATIO,
        width:200/SIZERATIO,
        marginLeft:32/SIZERATIO,
        marginBottom:34/SIZERATIO,
    },
    tapToNextText:{
        textAlign:'center',
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    hashtagIconView:{
        borderColor:"#e8e8e8",
        borderWidth:3/SIZERATIO,
        borderRadius:65/(SIZERATIO*2),
        width:65/SIZERATIO,
        height:65/SIZERATIO,
        alignItems:'center',
        justifyContent:'center',
    },
    hashtagIcon:{
        // backgroundColor: "#89A",
        width:28/SIZERATIO,
        height:28/SIZERATIO,
    },
    title:{
        // backgroundColor: "#ABC",
        fontSize: 23/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",
        marginBottom:8/SIZERATIO,
    },
    descriptionText:{
        // backgroundColor: "#CEF",
        fontSize: 16/(SIZERATIO*FONT.rationBodyOverWhole),
        fontFamily:"futura",
        color:"#8B8A8F",

    },
    numberBadge:{
        backgroundColor: "#f1f1f1",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:40/SIZERATIO,
        borderRadius:6/SIZERATIO,
        marginTop:5/SIZERATIO,
        marginRight:17/SIZERATIO,
        paddingHorizontal:10/SIZERATIO,
    },
    numberText:{
        // backgroundColor: "#3BC",
        color:"#161922",

        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        marginRight:11/SIZERATIO,
    },
    rightArrow:{
        marginTop:3/SIZERATIO,
        width:10/SIZERATIO,
        height:16/SIZERATIO,
    },

    //Image Slider 
    imageBox: {
        // backgroundColor:"#ADC",
        justifyContent: 'center',
        alignItems: 'center',
        height: 344/SIZERATIO,
        width: 720/SIZERATIO,
    },
    Slider: {
        height: 344/SIZERATIO,
        width: 720/SIZERATIO,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
        // marginTop: 15/SIZERATIO,
    },
    adImage:{
        height: 344/SIZERATIO,
        width: 720/SIZERATIO,
    },
    dotContainer: {
        // backgroundColor: 'transparent',
        position: 'absolute',
        bottom: -15,
    },
    // tabs 
    tabList:{
        paddingHorizontal:32/SIZERATIO,
        borderBottomColor:"#8A8B8D",
        borderBottomWidth:1/SIZERATIO,
    },
    highlightedTab:{
        height: 81/SIZERATIO,
        paddingHorizontal:24/SIZERATIO,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:"#161922",
        borderBottomWidth: 2/SIZERATIO,
        marginHorizontal:8/SIZERATIO,
    },
    fadedTab:{
        height: 81/SIZERATIO,
        paddingHorizontal:24/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:8/SIZERATIO,

    },
    highlightedTabName:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",
        fontWeight:'600',
    },
    fadedTabName:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",
        fontWeight:'600',

    },
    // Search bar
    searchBar:{
        backgroundColor:"#FFFFFF",
        paddingVertical:15/SIZERATIO,
        height:103/SIZERATIO,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    searchInput:{
        // backgroundColor:"#C72",
        backgroundColor:"#F1F1F1",
        flexDirection:'row',
        alignItems:'center',
        height:72/SIZERATIO,
        width:460/SIZERATIO,
        // paddingLeft:16/SIZERATIO,
        // marginLeft:32/SIZERATIO,
        borderRadius:6/SIZERATIO,
    },
    longSearchInput:{
        backgroundColor:"#F1F1F1",
        flexDirection:'row',
        alignItems:'center',
        height:72/SIZERATIO,
        width:512/SIZERATIO,
        // paddingLeft:16/SIZERATIO,
        // marginLeft:32/SIZERATIO,
        borderRadius:3/SIZERATIO,
    },
    trendingSearch:{
        // backgroundColor:"#0FF",
        color:"#8b8c90",
        width:340/SIZERATIO,
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    longTrendingSearch:{
        // backgroundColor:"#0FF",
        color:"#8b8c90",
        width:440/SIZERATIO,
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    searchIcon:{
        height:38/SIZERATIO,
        width:38/SIZERATIO,
        marginLeft:16/SIZERATIO,
        marginRight:18/SIZERATIO,
    },
    scanIcon:{
        marginRight:41/SIZERATIO,
        height:36/SIZERATIO,
        width:36/SIZERATIO,
    },
    inputDeletion: {
        width:37/SIZERATIO,
        height:37/SIZERATIO,
        marginRight:13/SIZERATIO,
    },
    inputDeletionLong: {
        width:37/SIZERATIO,
        height:37/SIZERATIO,
        marginLeft:-50/SIZERATIO,
    },
    leftIcon:{
        width:37/SIZERATIO,
        height:37/SIZERATIO,
        marginLeft:40/SIZERATIO,
        marginRight:28/SIZERATIO,
    },
    searchText:{
        color:"#F34E6E",
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        
        marginRight:22/SIZERATIO,
    },
    // Search history
    historyView:{
        backgroundColor:"#FFFFFF",
    },
    historyHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:82/SIZERATIO,
        
    },
    headerTitle:{
        marginLeft:34/SIZERATIO,
        fontSize: 24/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        fontWeight:'bold',
    },
    clearAllText:{
        marginRight:34/SIZERATIO,
        color:"#8B8A8F",

    },
    historyItem:{
        // backgroundColor:"#CFF",
        height: 96/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:34/SIZERATIO,
    },
    rightHistoryItemPart:{
        // backgroundColor:"#FFC",
        justifyContent:'space-between', 
        width:593/SIZERATIO, 
        flexDirection:'row'
    },
    clockIcon:{
        width:30/SIZERATIO,
        height:30/SIZERATIO,
        marginRight:22/SIZERATIO,
    },
    deletingIcon:{
        width:22/SIZERATIO,
        height:22/SIZERATIO,
        marginTop:9/SIZERATIO,
    },
    historyItemText:{
        fontSize: 24/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },

    // search result 
    resultView:{

    },
    resultItem:{
        // backgroundColor:"#CFF",
        height: 97/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:34/SIZERATIO,
    },
    rightResultItemPart:{
        // backgroundColor:"#FFC",
        justifyContent:'space-between', 
        alignItems:'center',
        width:593/SIZERATIO, 
        flexDirection:'row'
    },
    resultSearchIcon:{
        width:30/SIZERATIO,
        height:30/SIZERATIO,
        marginRight:22/SIZERATIO,
    },
    pointingUpArrow:{
        width:22/SIZERATIO,
        height:22/SIZERATIO,
        marginTop:9/SIZERATIO,
    },
    tickIcon:{
        marginTop:6/SIZERATIO,
        width:22/SIZERATIO,
        height:22/SIZERATIO,
    },
    resultAvatar:{
        borderRadius:73/SIZERATIO*2,
        width:73/SIZERATIO,
        height:73/SIZERATIO,
        marginRight: 46/SIZERATIO,
    },
    resultItemText:{
        fontSize: 24/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    // rightResultItemPart:{
    //     flexDirection:'row',
    //     justifyContent:'space-between',
    // },

    // gif list
    gifListFunctionBar :{
        // backgroundColor:"#007FFF",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:104/SIZERATIO,
        paddingHorizontal:34/SIZERATIO,
    },
    backIcon:{
        width:38/SIZERATIO,
        height:38/SIZERATIO,
    },
    shareIcon:{
        width:38/SIZERATIO,
        height:38/SIZERATIO,
    },
    trendTitle:{
        fontSize: 24/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    gifListHeader:{
        // backgroundColor:"#7FFF00",
        paddingTop:12/SIZERATIO,
        paddingHorizontal:32/SIZERATIO,
        marginBottom:52/SIZERATIO,
    },
    upperGifListHeader:{
        // backgroundColor:"#FFF700",
        flexDirection:'row',
        marginBottom:32/SIZERATIO,
    },
    trendImage:{
        // backgroundColor:"#0FF",
        width:240/SIZERATIO,
        height:240/SIZERATIO,
        marginRight:32/SIZERATIO,
    },
    trendIconView:{
        backgroundColor:"#F8F8F8",
        borderColor:"#DEDEDE",
        borderRadius:2/SIZERATIO,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1/SIZERATIO,
        width:240/SIZERATIO,
        height:240/SIZERATIO,
        marginRight:32/SIZERATIO,
    },
    trendIcon:{
        width:116/SIZERATIO,
        height:116/SIZERATIO,
    },
    trendName:{ 
        fontSize: 28/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        marginBottom:24/SIZERATIO,

    },
    viewNumber:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",

    },
    addToFavouriteIcon:{
        height:28/SIZERATIO,
        width:24/SIZERATIO,
        marginRight:16/SIZERATIO,
    },
    addToFavouriteText:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    addToFavouriteBadge:{
        borderColor:"#DEDEDE",
        borderWidth:1/SIZERATIO,
        borderRadius:2/SIZERATIO,
        height:58/SIZERATIO,
        paddingHorizontal:26/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:6/SIZERATIO,
    },
    trendDiscription:{
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    collapseExpandText:{
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        marginRight:9/SIZERATIO,
    },
    collapseExpandIcon:{
        width:18/SIZERATIO,
        height:14/SIZERATIO,
    },
    gifList:{
        backgroundColor:"#ffffff",
    },
    gifRow:{
        // backgroundColor:"#FFBF00",
        height:317/SIZERATIO,
        width:239/SIZERATIO,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:SIZERATIO/SIZERATIO,
    },
    gifItem:{
        flexDirection:'column',
        marginRight:SIZERATIO/SIZERATIO,
    },
    officialBadge:{
        backgroundColor:"#FE2B54",
        height:42/SIZERATIO,
        width:100/SIZERATIO,
        borderRadius:6/SIZERATIO,
        marginTop:-306/SIZERATIO,
        marginLeft:11/SIZERATIO,
        alignItems:'center',

    },
    officialText:{
        paddingTop:4/SIZERATIO,
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    gif:{
        // backgroundColor:"#EE82EE",
        height:317/SIZERATIO,
        width:239/SIZERATIO,
    },

    //hastag item
    hastagItem:{
        height: 99/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal: 32/SIZERATIO,
    },
    hastagItemIconView:{
        // backgroundColor:"#CF0",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
        borderColor:"#8A8B8D",
        borderWidth:2/SIZERATIO,
        borderRadius:58/SIZERATIO*2,
        width:58/SIZERATIO,
        height:58/SIZERATIO,
        marginRight: 24/SIZERATIO,
    },
    hastagItemIcon:{
        // backgroundColor:"#CF0",
        width:22/SIZERATIO,
        height:22/SIZERATIO,
        // marginRight: 24/SIZERATIO,
    },
    hastagItemName:{
        // backgroundColor:"#FF7",
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    hastagItemNumber:{
        // backgroundColor:"#666",
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    hashtagList:{
        marginTop:14/SIZERATIO,
    },
    rightHashtagPart:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:574/SIZERATIO
    },

    //sound item
    soundItem:{
        height:168/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:32/SIZERATIO,
    },
    soundImage:{
        // backgroundColor:"#96C",
        height:128/SIZERATIO,
        width:128/SIZERATIO,
        marginRight:24/SIZERATIO,
    },
    soundButton:{
        marginTop:-80/SIZERATIO,
        // marginLeft:46/SIZERATIO,
        // backgroundColor:"#7CF",
        height:36/SIZERATIO,
        width:36/SIZERATIO,
    },
    soundRightPart:{
        // backgroundColor:"#F5C",
        width: 504/SIZERATIO,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        marginTop:30/SIZERATIO,
    },
    soundName:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        fontWeight:'bold',
        marginBottom:4/SIZERATIO,
    },
    soundCreator:{
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",

        marginBottom:12/SIZERATIO,
    },
    soundTime:{
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",


    },
    soundNumber:{
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",

    }, 
    soundList:{
        marginTop:10/SIZERATIO,
    },

    // video list
    videoRow:{
        // backgroundColor:"#CFC",
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16/SIZERATIO,
        paddingTop: 20/SIZERATIO,
        marginBottom:3/SIZERATIO,
    },
    videoItem:{
        // backgroundColor:"#0F0",
        width:336/SIZERATIO,
        height:695/SIZERATIO,
    },
    videoImage:{
        // backgroundColor:"#0CC",
        width:336/SIZERATIO,
        height:538/SIZERATIO,
    },
    videoDate:{
        // backgroundColor:"#FF0",
        marginLeft:16/SIZERATIO,
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"white",

        fontWeight:'bold',
        marginTop:-48/SIZERATIO,
    },
    videoDescription:{
        // backgroundColor:"#C72",
        marginTop:33/SIZERATIO,
        marginBottom:10/SIZERATIO,
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        marginHorizontal:20/SIZERATIO,
        height:72/SIZERATIO,
        lineHeight:36/SIZERATIO,
    },
    videoUserSection:{
        // backgroundColor:"#0FF",
        marginLeft:20/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
    },
    videoAvatar:{
        borderRadius:40/SIZERATIO*2,
        height:40/SIZERATIO,
        width:40/SIZERATIO,
    },
    videoUsername:{
        marginLeft:10/SIZERATIO,
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",

    },
    videoHeartSection:{
        // backgroundColor:"#0FF",
        marginRight:20/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
    },
    videoHeart:{
        height:22/SIZERATIO,
        width:24/SIZERATIO,
        marginRight:11/SIZERATIO,
    },
    videoNumber:{
        fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",

    },
    
    // user list
    userList:{
        paddingTop:16/SIZERATIO,
    },
    userItem:{
        flexDirection:'row',
        height:152/SIZERATIO,
        alignItems:'center',
    },
    userAvatar:{
        borderRadius:108/SIZERATIO*2,
        height:108/SIZERATIO,
        width:108/SIZERATIO,
        marginLeft:34/SIZERATIO,
        marginRight:28/SIZERATIO,
    },
    userName:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        fontWeight:'bold',
        marginBottom:2/SIZERATIO,
    },
    userUsername:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",

        marginBottom:-2/SIZERATIO,

    },
    userFollowers:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",

    },
    userVideos:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",


    },
    userFollowing:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8D",

    },
    // userVideo
    userVideoItem:{
        marginRight:16/SIZERATIO,
        width:242/SIZERATIO,
        height:323/SIZERATIO,
        flexDirection:'column',
    },
    userVideo:{
        width:242/SIZERATIO,
        height:323/SIZERATIO,
        borderRadius:6/SIZERATIO,
    },
    newBadge:{
        width:68/SIZERATIO,
        height:34/SIZERATIO,
        borderRadius:6/SIZERATIO,
        justifyContent:'center',
        alignItems:'center',  
        backgroundColor:"#8A8B8D",
        marginLeft:-234/SIZERATIO,
        marginTop:8/SIZERATIO,
    },
    newText:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"white",

    },
    userVideoLikeSection:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:24/SIZERATIO,
        marginTop:-44/SIZERATIO,
    },
    userVideoLikeIcon:{
        width:23/SIZERATIO,
        height:21/SIZERATIO,
        marginRight:5/SIZERATIO,

    },
    userVideoLikeText:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"white",
    }
})
export const MainScreenStyles = StyleSheet.create ({
    back:{
        // flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal:45/SIZERATIO,
        paddingVertical:45/SIZERATIO,
        height:104/SIZERATIO,
        marginLeft:-Dimensions.get("window").width,

    },
    videoContent:{
        // marginTop:-104/SIZERATIO,
        width:Dimensions.get("window").width,
    },
    videoInList:{
        borderTopWidth:1/SIZERATIO,
        borderTopColor:"#BFBFBF",
        flexDirection:'row',
        height:Dimensions.get("window").height-72/SIZERATIO,
    },
    videos:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height-150/SIZERATIO,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    tabBar:{
        width:Dimensions.get("window").width,
        height:116/SIZERATIO,
        // marginTop:-116/SIZERATIO,    
        backgroundColor:"black",
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderTopColor:"#BFBFBF",
        borderTopWidth:1/SIZERATIO,
    },
    whiteTabBar:{
        width:Dimensions.get("window").width,
        height:116/SIZERATIO,
        // marginTop:-116/SIZERATIO,    
        backgroundColor:"white",
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderTopColor:"#BFBFBF",
        borderTopWidth:1/SIZERATIO,
    },
    tabButton:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:100/SIZERATIO,
        height:116/SIZERATIO,
    },
    tabIcon:{
        width:48/SIZERATIO,
        height:44/SIZERATIO,
        marginBottom:11/SIZERATIO,

    },
    tabWhiteTextFocused:{
        fontSize: 15/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"white",
    },
    tabText:{
        fontSize: 15/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#BFBFBF",
    },
    blackTabText:{
        fontSize: 15/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",
    },
    tiktokIcon:{
        width:88/SIZERATIO,
        height:58/SIZERATIO,
    },
    sharingModal:{
        backgroundColor:'white',
        borderRadius:15/SIZERATIO,
        marginBottom:40/SIZERATIO,
    },
    sharingModalTile:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#161922",
    },
    sharingModalCancle:{
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        fontWeight:'bold',
        color:"#8A8B8F",
    },
    emptySpace:{
        opacity:0.5,
        height:Dimensions.get("window").height/5,
        width:Dimensions.get("window").width,
        backgroundColor:'pink',
    },
    commentSection:{
        height:Dimensions.get("window").height*4/5,
        width:Dimensions.get("window").width,
        marginLeft:-Dimensions.get("window").width,
        backgroundColor:'white',
        borderTopLeftRadius:10/SIZERATIO,
        borderTopRightRadius:10/SIZERATIO,
        justifyContent:'space-between',
    },
    commentSectionHeader:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        marginVertical:29/SIZERATIO,
        fontWeight:'bold',
        color:"#161922",
    },
    xIcon:{
        height:24/SIZERATIO,
        width:24/SIZERATIO,
        marginHorizontal:36/SIZERATIO,
    },
    avatarInComment:{
      height:66/SIZERATIO,
      width:66/SIZERATIO,
      borderRadius:33/SIZERATIO,
      marginLeft:23/SIZERATIO,
      marginRight:15/SIZERATIO, 
        marginBottom:40/SIZERATIO,
 
    },
    commentList:{
        height:Dimensions.get("window").height*4/5-250/SIZERATIO,
    },  
    bottomCommentSection:{
        // marginBottom:10/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        borderTopColor:"#f1f1f1",
        borderTopWidth:1/SIZERATIO,
        height:150/SIZERATIO,
    },
    inputSection:{
        marginVertical:16/SIZERATIO,
        backgroundColor:"#f1f1f1",
        borderRadius:10/SIZERATIO,
        paddingHorizontal:16/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:592/SIZERATIO,
        marginBottom:65/SIZERATIO,
    },
    emojiIcon:{
        height:46/SIZERATIO,
        width:46/SIZERATIO,
        marginLeft:31/SIZERATIO,
    },
    aIcon:{
        height:46/SIZERATIO,
        width:46/SIZERATIO,
        marginLeft:31/SIZERATIO,
    },
    input:{
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        
        color:"#161922",
    },
    backgroundVideo:{
      height:Dimensions.get('window').height,
      width:Dimensions.get('window').width,
        backgroundColor:"green",
    },
    bottomSection:{
        flexDirection:'row',
        height:850/SIZERATIO,
        marginTop:-925/SIZERATIO,
        justifyContent:'space-between',
        alignItems:'flex-end',
        // backgroundColor:'pink'
    },
    bottomSectionLiftedUp:{
        flexDirection:'row',
        height:850/SIZERATIO,
        marginTop:-900/SIZERATIO -72/SIZERATIO,
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    diskView:{
        marginTop:90/SIZERATIO,
        flexDirection:'column',
        alignItems:'center',
    },
    diskBorder:{
        borderRadius:50/SIZERATIO,
        width:100/SIZERATIO,
        height:100/SIZERATIO,
    },
    diskImage:{
        marginTop:-78/SIZERATIO,
        borderRadius:28/SIZERATIO,
        width:56/SIZERATIO,
        height:56/SIZERATIO,
    },
    rightBottom:{
        marginRight:30/SIZERATIO,
    },
    leftBottom:{
        marginLeft:30/SIZERATIO,
        // marginBottom:-20/SIZERATIO,
    },
    leftBottomPanel:{
        // pink
        // backgroundColor:"#EE82EE",
        width: 460/SIZERATIO,
    },
    accountName :{
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        marginTop: (-19/FONT.rationBodyOverUpperSpace)/SIZERATIO,
        fontWeight:'bold',
        color: 'white',
        paddingBottom: 20/SIZERATIO,
    },
    descriptiveText:{
        // backgroundColor:"#7FFF00",
        flexDirection: "row",
        alignItems:'center',
        flexWrap:'wrap',
        marginBottom: 33/SIZERATIO,
        marginTop:25/SIZERATIO,
        width:500/SIZERATIO,
    },
    avatarView:{
        flexDirection:'column',
        alignItems:"center",
        marginBottom:30/SIZERATIO,
    },
    avatarBorder:{
        height:98/SIZERATIO,
        width:98/SIZERATIO,
        borderRadius:49/SIZERATIO,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',
    },
    avatarImage:{
        height:92/SIZERATIO,
        width:92/SIZERATIO,
        borderRadius:46/SIZERATIO,
    },
    add:{
        height:40/SIZERATIO,
        width:40/SIZERATIO,
        marginTop:-20/SIZERATIO,
    },
    account:{
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"white",

        fontWeight:'bold',
        color: 'white',
    },
    highlightedTrend:{
        // backgroundColor: "#73716F",
        // flexDirection: "row",
        // alignItems:'center',
        // opacity:0.9,
        // borderRadius: 3,
        // paddingHorizontal: 10/SIZERATIO,
        // height: 34/SIZERATIO,
        // marginTop: 6/SIZERATIO,

        flexDirection: "column",
        alignItems:'center',
        marginHorizontal:5/SIZERATIO,
        height: 30/SIZERATIO,

    },
    highlightedTrendText:{
        color:"#FFC700",
        fontWeight:'bold',
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),

        marginTop: (-10/FONT.rationBodyOverUpperSpace)/SIZERATIO,
        
    },
    highlightedTrendIcon:{
        height: 22/SIZERATIO
    },
    normalDescriptiveText:{
        // backgroundColor: "#FFA500",
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        marginTop: (-12/FONT.rationBodyOverUpperSpace)/SIZERATIO,
        color:'#FFF',
        marginBottom:12/SIZERATIO,
    },
    boldDescriptiveText:{
        // backgroundColor: "#0FF",
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

        fontWeight:'bold',
        color:'#FFF',

    },
    accountReference:{
        // backgroundColor: "#FF2400",
        flexDirection: "column",
        alignItems:'center',
        marginHorizontal:5/SIZERATIO,
        height: 30/SIZERATIO,
    },
    backgroundAR:{
        backgroundColor:"#BFBFBF",
        opacity:0.5,
        borderRadius: 3,
        height:30/SIZERATIO,
        width:'100%',
    },  
    backgroundHT:{
        backgroundColor:"#BFBFBF",
        opacity:0.5,
        borderRadius: 3,
        height:30/SIZERATIO,
        width:'100%',
    },
    accountReferenceText:{
        color:"#FFF",
        fontWeight:'bold',
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"white",
        paddingHorizontal: 10/SIZERATIO,
        
        marginTop: (-10/FONT.rationBodyOverUpperSpace)/SIZERATIO,
    },
    ARText:{
        marginTop:-33/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 5/SIZERATIO,

    },
    HTText:{
        marginTop:-33/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 10/SIZERATIO,

    },
    accountReferenceIcon:{
        height: 22/SIZERATIO

    },
    soundTitle:{
        marginLeft:30/SIZERATIO,
        flexDirection: "row",
        alignItems:'center',
    },
    soundTitleIcon:{
        height:30/SIZERATIO,
        right:30/SIZERATIO,
        marginRight: 26/SIZERATIO,
    },
    soundTitleText:{
        fontSize: 21/(SIZERATIO*FONT.rationBodyOverWhole),
        width:310/SIZERATIO,
        color:"white",
    },
    IWT_text:{
      // red 
      // // backgroundColor: "#FF0000",
      fontSize: 18/(SIZERATIO*FONT.rationBodyOverWhole),
      marginTop: (14-18/FONT.rationBodyOverUpperSpace)/SIZERATIO,
      fontWeight:'bold',
      color:"white",
    },
    IWT_icon:{
      // yellow
      // // backgroundColor: "#000",
      // width: 72/SIZERATIO,
      // height: 80/SIZERATIO,
      width: 72/SIZERATIO,
      height: 60/SIZERATIO,
    },
    IWT_icon_comment:{
      marginBottom: 12/SIZERATIO,
    },
    IWT:{
      // aqua
      // // backgroundColor: "#00FFFF",
      alignItems: 'center',
      width: 80/SIZERATIO,
      height: 110/SIZERATIO,
    },
    IWT_comment:{
      marginBottom: 26/SIZERATIO,
    },
    IWT_heart:{
      marginBottom: 48/SIZERATIO,
    },
    rightBar:{
        // backgroundColor:"#000",
        width: 80/SIZERATIO,
        marginBottom:20/SIZERATIO,
    },
    bottomBorder:{
        borderBottomColor: 'black',
        borderBottomWidth: 3/4,
    },
    topBorder:{
        borderTopColor: 'black',
        borderTopWidth: 3/4,
    },
    effectOptionList:{
        height:202/SIZERATIO,
        marginLeft:30/SIZERATIO,
        // backgroundColor:"#7FFF00",
    },
    effectOption:{
        // backgroundColor:"#EE82EE",
        marginRight:42/SIZERATIO,
        marginTop:24/SIZERATIO,
        height:166/SIZERATIO,
        width:98/SIZERATIO,
        justifyContent:'center',
    },
    effectOptionIcon:{
        width: 96/SIZERATIO,
        height: 96/SIZERATIO,
        marginLeft:24/SIZERATIO,
        marginBottom:6/SIZERATIO,
    },
    accountOptionIcon:{
        width: 96/SIZERATIO,
        height: 96/SIZERATIO,
        marginLeft:24/SIZERATIO,
        marginBottom:6/SIZERATIO,
        borderRadius:48/SIZERATIO,
    },
    effectOptionText:{
        // backgroundColor:"#00FFFF",
        fontSize: 16/(SIZERATIO*FONT.rationBodyOverWhole),
        marginTop: (14-18/FONT.rationBodyOverUpperSpace)/SIZERATIO,
        height:60/SIZERATIO,
        fontWeight:"100",
        color:"#8A8B8F",
        textAlign:'center',
    },
    textInSharingModal:{
        paddingTop:20/SIZERATIO,
        alignItems:'center',
    },
    cancelInSharingModal:{
        alignItems:'center',
        justifyContent:'center',
        height:105/SIZERATIO,
        // backgroundColor:"#BFFF00",
    },
    followHeader:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:50/SIZERATIO,
        marginTop:40/SIZERATIO,  
        marginLeft:-Dimensions.get("window").width,
        width:Dimensions.get("window").width,
    },
    followTextFocused:{
        marginHorizontal:22/SIZERATIO,
        fontWeight:'bold',
        fontSize: 28/(SIZERATIO*FONT.rationBodyOverWhole),
        color:'white',
    },
    followText:{
        marginHorizontal:22/SIZERATIO,
        marginTop:3/SIZERATIO,
        fontSize: 25/(SIZERATIO*FONT.rationBodyOverWhole),
        color:'white',
    },
    videoList:{
        marginTop:-80/SIZERATIO,
    },
    // Comment Modal 
    commentModalHeader:{
        // backgroundColor:"#00FF7F",
        height: 76/SIZERATIO,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    closingButton:{
        height:24/SIZERATIO,
        width:24/SIZERATIO,
        marginRight:36/SIZERATIO,
    },
    commentModal:{

    },
    commentNumber:{
        marginLeft:36,
        fontWeight:'bold',
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    viewMoreText:{
        marginTop:5/SIZERATIO,
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8F",
    },
    hideText:{
        marginLeft:330/SIZERATIO,
        marginTop:5/SIZERATIO,
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8F",
    },
    comment:{
        // backgroundColor:"#FF0",
        marginTop:20/SIZERATIO,
        marginBottom:6/SIZERATIO,
        marginLeft:30/SIZERATIO,
        flexDirection:'row',
    },
    commentAvatar:{
        height:64/SIZERATIO,
        width:64/SIZERATIO,
        borderRadius:64/SIZERATIO*2,
        marginRight:24/SIZERATIO,
    },
    commentHeader:{
        // backgroundColor:"#0FF",
        flexDirection:'row',
        
    },
    commentUsername:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#515256",
        fontWeight:'bold',

    },
    commentCreatorBadge:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#DC0000",
        fontWeight:'bold',
        marginLeft:24/SIZERATIO,
        // marginTop:4/SIZERATIO,
    },
    commentContent:{
        // backgroundColor:"#F0F",
        flexWrap:'wrap',
        fontSize: 22/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",
        marginBottom:10/SIZERATIO,
        marginTop:16/SIZERATIO,
        flexDirection:'row',
        alignItems:'center',
    },
    commentDate:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8F",
        marginRight:19/SIZERATIO,

    },  
    reply:{
        fontSize: 19/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#8A8B8F",
        marginRight:19/SIZERATIO,
        fontWeight:"bold",
    },  
    commentBadge:{
        // backgroundColor: "#FF2400",
        flexDirection: "row",
        alignItems:'center',
        borderRadius: 1,
        backgroundColor:"#f1f1f1",
        width:158/SIZERATIO,
        marginTop:10/SIZERATIO,
    },
    commentBadgeText:{
        // backgroundColor: "#123456",
        fontSize: 15/(SIZERATIO*FONT.rationBodyOverWhole),

        flexDirection: "row",
        color:'#8A8B8F',
        alignItems:'center',
        borderRadius: 3,
        paddingHorizontal:10/SIZERATIO,
    },
    commentMiddleColumn:{
        width:500/SIZERATIO,
        marginRight:28/SIZERATIO,
        // backgroundColor:"green",
    },  
    commentMiddleColumnSub:{
        width:382/SIZERATIO,
        marginRight:28/SIZERATIO,
        // backgroundColor:"pink",
        
    }, 
    commentRightColumn:{
        alignItems:'center',
    }, 
    commentHeartIcon:{
        height:32/SIZERATIO,
        width:32/SIZERATIO,

    },
    commentHearts:{
        fontSize: 20/(SIZERATIO*FONT.rationBodyOverWhole),
        color:"#161922",

    },
    commentFooter:{
        // backgroundColor:"#0f0"
    },
    commentSectionBar:{
        flexDirection:'row', alignItems:'center', justifyContent:'space-between',
        height:100/SIZERATIO,
        // backgroundColor:'pink',
    }
})