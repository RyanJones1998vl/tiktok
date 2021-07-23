import React from 'react';
import { FlatList, Image, View, Text, StyleSheet, TouchableHighlight, TouchableHighlightBase, ScrollView, Pressable } from 'react-native';
import  {DiscoverScreenStyles, 
        DiscoveryScreenIcons,
        MainScreenIcons} 
        from  '../../resources/constant'
import {AutoScrollFlatList} from 'react-native-autoscroll-flatlist'
import {SizedImage} from '../main/index'

export class GifList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            shortDescription: "AFAF",
            fullDescription:"AFAFAFAFAFAFAFAFAFAF",
            displayFullDiscription:false,
            discriptionToDisplay: "AFAF",
            gifList : [
                [
                    {official:true, gif: DiscoveryScreenIcons.tn1},
                    {official:true, gif: DiscoveryScreenIcons.tn0},
                    {official:false, gif: DiscoveryScreenIcons.tn2},                
                ],
                [
                    {official:false, gif: DiscoveryScreenIcons.tn3},
                    {official:false, gif: DiscoveryScreenIcons.tn1},
                    {official:true, gif: DiscoveryScreenIcons.tn0},                
                ],
                [
                    {official:true, gif: DiscoveryScreenIcons.tn6},
                    {official:true, gif: DiscoveryScreenIcons.tn4},
                    {official:true, gif: DiscoveryScreenIcons.tn2},                
                ],
                [
                    {official:true, gif: DiscoveryScreenIcons.video},
                    {official:true, gif: DiscoveryScreenIcons.tn10},
                    {official:true, gif: DiscoveryScreenIcons.tn2},                
                ],
            ],
        };
    }
    changeDiscription = () =>{
        this.state.displayFullDiscription ?
        this.setState({discriptionToDisplay:this.state.shortDescription, displayFullDiscription:false}) :
        this.setState({discriptionToDisplay:this.state.fullDescription, displayFullDiscription:true})
    }
    renderGif = (s) => {
        // console.log(s)
        return (
            <View style={DiscoverScreenStyles.gifRow}>
                <Pressable 
                onPress={()=> this.props.navigation.push("MyVideo",{video:s.item[0].gif}
                )}
                style={DiscoverScreenStyles.gifItem}>
                    
                    <Image 
                        source={s.item[0].gif}
                        style={DiscoverScreenStyles.gif}/>
                    {s.item[0].official &&
                    <View style={DiscoverScreenStyles.officialBadge}>
                        <Text style={DiscoverScreenStyles.officialText}>Official</Text>
                    </View>
                    }
                </Pressable >
                <Pressable 
                onPress={()=> this.props.navigation.push("MyVideo",{video:s.item[1].gif}
                )}
                style={DiscoverScreenStyles.gifItem}>
                    
                    <Image 
                        source={s.item[1].gif}
                        style={DiscoverScreenStyles.gif}/>
                    {s.item[1].official &&
                    <View style={DiscoverScreenStyles.officialBadge}>
                        <Text style={DiscoverScreenStyles.officialText}>Official</Text>
                    </View>
                    }
                </Pressable>
                <Pressable 
                onPress={()=> this.props.navigation.push("MyVideo",{video:s.item[2].gif}
                )}
                style={DiscoverScreenStyles.gifItem}>
                    <Image 
                        source={s.item[2].gif}
                        style={DiscoverScreenStyles.gif}/>
                    {s.item[2].official &&
                    <View style={DiscoverScreenStyles.officialBadge}>
                        <Text style={DiscoverScreenStyles.officialText}>Official</Text>
                    </View>
                    }
                </Pressable>
                
            </View>
            
        )
    }
    render(){
        // console.log(this.props.navigation.actions.goBack)
        return( 
            <View style={DiscoverScreenStyles.gifList}>
                <View style={DiscoverScreenStyles.gifListFunctionBar}>
                    <Pressable onPress={() => this.props.navigation.goBack()}>
                        <SizedImage 
                            source={DiscoveryScreenIcons.back}
                            style={DiscoverScreenStyles.backIcon}/>
                    </Pressable>
                    
                    {/* <Text style={DiscoverScreenStyles.trendTitle}>#{this.props.navigation.state.params.trend}</Text> */}
                    <SizedImage 
                        source={DiscoveryScreenIcons.share}
                        style={DiscoverScreenStyles.shareIcon}/>
                </View>
                <ScrollView>
                    <View style={DiscoverScreenStyles.gifListHeader}>
                        <View style={DiscoverScreenStyles.upperGifListHeader}>
                            {
                                this.state.trendImage?
                                <Image
                                    source={this.state.trendImage}
                                    style={DiscoverScreenStyles.trendImage}/>:
                                <View style={DiscoverScreenStyles.trendIconView}>
                                    <SizedImage
                                        style={DiscoverScreenStyles.trendIcon}
                                        source={this.props.navigation.state.params.forHashtag?DiscoveryScreenIcons.hashtag:DiscoveryScreenIcons.sound}/>
                                </View>

                            }
                            
                            <View style={{justifyContent:'space-between'}}>  
                                <View>
                                    <Text style={DiscoverScreenStyles.trendName}>#{this.props.navigation.state.params.trend}</Text>
                                    {
                                        this.props.navigation.state.params.forHashtag?
                                        <Text style={DiscoverScreenStyles.viewNumber}>{this.props.navigation.state.params.number} views</Text>:
                                        <View>
                                            <Text style={DiscoverScreenStyles.viewNumber}>{this.props.navigation.state.params.creator}</Text>                                            
                                            <Text style={DiscoverScreenStyles.viewNumber}>{this.props.navigation.state.params.number} videos</Text>
                                            
                                        </View>
                                    }
                                </View>
                                <View style={DiscoverScreenStyles.addToFavouriteBadge}>
                                    <SizedImage
                                        source={DiscoveryScreenIcons.favorite}
                                        style={DiscoverScreenStyles.addToFavouriteIcon}/>
                                    <Text style={DiscoverScreenStyles.addToFavouriteText}>Add to Favourites</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={DiscoverScreenStyles.descriptionText}>{this.state.discriptionToDisplay}</Text>
                        {
                            this.state.discriptionToDisplay != "" && 
                            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                                <TouchableHighlight
                                    onPress={this.changeDiscription}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Text style={DiscoverScreenStyles.collapseExpandText}>{this.state.displayFullDiscription?"Collapse":"Expand"}</Text>
                                        <Image 
                                            style={DiscoverScreenStyles.collapseExpandIcon}
                                            source={!this.state.displayFullDiscription&&DiscoveryScreenIcons.down}/>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        }
                    </View>
                    <View>
                        <FlatList
                            data={this.state.gifList}
                            renderItem={g => this.renderGif(g)}
                            style={{ paddingBottom:110/2}}/>

                    </View>
                </ScrollView>
            </View>
        )
    }
    
}