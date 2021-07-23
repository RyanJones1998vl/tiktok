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
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  DescriptiveText,
  DefinedText,
  SoundTitle,
  IconWithText,
  }from '../main/index';
import { 
  FONT,
  MainScreenIcons,
  MainScreenStyles,
  TextStyles
}  from '../../resources/constant';

export const SharingModal = (props) => {
    const effects = [
      {text:"Duet", icon:"duet"},
      {text:"Finding", icon:"finding"},
      {text:"Block", icon:"block"},
      {text:"Save", icon:"saving"},
      {text:"Report", icon:"report"},
    ]
    const friends = [
      {text:"NotMe", icon:"avatar"},
      {text:"Me", icon:"avatar"},
      {text:"Other", icon:"avatar"},
      {text:"Her", icon:"avatar"},
      {text:"Him", icon:"avatar"},
    ]
    const networks = [
      {text:"Link", icon:"link"},
      {text:"SMS", icon:"sms"},
      {text:"Messenger", icon:"messenger"},
      {text:"Zalo", icon:"zalo"},
      {text:"Messenger", icon:"messenger"},
    ]
    // const effectList = () => {
    //   return(
    //     <View>
    //       {
    //         effects.map((e)=>{
        
    //           <IconWithText
    //         sizeDef={[MainScreenStyles.effectOption]}
    //         imageSizeDef = {MainScreenStyles.effectOptionIcon}
    //         textSizeDef={MainScreenStyles.effectOptionText}
    //         imageSource = {`MainScreenIcons.${e.icon}`}
    //         text = {e.text}/>
    //       })
    //     }
    //     </View>
    //   ) 
        
    //   }
    // }
    // const effectList = effects.map((e,i) =>{
    //   <IconWithText
    //     sizeDef={[MainScreenStyles.effectOption]}
    //     imageSizeDef = {MainScreenStyles.effectOptionIcon}
    //     textSizeDef={MainScreenStyles.effectOptionText}
    //     imageSource = {`MainScreenIcons.${e.icon}`}
    //     text = {e.text}
    //   />
    // })
    const effectOptionView = (e) =>{
      console.log(e)
      return (
        <IconWithText
              sizeDef={[MainScreenStyles.effectOption]}
              imageSizeDef = {MainScreenStyles.effectOptionIcon}
              textSizeDef={MainScreenStyles.effectOptionText}
              imageSource = {MainScreenIcons[e.item.icon]}
              text = {e.item.text}/>
        //<Text>{e.text} {e.icon}</Text>
      )
    }
    const accountOptionView = (e) =>{
      console.log(e)
      return (
        <IconWithText
              sizeDef={[MainScreenStyles.effectOption]}
              imageSizeDef = {MainScreenStyles.accountOptionIcon}
              textSizeDef={MainScreenStyles.effectOptionText}
              imageSource = {MainScreenIcons[e.item.icon]}
              text = {e.item.text}/>
        //<Text>{e.text} {e.icon}</Text>
      )
    }
    const getIcon = e =>{
      return {e}
    }
    return (
      <View>
        {/* <RightBar
          style={MainScreenStyles.rightBar}
        />
        <View
        style={MainScreenStyles.leftBottomPanel}  
      >
        <DefinedText
          style = {MainScreenStyles.accountName}
          text= "@DFSDAF" 
        />
        <DescriptiveText
          text="%Hello%myg name is $sssxxxsssssshi$ho #ryan #jones?? ?"
        />
        <SoundTitle
          text = "helllo"
        />
  
      </View> */}
  
        <View style={MainScreenStyles.sharingModal}>
          <View style={MainScreenStyles.textInSharingModal}>
            <Text style={MainScreenStyles.sharingModalTile}>Send to</Text>
  
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled = {true}
            horizontal={true}
            data={friends}
            renderItem={item=>accountOptionView(item)}
            keyExtractor={i => i.text}
            style={MainScreenStyles.effectOptionList}
          />
          <View style={MainScreenStyles.textInSharingModal}>
            <Text style={MainScreenStyles.sharingModalTile}>Share to</Text>
  
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled = {true}
            horizontal={true}
            data={networks}
            renderItem={item=>effectOptionView(item)}
            keyExtractor={i => i.text}
            style={{...MainScreenStyles.effectOptionList, ...MainScreenStyles.bottomBorder}}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled = {true}
            horizontal={true}
            data={effects}
            renderItem={item=>effectOptionView(item)}
            keyExtractor={i => i.text}
            style={MainScreenStyles.effectOptionList}
  
          />
          <Pressable 
            onPress={props.closeModal()}
            style={{...MainScreenStyles.cancelInSharingModal, ...MainScreenStyles.topBorder}}>
            <Text style={MainScreenStyles.sharingModalCancle}>CANCEL</Text>
  
          </Pressable>
        </View>
      </View>
      
    );
  };
  