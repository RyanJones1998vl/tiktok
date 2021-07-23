/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   PixelRatio,
   FlatList,
   Image,
   Touchable,
   Pressable,
   TouchableHighlight,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import {
   SizedImage,
   }from '../main/index';
 import { 
   FONT,
   MainScreenIcons,
   MainScreenStyles,
   TextStyles
 }  from '../../resources/constant';
 
 
 const comments = [
   {
     source : MainScreenIcons.sharing,
     commentAvatar:MainScreenIcons.report,
     username: "Hello",
     belongToCreator: true,
     content: "I love itI love itI love itI love itI love itI love itI love it",
     date:"6d",
     likedByCreator:true,
     hearts: 100,
     subCommentList:[
       {source : MainScreenIcons.sharing,
         commentAvatar:MainScreenIcons.report,
         username: "Hello",
         belongToCreator: true,
         content: "I love itI love itI love itI love itI love itI love itI love it",
         date:"6d",
         likedByCreator:true,
         hearts: 100,},
       {source : MainScreenIcons.sharing,
         commentAvatar:MainScreenIcons.report,
         username: "Hello",
         belongToCreator: true,
         content: "I love itI love itI love itI love itI love itI love itI love it",
         date:"6d",
         likedByCreator:true,
         hearts: 100,},
       {source : MainScreenIcons.sharing,
         commentAvatar:MainScreenIcons.report,
         username: "Hello",
         belongToCreator: true,
         content: "I love itI love itI love itI love itI love itI love itI love it",
         date:"6d",
         likedByCreator:true,
         hearts: 100,},
         {source : MainScreenIcons.sharing,
           commentAvatar:MainScreenIcons.report,
           username: "Hello",
           belongToCreator: true,
           content: "I love itI love itI love itI love itI love itI love itI love it",
           date:"6d",
           likedByCreator:true,
           hearts: 100,}
     ]
   },
   {
     source : MainScreenIcons.sharing,
     commentAvatar:MainScreenIcons.report,
     username: "Hello",
     belongToCreator: true,
     content: "I love it",
     date:"6d",
     hearts: 100,
   },
   {
     source : MainScreenIcons.sharing,
     commentAvatar:MainScreenIcons.report,
     username: "Hello",
     belongToCreator: true,
     content: "I love it",
     date:"6d",
     hearts: 100,
   },
 ]
 
 class Commentss extends React.Component{
   constructor(props){
     super(props);
     this.state ={
       color:"#F12",
 
     }
   }
   changeColor = () =>{
     if(this.state.color == "#F12"){this.setState({color:"#12F"})}
     else {this.setState({color:"#F12"})}
     // console.log(this.state)
   }
   render(){
     // console.log(this.state)
     return (
       <View 
           onClick={this.changeColor}>
           <TouchableHighlight 
           style={{backgroundColor:this.state.color}}
           onPress={this.changeColor}>
             <Text>HLLLLLLLL</Text>
 
           </TouchableHighlight>
       </View>
     )
     
   }
 }
export class Comment extends React.Component{
   // console.log(props)
   // var subComment = props.subComments? props.subComments.length:0
   // var this.state.subCommentDisplayed = 0
   constructor(props){
     super(props)
     this.state={
       subComment:this.props.subCommentList? this.props.subCommentList.length:0,
       subCommentDisplayed:0,
       subCommentList: this.props.subCommentList?this.props.subCommentList:[],
     }
     console.log(this.state)
   }
 
   showMoreComment = () =>{
     if (this.state.subCommentDisplayed!=this.state.subComment) 
       this.setState({subCommentDisplayed : this.state.subCommentDisplayed+3})
       
     if (this.state.subCommentDisplayed>this.state.subComment) 
       this.setState({subCommentDisplayed: this.state.subComment})
 
     console.log(this.state.subCommentDisplayed)
   }
 
