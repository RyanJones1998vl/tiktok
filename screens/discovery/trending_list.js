import React from 'react';
import { FlatList, Image, View, Text, Pressable } from 'react-native';
import { DiscoveryIconId } from '../../resources/constant';
import  {DiscoverScreenStyles, 
        DiscoverScreenIcons,
        DiscoveryScreenIcons} 
        from '../../resources/constant';
import {SizedImage} from '../main/index'

const renderGif = (e, f) => {
    return (
        <View>
            {e.item.isGif?
            <Pressable
                onPress={()=>f('MyVideo', 
                    {video:e.item.gif})}   
                >
                <Image
                style={DiscoverScreenStyles.shortGif}
                source = {e.item.gif}/>
            </Pressable>:
            <View style={DiscoverScreenStyles.tapToNext}>
                <Text style={DiscoverScreenStyles.tapToNextText}>Tap to view</Text>
                <Text style={DiscoverScreenStyles.tapToNextText}>more content</Text>
            </View>
            }
            
        </View>
    )
}
const TrendingList =(props)=>{
    return(
        <View style ={DiscoverScreenStyles.trendingSection}>
            <View style = {DiscoverScreenStyles.upperTrendingSection}>
                <View style={DiscoverScreenStyles.hashtagIconView}>
                    <Image
                        source={
                            props.type == DiscoveryIconId.sound?DiscoveryScreenIcons.sound:
                            props.type == DiscoveryIconId.filter?DiscoveryScreenIcons.filter:
                            DiscoveryScreenIcons.hashtag
                        }
                        style={DiscoverScreenStyles.hashtagIcon}/>
                </View>
                
                <View style={DiscoverScreenStyles.leftUpperTrendingSection}>
                    <View style={DiscoverScreenStyles.upperMiddleColumn}>
                        <View>
                            <Text style={DiscoverScreenStyles.title}>{props.title}</Text>
                        </View>
                        <View>
                            <Text style={DiscoverScreenStyles.descriptionText}>
                                {props.type == DiscoveryIconId.sound? "Trending sound":
                                props.type == DiscoveryIconId.filter? "Trending effect":
                                "Trending hashtag"}
                            </Text>
                        </View>
                    </View>
                    <Pressable 
                        onPress={()=>props.goToGifList('GifList', 
                                                {trend:props.title,
                                                number:props.number,
                                                creator:"",
                                                forHashtag:props.type==DiscoveryIconId.hashtag})}                        
                        style={DiscoverScreenStyles.numberBadge}>
                        <Text>{props.number} </Text>
                        <SizedImage
                            source = {DiscoveryScreenIcons.rightArrow}
                            style= {DiscoverScreenStyles.rightArrow}/>
                    </Pressable>
                </View>
            </View>
            <View style = {DiscoverScreenStyles.lowerTrendingSection}>
                <FlatList
                    data={props.gifs}
                    renderItem={g=>renderGif(g, props.goToGifList)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}/>
            </View>
        </View>
    )
}
export default TrendingList;