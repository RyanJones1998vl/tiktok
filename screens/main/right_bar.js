import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  MainScreenStylesheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
  PixelRatio,
} from 'react-native';
import {DiscoveryScreenIcons, MainScreenIcons, MainScreenStyles}
from '../../resources/constant'
import {IconWithText} from '../main/index'
export const RightBar = (props) =>{
    return (
        <View style={MainScreenStyles.rightBar}>
            <View style={MainScreenStyles.avatarView}>
              <Pressable 
                // onPress={()=>props.goToUser('Me', 
                // {username:u.item.username,
                // notMe:true,
                // followed:props.follow
                // })}
                style={MainScreenStyles.avatarBorder}>
                <Image 
                  style={MainScreenStyles.avatarImage}
                  source = {DiscoveryScreenIcons.avatar}/>
              </Pressable>
              <Image 
                style={MainScreenStyles.add}
                source = {MainScreenIcons.add}/>
            </View>
            <IconWithText 
              sizeDef={[MainScreenStyles.IWT, MainScreenStyles.IWT_heart]}
              imageSizeDef = {MainScreenStyles.IWT_icon}
              textSizeDef = {MainScreenStyles.IWT_text}
              imageSource = {MainScreenIcons.white_heart}
              text = {props.likes}
            />
            <Pressable
              onPress = {()=>props.openCommentSection()}>
              <IconWithText 
                sizeDef={{...MainScreenStyles.IWT, 
                          ...MainScreenStyles.IWT_comment,
                        }}
                imageSizeDef = {{...MainScreenStyles.IWT_icon,
                                 ...MainScreenStyles.IWT_icon_comment,}}
                textSizeDef = {MainScreenStyles.IWT_text}
                imageSource = {MainScreenIcons.comment}
                text = {props.comments}
              />
            </Pressable>
            <Pressable
              onPress = {()=>props.openSharingSection()}>
              <IconWithText 
              sizeDef={[MainScreenStyles.IWT]}
              imageSizeDef = {MainScreenStyles.IWT_icon}
              textSizeDef = {MainScreenStyles.IWT_text}
              imageSource = {MainScreenIcons.sharing}
              text = {props.shares}
            />

            </Pressable>
            
            <View style={MainScreenStyles.diskView}>
              <Image
                source={DiscoveryScreenIcons.avatar}
                style={MainScreenStyles.diskBorder}/>
              <Image
                source={DiscoveryScreenIcons.avatar}
                style={MainScreenStyles.diskImage}/>
            </View>
        </View>
        
      );
}