   showLessComment = () =>{
     if(this.state.subCommentDisplayed!=0) this.setState({subCommentDisplayed : this.state.subCommentDisplayed-3})
 
     if(this.state.subCommentDisplayed<0) this.setState({subCommentDisplayed: 0})
 
    //  console.log("subCommentDisplayed")
    //  console.log(this.state.subCommentDisplayed)
 
   }
   subCommentList = () => {
     // console.log(this.state.subCommentDisplayed)
     var subComments = []
     for(var i=0;i<this.state.subCommentDisplayed;i++){
       subComments.push(
       <Comment
         belongToCreator = {e.item.subComment[i].belongToCreator}
         commentAvatar={e.item.subComment[i].commentAvatar}
         hearts={e.item.subComment[i].hearts}
         username={e.item.subComment[i].username}
         content={e.item.subComment[i].content}
         date={e.item.subComment[i].date}   
       />)
     }
     return subComments
   }
   commentView = (e) =>{
     // console.log("Hello")
     // console.log(e.item)
    //  console.log(e)
     return (
       <Comment
        id={e.index}
          isSubComment={true}
          likeSubComment={this.props.likeSubComment}
         belongToCreator = {e.item.belongToCreator}
         commentAvatar={e.item.commentAvatar}
         hearts={e.item.hearts}
         username={e.item.username}
         content={e.item.content}
         date={e.item.date}
         likedByCreator={e.item.likedByCreator}
         subComments = {e.item.subComments}
         belongToComment = {this.props.id}
         liked={e.item.liked}
       />
       //<Text>{e.text} {e.icon}</Text>
     )
   }
   render(){
     // console.log(this.state.subComments)
      // this.props.isSubComment&&console.log(this.props)
     return(
       <View style={MainScreenStyles.comment}>
         <View>
           <Image
               source = {this.props.commentAvatar}
               style={MainScreenStyles.commentAvatar}>
           </Image>
         </View>
         <View>
           
         <View style={{flexDirection:'row'}}>
   
           <View style={this.props.isSubComment?MainScreenStyles.commentMiddleColumnSub:MainScreenStyles.commentMiddleColumn}>
             <View style={MainScreenStyles.commentHeader}>
               <Text
                 style={MainScreenStyles.commentUsername}
               >{this.props.username}</Text>
               {this.props.belongToCreator &&
                 <Text
                 style={MainScreenStyles.commentCreatorBadge}
                 >Creator</Text>
               }
             </View>
             <View style={{flexDirection:'column'}}>
               
             </View>
             <Text style={MainScreenStyles.commentContent}>{this.props.content} 
              
             </Text>
             <View style={{flexDirection:'row'}}>
              <Text style={MainScreenStyles.commentDate}>{this.props.date}</Text>
              <Pressable>
                <Text style={MainScreenStyles.reply}>Reply</Text>
              </Pressable>
             </View>
             {this.props.likedByCreator &&
               <View style ={MainScreenStyles.commentBadge}>
                 <Text
                   style={MainScreenStyles.commentBadgeText}>
                   Liked by creator
                 </Text>
               </View>
             }
             
             
           </View>
           <Pressable
            onPress={()=>this.props.isSubComment? this.props.likeSubComment(this.props.belongToComment, this.props.id): this.props.likeComment(this.props.id)}
            style={MainScreenStyles.commentRightColumn}>
             
             <Image
                 source = {this.props.liked?MainScreenIcons.redHeart:MainScreenIcons.emptyHeart}
                 style={MainScreenStyles.commentHeartIcon}>
             </Image>
             <Text
               style={MainScreenStyles.commentHearts}
             >{this.props.hearts}</Text>
           </Pressable>
         </View>
         <View style={MainScreenStyles.commentFooter}>
           <FlatList
             data={this.state.subCommentList.filter((i, index) => (index < this.state.subCommentDisplayed))}
             renderItem={e=> this.commentView(e)}
           />
           
           {this.state.subCommentDisplayed==0&&this.state.subComment!=0?
           <Pressable onPress={this.showMoreComment}>
           <View>
               <Text style={MainScreenStyles.viewMoreText}>
                 View replies ({this.state.subComment})
               </Text>
           </View>
           
         </Pressable>:
         this.state.subComment!=0&&
         <View style={{flexDirection:'row'}}>
           <Pressable  onPress={this.showMoreComment}>
              <Text style={MainScreenStyles.viewMoreText}>
                 View more
               </Text>
           </Pressable>
           <Pressable  onPress={this.showLessComment}>
              <Text style={MainScreenStyles.hideText}>
                 Hide
               </Text>
           </Pressable>
           </View>
          }
           
             
         </View>
       
         </View>
       </View>
     )
   }
   
 }
 const App = (props) => {
   
   const commentView = (e) =>{
     // console.log(e.item.subCommentList)
     return (
       <Comment
          isSubComment={true}
         belongToCreator = {e.item.belongToCreator}
         commentAvatar={e.item.commentAvatar}
         hearts={e.item.hearts}
         username={e.item.username}
         content={e.item.content}
         date={e.item.date}
         likedByCreator={e.item.likedByCreator}
         subCommentList = {e.item.subCommentList}
         liked={c.item.liked}

         
       />
       //<Text>{e.text} {e.icon}</Text>
     )
   }
   return (
     <View style = {MainScreenStyles.commentModal}>
       <Commentss/>
       <View style={MainScreenStyles.commentModalHeader}>
         <View/>
         <Text style={MainScreenStyles.commentNumber}>
           {props.commentNumber}
           1000 comments
         </Text>
         <Image
           source={MainScreenIcons.white_heart}
           style={MainScreenStyles.closingButton}
         />
       </View>
       <FlatList
         showsVerticalScrollIndicator={false}
         data={comments}
         renderItem={item=>commentView(item)}
         style={MainScreenStyles.commentView}
       />
     </View>
     
   );
 };
 
 
 export default App;
 