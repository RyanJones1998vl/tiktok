import React from "react";
import { DescriptiveText, SoundTitle } from ".";
import { RightBar } from "./right_bar";
import {View, Text, FlatList, Pressable, Dimensions, TextInput, ScrollView, Image} from 'react-native';
import { DiscoveryScreenIcons, MainScreenIcons, MainScreenStyles, MeScreenIcons, MeScreenStyles } from "../../resources/constant";
import { Comment } from "./comment_modal";
import { SharingModal } from "./sharing_modal";
import { IconWithText } from ".";
import { SizedImage } from ".";
export class MyVideo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            openCommentSection:false,
            openSharingSection:false,
            comments:[
                {liked:true,commentAvatar:MainScreenIcons.avatar,content:"Let make friend", date :"Not today", belongToCreator:true, username:'Pretty Long Dragon',likedByCreator:true, hearts:10,
                    subCommentList:[
                        {liked:false, isSubComment:true,commentAvatar:MainScreenIcons.avatar,content:"Let make friend", date :"Not today", belongToCreator:false, username:'Pretty Long Dragon',likedByCreator:true, hearts:10},
                        {liked:true, isSubComment:true,commentAvatar:MainScreenIcons.avatar,content:"Let make friend", date :"Not today", belongToCreator:false, username:'Pretty Long Dragon',likedByCreator:true, hearts:10},
                        {liked:false, isSubComment:true,commentAvatar:MainScreenIcons.avatar,content:"Let make friend", date :"Not today", belongToCreator:false, username:'Pretty Long Dragon',likedByCreator:true, hearts:10},
                        {liked:false, isSubComment:true,commentAvatar:MainScreenIcons.avatar,content:"Let make friend", date :"Not today", belongToCreator:false, username:'Pretty Long Dragon',likedByCreator:true, hearts:10},
                    ]},
                {liked:false,commentAvatar:MainScreenIcons.avatar,content:"Let make friend", date :"Not today", belongToCreator:false, username:'Pretty Long Dragon',likedByCreator:true, hearts:10},
                {liked:true,commentAvatar:MainScreenIcons.avatar,content:"Let make friend", date :"Not today", belongToCreator:true, username:'Pretty Long Dragon',likedByCreator:true, hearts:10},
                {liked:false,commentAvatar:MainScreenIcons.avatar,content:"Let make friend", date :"Not today", belongToCreator:true, username:'Pretty Long Dragon',likedByCreator:false, hearts:10},
                {liked:true,commentAvatar:MainScreenIcons.avatar,content:"Let make friend", date :"Not today", belongToCreator:false, username:'Pretty Long Dragon',likedByCreator:false, hearts:10},
            ],
        }
    }
    likeComment=(id)=>{
        var _comments = this.state.comments
        console.log(_comments)
        console.log(id)
        console.log(_comments[id])
        var l = _comments[id].liked
        _comments[id].liked = !l
        this.setState({
            comments:_comments
        })
        console.log(_comments[id])

    }
    likeSubComment=(cmt, id)=>{
        var _comments = this.state.comments
        console.log(_comments[cmt].subCommentList[id])
        // console.log(id)
        // console.log(_comments[id])
        if(_comments[cmt].subCommentList[id]){
            var l = _comments[cmt].subCommentList[id].liked
            console.log(l)
            _comments[cmt].subCommentList[id].liked= !l
            this.setState({
                comments:_comments
            })
        }
        console.log(_comments[cmt].subCommentList[id])

        // var l = _comments[cmt][id]
        // _comments[cmt][id].liked= !l
        // this.setState({
        //     comments:_comments
        // })
        // console.log(_comments[cmt][id])

    }
    openCommentSection = ()=>{
        this.setState({openCommentSection:true})
    }
    openSharingSection = () => {
        this.setState({openSharingSection:true})
        
    }
    closeSharingModal = () =>{
        this.setState({openSharingSection:false})
        console.log(this.state.openSharingSection)
    }
    renderComment = c =>{
        return(
            <Comment
                isSubComment={false}
                subCommentList={c.item.subCommentList}
                commentAvatar={c.item.commentAvatar}
                belongToCreator={c.item.belongToCreator}
                username={c.item.username}
                likedByCreator={c.item.likedByCreator}
                hearts={c.item.hearts}
                content={c.item.content}
                date={c.item.date}
                liked={c.item.liked}
                likeComment={this.likeComment}
                likeSubComment={this.likeSubComment}
                id = {c.index}/>
        )
    }
    
    render(){
        console.log(this.props)
        return(
            <View 
                style={this.props.inList? MainScreenStyles.videoInList:{flexDirection:'row'}}>
                <View>
                    <Image 
                        source={this.props.video}
                        style={MainScreenStyles.backgroundVideo}>

                    </Image>
                    <View style={this.props.inList? MainScreenStyles.bottomSectionLiftedUp: MainScreenStyles.bottomSection}>
                        <View style={MainScreenStyles.leftBottom}>
                            <Text style={MainScreenStyles.account}>@account</Text>

                            <DescriptiveText
                                text="Hello %hot%hot%trend $sb$account$name$here Is it enought?"/>
                            <SoundTitle
                                text="Super super boring song"/>
                        </View>
                        <View style={MainScreenStyles.rightBottom}>
                            <RightBar
                                // goToUser = {this.props.navigation.push}
                                openCommentSection = {this.openCommentSection}
                                openSharingSection = {this.openSharingSection}
                                likes={5940}
                                comments={this.state.comments.length}
                                shares={188}/>

                        </View>

                    </View>
                </View>
                {
                    this.state.openCommentSection &&
                <View style={{flexDirection:'column', width:Dimensions.get("window").width}}>
                    <View style={MainScreenStyles.emptySpace}>

                    </View>
                    <View style={MainScreenStyles.commentSection}>
                        <View>
                            <View style={MainScreenStyles.commentSectionBar}>
                                <View
                                    style={MainScreenStyles.xIcon}/>
                                <Text style={MainScreenStyles.commentSectionHeader}>{this.state.comments.length} comments</Text>
                                <Pressable
                                    onPress = {()=>this.setState({openCommentSection:false})}>
                                    <SizedImage  
                                        style={MainScreenStyles.xIcon}
                                        source={MainScreenIcons.x}/>
                                </Pressable>
                            </View>
                            <View style={MainScreenStyles.commentList}>
                                <FlatList
                                    data={this.state.comments}
                                    renderItem = {c => this.renderComment(c)}/>
                            </View>
                        </View>
                        
                        <View style={MainScreenStyles.bottomCommentSection}>
                            <SizedImage
                                style={MainScreenStyles.avatarInComment}
                                source = {MainScreenIcons.avatar}/>
                            <View 
                                style={MainScreenStyles.inputSection}>
                                <TextInput
                                    style={MainScreenStyles.input}
                                    placeholder="Add comment"/>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <SizedImage
                                        style={MainScreenStyles.aIcon}
                                        source = {MainScreenIcons.a}/>
                                    <SizedImage
                                        style={MainScreenStyles.emojiIcon}
                                        source = {MainScreenIcons.emoji}/>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                </View>
                }
                {
                    this.state.openSharingSection &&
                    <View style={{flexDirection:'column', 
                                backgroundColor:'black',
                                height:Dimensions.get("window").height,
                                flexDirection:'row',
                                alignItems:'flex-end',
                                justifyContent:'space-between',
                                width:Dimensions.get("window").width,
                                marginLeft:-Dimensions.get("window").width}}>
                        <SharingModal
                            closeModal = {() => this.closeSharingModal}/>

                    </View>
                }
            </View>
            
            
        )
    }
}
export class ViewingVideo extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <View style={MainScreenStyles.videoContent}>
                    <MyVideo
                        video = {this.props.navigation.state.params.video}
                        inList="false"/>
                </View>
                <View style={MainScreenStyles.back}>
                    <Pressable
                        onPress={()=>this.props.navigation.goBack()}>
                        <Image
                            style={MeScreenStyles.findBarBack}
                            source={MeScreenIcons.back}/>
                    </Pressable>
                </View>
            </View>
        )
    }
}
export class MyVideos extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            tabId:1,
        }
    }
    render(){
        return(
            <View>
                <View style={MainScreenStyles.videos}>
                    {this.state.tabId==1?
                    <View style={MainScreenStyles.videoList}>
                        <ScrollView>
                            <MyVideo 
                                video ={DiscoveryScreenIcons.tn0}
                                inList={true}/>
                            <MyVideo 
                                video ={DiscoveryScreenIcons.tn3}
                                inList={true}/>
                            <MyVideo 
                                video ={DiscoveryScreenIcons.tn4}
                                inList={true}/>
                            <MyVideo 
                                video ={DiscoveryScreenIcons.tn9}
                                inList={true}/>
                            <MyVideo 
                                video ={DiscoveryScreenIcons.tn10}
                                inList={true}/>
                        </ScrollView>
                    </View>:
                    <View style={MainScreenStyles.videoList}>
                        <ScrollView>
                            <MyVideo 
                                video = {DiscoveryScreenIcons.tn1} 
                                inList={true}/>
                            <MyVideo 
                                video = {DiscoveryScreenIcons.tn6} 
                                inList={true}/>
                            <MyVideo 
                                video = {DiscoveryScreenIcons.tn8} 
                                inList={true}/>
                            <MyVideo 
                                video = {DiscoveryScreenIcons.tn11} 
                                inList={true}/>
                            <MyVideo 
                                video = {DiscoveryScreenIcons.tn12} 
                                inList={true}/>
                        </ScrollView>
                    </View>
                    }
                    
                    <View style={MainScreenStyles.followHeader}>
                        
                        <Pressable
                            onPress={()=>this.setState({tabId:1})}>
                            <Text style={this.state.tabId==1? MainScreenStyles.followTextFocused:MainScreenStyles.followText}>Following</Text>
                        </Pressable>
                        <Pressable
                            onPress={()=>this.setState({tabId:2})}>
                            
                            <Text style={this.state.tabId==2 ?MainScreenStyles.followTextFocused:MainScreenStyles.followText}>For you</Text>
                        </Pressable>
                    </View>
                    
                </View>
                <View style={MainScreenStyles.tabBar}>
                    <Pressable  
                        style={MainScreenStyles.tabButton}>
                        <SizedImage 
                            source={MainScreenIcons.whiteHome}
                            style={MainScreenStyles.tabIcon}/>
                        <Text style={MainScreenStyles.tabWhiteTextFocused}>Home</Text>
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